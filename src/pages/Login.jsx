import React, { useState } from 'react';

import LoginForm from '../components/LoginForm2'; // Assuming this is the correct path to your form
import { loginUser } from '../services/api'; // Assuming this is the correct path to your API service

const Login = ({ onLoginSuccess }) => { // Renamed prop to onLoginSuccess for clarity
  const [loginError, setLoginError] = useState('');
  

  const handleLogin = async (credentials) => {
    console.log('Login credentials:', credentials);
    const { email, password } = credentials; // Destructure email and password

    try {
      const response = await loginUser(email, password);
      console.log('Login successful:', response);

      if (response && response.token && response.userType) {
        // Store the token (e.g., in local storage)
        localStorage.setItem('authToken', response.token);

        // Call the onLoginSuccess function passed from the parent (App.jsx)
        onLoginSuccess(response);

        // The navigation to the correct dashboard is now handled in App.jsx
        // based on the userType passed to onLoginSuccess
      } else {
        setLoginError('Login failed. Invalid credentials or server error.');
      }
    } catch (err) {
      setLoginError(err?.response?.data?.message || 'Login failed. Please check your credentials.');
      console.error('Login error:', err);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md p-6 border rounded-lg shadow-md">
        <h2 className="mt-6 text-center text-2xl font-bold text-gray-900">
          Sign in to your account
        </h2>
        {loginError && <p className="mt-4 text-center text-sm text-red-500">{loginError}</p>}
        <LoginForm onLogin={handleLogin} /> {/* Pass handleLogin to the form */}
      </div>
    </div>
  );
};

export default Login;