import React from 'react';

const SignOut = () => {
  // Remove the token from localStorage or perform any other sign out actions
  localStorage.removeItem('token');
  
  return (
    <div className="page-container">
      <h2>Sign Out Page</h2>
      <p>You have been successfully signed out.</p>
    </div>
  );
};

export default SignOut;
