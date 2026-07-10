const Dashboard = ({ users }) => {
  return (
    <div style={{padding: '20px', color: 'white', minHeight: '70vh'}}>
      <h2 style={{textAlign: 'center', color: '#4F46E5', marginBottom: '30px'}}>Quiz Results</h2>
      
      {/* TABLE WITH SNO NAME EMAIL SCORE */}
      <table style={{width: '90%', margin: '20px auto', borderCollapse: 'collapse', backgroundColor: '#1e1e1e'}}>
        <thead>
          <tr style={{backgroundColor: '#4F46E5'}}>
            <th style={{border: '1px solid #4F46E5', padding: '12px'}}>S.No</th>
            <th style={{border: '1px solid #4F46E5', padding: '12px'}}>Name</th>
            <th style={{border: '1px solid #4F46E5', padding: '12px'}}>Email</th>
            <th style={{border: '1px solid #4F46E5', padding: '12px'}}>Score</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td style={{border: '1px solid #4F46E5', padding: '10px', textAlign: 'center'}}>{index + 1}</td>
              <td style={{border: '1px solid #4F46E5', padding: '10px', textAlign: 'center'}}>{user.name}</td>
              <td style={{border: '1px solid #4F46E5', padding: '10px', textAlign: 'center'}}>{user.email}</td>
              <td style={{border: '1px solid #4F46E5', padding: '10px', textAlign: 'center'}}>{user.score !== undefined ? `${user.score}/5` : '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;