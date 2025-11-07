import React, { useState } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import './styles.css';

export default function App() {
  const [page, setPage] = useState('login');
  const [user, setUser] = useState(null); // store logged-in user

  const handleLoginSuccess = (username) => {
    setUser(username);
    setPage('home'); // go to home page
  };

  // Function to handle logout
  const handleLogout = () => {
    setUser(null);
    setPage('login');
  };

  return (
    <div className="app-container">
      <h1>🏥 Hospital Appointment Booking System</h1>

      {page !== 'home' && (
        <div className="nav-buttons">
          <button onClick={() => setPage('login')}>Login</button>
          <button onClick={() => setPage('register')}>Register</button>
        </div>
      )}

      {page === 'login' && <Login onLoginSuccess={handleLoginSuccess} />}
      {page === 'register' && <Register />}
      {page === 'home' && <Home username={user} onLogout={handleLogout} />}
    </div>
  );
}
