import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import ListingDetails from './pages/ListingDetails';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import OwnerDashboard from './pages/Owner-dashboard';
import Contact from './pages/Contact';
import About from './pages/About';
import RentalListings from './pages/RentalListings';
import ListingsSummary from './components/ListingsSummary';
import MainLayout from './layouts/MainLayout'; // Import MainLayout

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState(null);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();


  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsLoggedIn(true);
      // You might want to fetch user data here in a real application
    }
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserType(null);
    setUsername('');
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  const handleLoginSuccess = (userData) => {
    setIsLoggedIn(true);
    setUsername(userData.email);
    setUserType(userData.userType);
    localStorage.setItem('authToken', userData.token);
    localStorage.setItem('userType', userData.userType);

    if (userData.userType === 'owner') {
      navigate('/owner-dashboard');
    } else {
      navigate('/dashboard');
    }
  };

   

  return (
    <div className="flex flex-col min-h-screen">
      <Routes>
        {/* Routes using the MainLayout (with Navbar) */}
        <Route path="/" element={<MainLayout 
          isLoggedIn={isLoggedIn}
          username={username}
          userType={userType}
          onLogout={handleLogout}
        />}>
          <Route index element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/listing/:id" element={<ListingDetails />} />
          <Route path="/rentals" element={<RentalListings />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/login"
            element={<Login onLoginSuccess={handleLoginSuccess} />}
          />
          <Route path="/signup" element={<Signup />} />
        </Route>

        {/* Dashboard route with its own layout (including Sidebar) */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="rentals/summary" element={<ListingsSummary />} />
          
          {/* Add other dashboard sub-routes here */}
        </Route>

        {/* Owner Dashboard route */}
        <Route path="/owner-dashboard" element={<OwnerDashboard />} />
      </Routes>
     
    </div>
  );
}

export default App;