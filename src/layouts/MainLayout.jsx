// src/layouts/MainLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar'; // Your main navigation component
import Footer from '../components/Footer';
const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet /> {/* Content of the child routes will be rendered here */}
      <Footer />
    </div>
  );
};

export default MainLayout;