import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import ListingDetails from './pages/ListingDetails';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import OwnerDashboard from './pages/Owner-dashboard';
import Contact from './pages/Contact';
import About from './pages/About';
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
    setUsername(userData.email); // Assuming your backend returns email as identifier
    setUserType(userData.userType);
    localStorage.setItem('authToken', userData.token);
    localStorage.setItem('userType', userData.userType); // Store userType

    if (userData.userType === 'owner') {
      navigate('/owner-dashboard');
    } else {
      navigate('/dashboard');
    }
  };

  // Array of routes where the Navbar should NOT be displayed
  const hideNavbarRoutes = ['/dashboard', '/owner-dashboard'];
  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
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
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/owner-dashboard" element={<OwnerDashboard/>} />
          <Route path="/rentals" element={<RentalListings />} />
          <Route path="/venues" element={<div>Venues Page</div>} />
          <Route path="/cars" element={<div>Cars Page</div>} />
          <Route path="/jobs" element={<div>Jobs Page</div>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;