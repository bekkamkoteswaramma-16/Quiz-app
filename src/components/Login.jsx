import { useState } from 'react';

const Login = ({ users, onLogin, onSwitchToRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // ippudu email + password tho check chestham
    const user = users.find(u => u.email === email && u.password === password);
    if(user) {
      alert('Login Successful!');
      onLogin(user);
    } else {
      alert('Invalid Email or Password');
    }
  };

  return (
    <div style={{maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #4F46E5', borderRadius: '10px', backgroundColor: '#1e1e1e'}}>
      <h2 style={{textAlign: 'center', color: 'white'}}>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{marginBottom: '15px'}}>
          <label style={{color: 'white'}}>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{width: '100%', padding: '10px', marginTop: '5px'}} required />
        </div>
        <div style={{marginBottom: '15px'}}>
          <label style={{color: 'white'}}>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{width: '100%', padding: '10px', marginTop: '5px'}} required />
        </div>
        <button type="submit" style={{width: '100%', padding: '10px', backgroundColor: '#4F46E5', color: 'white', border: 'none', borderRadius: '5px'}}>Login</button>
      </form>
      <p style={{textAlign: 'center', color: 'white', marginTop: '10px'}}> Don't have account? <span onClick={onSwitchToRegister} style={{color: '#4F46E5', cursor: 'pointer'}}>Register</span> </p>
    </div>
  );
};

export default Login;