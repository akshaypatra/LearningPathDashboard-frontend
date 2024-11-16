import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GoHome } from "react-icons/go";
import { FaUser } from "react-icons/fa6";
import { RiLoginBoxLine } from "react-icons/ri";
import { VscSignIn } from "react-icons/vsc";
import { FiMenu } from "react-icons/fi";  // Icon for the menu button
import { SiSimpleanalytics } from 'react-icons/si';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [token, setToken] = useState(null);  // State to track if the user is logged in
  const navigate = useNavigate();

  // Check if the user is logged in by checking the token in localStorage
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    setToken(storedToken);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    setToken(null);  // Remove the token from state
    navigate('/login');  // Redirect to login page after logout
  };

  return (
    <div className='navbar'>
      <h1 className='navbar-header'>Learning Path</h1>
      <button className='menu-button' onClick={toggleMenu}>
        <FiMenu size={24} />
      </button>
      <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>

        <Link to='/student' className='navbar-link-dashboard'>
          <GoHome size={24} className='react-icons' /> Student Dashboard
        </Link> 
        <Link to='/teacher' className='navbar-link-dashboard'>
          <GoHome size={24} className='react-icons' /> Dashboard
        </Link>
        <Link to='/analytics' className='navbar-link-dashboard'>
          <SiSimpleanalytics size={18} className='react-icons' /> Analytics
        </Link>
        <Link to='/profile' className='navbar-link-dashboard'>
          <FaUser size={18} className='react-icons' /> Profile
        </Link>

        {/* Conditionally render Log In and Sign In buttons based on token presence */}
        {!token ? (
          <>
            <Link to='/login' className='navbar-link-dashboard'>
              <RiLoginBoxLine className='react-icons' /> Log In
            </Link>
            <Link to='/signin' className='navbar-link-dashboard'>
              <VscSignIn className='react-icons' /> Sign In
            </Link>
          </>
        ) : (
          <button onClick={handleLogout} className='navbar-logout-button'>
            Log Out
          </button>
        )}
      </div>
    </div>
  );
}
