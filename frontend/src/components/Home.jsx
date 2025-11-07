import React from 'react';

export default function Home({ username, onLogout }) {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome, {username || "User"} 👋</h1>
      <p style={styles.text}>
        You have successfully logged in to the Hospital Appointment System.
      </p>
      <button style={styles.button} onClick={onLogout}>Logout</button>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: '2rem',
    color: '#007bff',
  },
  text: {
    fontSize: '1.2rem',
    color: '#333',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    cursor: 'pointer',
  },
};
