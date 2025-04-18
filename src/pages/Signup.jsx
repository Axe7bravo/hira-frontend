import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignupForm from '../components/SignupForm';
import { registerUser } from '../services/api'; // Import the registerUser service

const Signup = () => {
  const [signupError, setSignupError] = useState('');
  const navigate = useNavigate();


  const handleSignup = async (credentials) => { // Make handleSignup async
    console.log('Signup credentials:', credentials);

    try {
      const response = await registerUser(credentials.email, credentials.password, credentials.userType); // Use registerUser
      console.log('Signup successful:', response);
      setSignupError('');

      alert('Signup successful!'); // Replace with a better UI message
      navigate('/'); // Redirect to login page
    } catch (error) {
      console.error('Signup error:', error);
      setSignupError(error.message || 'Signup failed.');
    }
  };

  return (

      <div>
        
        {signupError && <p style={{ color: 'red' }}>{signupError}</p>}
        <SignupForm onSignup={handleSignup} />
      </div>
  
  );
};

export default Signup;