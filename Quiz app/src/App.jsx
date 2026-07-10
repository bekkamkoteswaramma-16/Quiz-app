import { useState } from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import Quiz from "./components/Quiz";
import Dashboard from "./components/Dashboard";
import { users as initialUsers } from "./components/data/users";

function App() {
  const [page, setPage] = useState('register'); // start with register
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState(initialUsers);

  const handleRegister = (newUser) => {
    setUsers([...users, { ...newUser, id: users.length + 1, score: undefined }]);
    setPage('login');
  };

  const handleLogin = (user) => {
    setCurrentUser(user);
    setPage('quiz');
  };
  
  const handleQuizComplete = (score) => {
    const updatedUsers = users.map(u => 
      u.email === currentUser.email ? { ...u, score: score } : u
    );
    setUsers(updatedUsers);
    setPage('dashboard');
  }

  return (
    <div style={{backgroundColor: '#121212', minHeight: '100vh'}}>
      <Navbar title="React Quiz App" />
      
      {page === 'register' && <Register users={users} onRegister={handleRegister} onSwitchToLogin={() => setPage('login')} />}
      {page === 'login' && <Login users={users} onLogin={handleLogin} onSwitchToRegister={() => setPage('register')} />}
      {page === 'quiz' && <Quiz onQuizComplete={handleQuizComplete} />}
      {page === 'dashboard' && <Dashboard users={users} />}
      
      <Footer />
    </div>
  );
}

export default App;