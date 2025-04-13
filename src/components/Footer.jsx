import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-auto ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
        <div className="flex shrink-0 items-center">
              <Link to="/">
                <img
                  alt="Hira logo"
                  src="/src/assets/Hira_logo.png"
                  className="h-8 w-auto"
                />
              </Link>
            </div>
          <p className="text-sm mt-2">
            Your one-stop platform for rentals, venues, jobs, and more in Lesotho.
          </p>
        </div>

        <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
          <Link to="/about" className="hover:text-gray-300">
            About Us
          </Link>
          <Link to="/contact" className="hover:text-gray-300">
            Contact Us
          </Link>
          <Link to="/privacy" className="hover:text-gray-300">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-gray-300">
            Terms of Service
          </Link>
        </nav>

        <div className="mt-4 md:mt-0 text-sm">
          &copy; {new Date().getFullYear()} Hira. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;