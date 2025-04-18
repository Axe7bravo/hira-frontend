// src/layouts/MainLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar'; // Your main navigation component
import Footer from '../components/Footer';
const MainLayout = () => {
  return (
    <div>
      <Navbar 
        // You'll pass the necessary props from App.jsx here
        // isLoggedIn={isLoggedIn}
        // username={username}
        // userType={userType}
        // onLogout={handleLogout}
      />
      <Outlet /> {/* Content of the child routes will be rendered here */}
      <Footer />
    </div>
  );
};

export default MainLayout;