import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SIGNUP_MUTATION } from '../utils/mutations';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signupUser, { loading, error }] = useMutation(SIGNUP_MUTATION);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await signupUser({
        variables: { username, email, password }
      });
      const token = data.signup.token;
      localStorage.setItem('token', token);
      console.log('Signup successful');
      // Redirect the user to the dashboard or homepage
      // history.push('/');
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <div className="signup-page">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>{loading ? 'Signing up...' : 'Signup'}</button>
        {error && <div className="error-message">{error.message}</div>}
      </form>
    </div>
  );
}

export default Signup;
