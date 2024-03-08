// components/Login.jsx

import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_MUTATION } from '../utils/mutations';
import { setContext } from '@apollo/client/link/context';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginMutation, { loading, error }] = useMutation(LOGIN_MUTATION);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await loginMutation({ variables: { email, password } });
      console.log('Response data:', data); // Log the response data for debugging
      const token = data.login.token;
      console.log('Extracted token:', token); // Log the extracted token for debugging
      localStorage.setItem('token', token);
      console.log('Token saved in local storage');
  
      // Add the token to the request headers before making subsequent requests
      const authLink = setContext((_, { headers }) => {
        // Get the token from local storage
        const token = localStorage.getItem('token');
        return {
          headers: {
            ...headers,
            Authorization: token ? `Bearer ${token}` : '',
          },
        };
      });
  
      // Redirect the user to the dashboard or homepage
      // history.push('/');
  
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };
  

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit" disabled={loading}>{loading ? 'Logging in...' : 'Login'}</button>
        {error && <div className="error-message">{error.message}</div>}
      </form>
    </div>
  );
}

export default Login;
