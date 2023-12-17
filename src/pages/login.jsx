import React from 'react';

const UserAdminForms = () => {
  const backgroundStyle = {
    backgroundImage: 'url("your-background-image-url.jpg")', // Replace with your background image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const formContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '400px',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
  };

  const userFormStyle = {
    backgroundColor: '#f0f8ff', // Light Blue
    width: '100%',
    maxWidth: '300px',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '20px',
  };

  const adminFormStyle = {
    backgroundColor: '#f0e68c', // Khaki
    width: '100%',
    maxWidth: '300px',
    padding: '20px',
    borderRadius: '8px',
  };

  const formStyle = {
    width: '100%',
    maxWidth: '300px',
  };

  const headingStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#333',
  };

  const buttonStyle = {
    marginTop: '10px',
    backgroundColor: '#4caf50',
    color: '#fff',
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '100%',
  };

  return (
    <div style={backgroundStyle}>
      <h1 style={{ color: '#fff', marginBottom: '30px' }}>Image Upload Website</h1>

      <div style={formContainerStyle}>
        <div style={{ ...userFormStyle }}>
          <h2 style={headingStyle}>User Login</h2>
          <form style={{ ...formStyle }}>
            <label htmlFor="userUsername">Username:</label>
            <input type="text" id="userUsername" name="userUsername" required />

            <label htmlFor="userPassword">Password:</label>
            <input type="password" id="userPassword" name="userPassword" required />

            <button type="submit" style={buttonStyle}>
              Login
            </button>
          </form>
        </div>

        <div style={{ ...adminFormStyle }}>
          <h2 style={{ ...headingStyle }}>Admin Login</h2>
          <form style={{ ...formStyle }}>
            <label htmlFor="adminUsername">Username:</label>
            <input type="text" id="adminUsername" name="adminUsername" required />

            <label htmlFor="adminPassword">Password:</label>
            <input type="password" id="adminPassword" name="adminPassword" required />

            <button type="submit" style={buttonStyle}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserAdminForms;
