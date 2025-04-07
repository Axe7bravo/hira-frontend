import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm2';
import { loginUser } from '../services/api'; // Import the loginUser service
import Navbar from '@/components/Navbar';

const Login = () => {

  const [loginError, setLoginError] = useState('');

  const navigate = useNavigate();




  const handleLogin = async (credentials) => { // Make handleLogin async
    console.log('Login credentials:', credentials);
    const logname = credentials.email;
    const logpass = credentials.password;

   try {
         const response = await loginUser(logname, logpass);
         console.log('Login successful:', response);
   
         if (response && response.token && response.userType) {
           // Store the token (e.g., in local storage)
           localStorage.setItem('authToken', response.token);
   
           // Call the onLogin function passed from the parent,
           // potentially passing user information
           //onLogin(logname, logpass);
           
   
           // Redirect to the dashboard or another protected route
           navigate('/dashboard');
         } else {
          setLoginError('Login failed. Invalid credentials or server error.');
         }
       } catch (err) {
         
         setLoginError(err.response);
         if (err.response && err.response.data && err.response.data.message) {
          setLoginError(err.response.data.message);
          console.log(err.response.data.message);
          // Use backend error message if available
         } else {
           console.error('Login error:', err);
         }
       }
  };

  return (
    <>
      
      <div className="flex justify-center items-center h-screen">
        
        <div className="w-full max-w-md p-6 border rounded-lg shadow-md">
          {loginError && <p className="text-red-500 mb-4">{loginError}</p>}
          <LoginForm onLogin={handleLogin} />
        </div>
      </div>
    </>
  );
};

export default Login;