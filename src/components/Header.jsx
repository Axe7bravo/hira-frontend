//import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button'; // Shadcn UI Button
import Navbar from './Navbar';
import { AppSidebar } from "@/components/app-sidebar"


const Header = ({ isLoggedIn, userType, onLogout }) => {

  const navigate = useNavigate();
  //const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (

    <Navbar isLoggedIn={isLoggedIn} userType={userType} onLogout={handleLogout}/>
    
  );
};

export default Header;