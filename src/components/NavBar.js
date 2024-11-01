import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GoHome } from "react-icons/go";
import { FaUser } from "react-icons/fa6";
import { RiLoginBoxLine } from "react-icons/ri";
import { VscSignIn } from "react-icons/vsc";
import { FiMenu } from "react-icons/fi";  // Icon for the menu button

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='navbar'>
      <h1 className='navbar-header'>Learning Path</h1>
      <button className='menu-button' onClick={toggleMenu}>
        <FiMenu size={24} />
      </button>
      <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>

        <Link to='/student' className='navbar-link-dashboard'> <GoHome size={24}  className='react-icons' /> Student Dashboard</Link> 
            {/* <Link to='/analytics' className='navbar-link-dashboard'> <SiSimpleanalytics size={18}  className='react-icons' /> Analytics</Link> */}
        <Link to='/teacher' className='navbar-link-dashboard'> 
          <GoHome size={24} className='react-icons' /> Dashboard
        </Link>
        <Link to='/profile' className='navbar-link-dashboard'>
          <FaUser size={18} className='react-icons' /> Profile
        </Link>
        <Link to='/login' className='navbar-link-dashboard'>
          <RiLoginBoxLine className='react-icons' /> Log In
        </Link>
        <Link to='/signin' className='navbar-link-dashboard'>
          <VscSignIn className='react-icons' /> Sign In
        </Link>
      </div>
    </div>
  );
}



