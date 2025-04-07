import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import ListingDetails from './pages/ListingDetails';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';
import RentalListings from './pages/RentalListings';
import Navbar from './components/Navbar';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Initialize to false
  const [userType, setUserType] = useState(null); // Initialize to null
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check for token on app load to persist login
    const token = localStorage.getItem('authToken');
    if (token) {
      // You might want to validate the token with your backend here
      // For simplicity, we'll just assume it's valid and set isLoggedIn
      setIsLoggedIn(true);
      // You might also want to fetch user data (username, userType) here
      // based on the token and update the state
    }
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserType(null);
    setUsername('');
    localStorage.removeItem('authToken'); // Clear the token
    navigate('/login');
  };

  const handleLoginSuccess = (userData) => {
    setIsLoggedIn(true);
    setUsername(userData.username);
    console.log(userData.username)
    setUserType(userData.userType);
    localStorage.setItem('authToken', userData.token); // Store the token
    navigate('/dashboard'); // Redirect to dashboard after successful login
  };

  // Array of routes where the Navbar should NOT be displayed
  const hideNavbarRoutes = ['/dashboard', '/owner-dashboard'];
  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && (
        <Navbar
          isLoggedIn={isLoggedIn}
          username={username}
          userType={userType}
          onLogout={handleLogout}
        />
      )}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/listing/:id" element={<ListingDetails />} />
          <Route
            path="/login"
            element={<Login onLoginSuccess={handleLoginSuccess} />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/owner-dashboard" element={<div>Owner Dashboard Content</div>} />
          <Route path="/rentals" element={<RentalListings />} />
          <Route path="/venues" element={<div>Venues Page</div>} />
          <Route path="/cars" element={<div>Cars Page</div>} />
          <Route path="/jobs" element={<div>Jobs Page</div>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;