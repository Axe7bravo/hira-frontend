import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import { Button } from '@/components/ui/button';

const Navbar = ({ isLoggedIn, userType, onLogout, username }) => {
  //const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);



  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-blue-800 shadow-md">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex justify-between align-items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-indigo-600 font-bold text-xl">
                <img
                  alt="Your Company"
                  src="/src/assets/Hira_logo.png"
                  className="mx-auto h-10 w-auto"
                />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/rentals"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-neutral-50 hover:text-neutral-300 hover:border-gray-300"
              >
                Rentals
              </Link>
              <Link
                to="/venues"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-neutral-50 hover:text-neutral-300 hover:border-gray-300"
              >
                Venues
              </Link>
              <Link
                to="/cars"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-neutral-50 hover:text-neutral-300 hover:border-gray-300"
              >
                Cars
              </Link>
              <Link
                to="/jobs"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-neutral-50 hover:text-neutral-300 hover:border-gray-300"
              >
                Jobs
              </Link>
            </div>
          </div>
          <div className="flex items-center ">
            <div className=" flex-shrink-0 ">
              {isLoggedIn ? (
                <>
                  {userType === 'owner' && (
                    <Link
                      to="/owner-dashboard"
                      className=" mr-4 text-sm font-medium text-gray-500 hover:text-gray-700 "
                    >
                      Owner Dashboard
                    </Link>
                  )}
                  <Link
                    to="/dashboard"
                    className=" mr-4 text-sm font-medium text-neutral-50 hover:text-gray-700  "
                  >
                    {username ? `Dashboard (${username})` : 'Dashboard'}
                  </Link>
                  <Button variant="ghost" onClick={onLogout}>
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="text-sm font-medium text-neutral-50 hover:text-neutral-300"
                  >
                    Log in
                  </Link>
                  <Link
                    to="/signup"
                    className="ml-4 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-blue-800 bg-yellow-200 hover:bg-yellow-100"
                  >
                    Sign up
                  </Link>
                </>
              )}
            </div>
            <div className="-mr-2 flex items-center sm:hidden">
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="pt-2 pb-3 space-y-1">
          <Link
            to="/rentals"
            className="block px-3 py-2 rounded-md text-base font-medium text-neutral-50 hover:bg-gray-50"
          >
            Rentals
          </Link>
          <Link
            to="/venues"
            className="block px-3 py-2 rounded-md text-base font-medium text-neutral-50 hover:bg-gray-50"
          >
            Venues
          </Link>
          <Link
            to="/cars"
            className="block px-3 py-2 rounded-md text-base font-medium text-neutral-50 hover:bg-gray-50"
          >
            Cars
          </Link>
          <Link
            to="/jobs"
            className="block px-3 py-2 rounded-md text-base font-medium text-neutral-50 hover:bg-gray-50"
          >
            Jobs
          </Link>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
          <div className="space-y-1">
            {isLoggedIn ? (
              <>
                {userType === 'owner' && (
                  <Link
                    to="/owner-dashboard"
                    className="block px-3 py-2 rounded-md text-base font-medium text-neutral-50 hover:bg-gray-50"
                  >
                    Owner Dashboard
                  </Link>
                )}
                <Link
                  to="/dashboard"
                  className="block px-3 py-2 rounded-md text-base font-medium text-neutral-50 hover:bg-gray-50 "
                >
                  {username ? `Dashboard (${username})` : 'Dashboard'}
                </Link>
                <Button variant="ghost" onClick={onLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block px-3 py-2 rounded-md text-base font-medium text-neutral-50 hover:bg-gray-50"
                >
                  Log in
                </Link>
                <Link
                  to="/signup"
                  className="block w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Sign up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;