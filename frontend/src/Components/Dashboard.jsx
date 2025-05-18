
import { useEffect, useState } from 'react';

function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5001/api/auth/user', {
      credentials: 'include',
    })
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(err => console.error(err));
  }, []);

  if (!user) return <h2>Loading user info...</h2>;

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Welcome, {user.name}</h1>
      <img src={user.image} alt="profile" width="150" style={{ borderRadius: '50%' }} />
      <p>Email: {user.email}</p>
      <a href="http://localhost:5001/api/auth/logout">Logout</a>
    </div>
  );
}

export default Dashboard;
