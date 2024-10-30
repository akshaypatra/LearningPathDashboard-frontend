import React from 'react'
import { Link } from 'react-router-dom'
// import { SiSimpleanalytics } from "react-icons/si";
import { GoHome } from "react-icons/go";
import { FaUser } from "react-icons/fa6";
import { RiLoginBoxLine } from "react-icons/ri";
import { VscSignIn } from "react-icons/vsc";

export default function NavBar() {
  return (
    <div className='navbar'>
        <h1 className='navbar-header'>Learning Path</h1>
        <div className='navbar-links'>
            <Link to='/teacher' className='navbar-link-dashboard'> <GoHome size={24}  className='react-icons' />Dashboard</Link> 
            {/* <Link to='/student' className='navbar-link-dashboard'> <GoHome size={24}  className='react-icons' />Dashboard</Link>  */}
            {/* <Link to='/analytics' className='navbar-link-dashboard'> <SiSimpleanalytics size={18}  className='react-icons' /> Analytics</Link> */}
            <Link to='/profile' className='navbar-link-dashboard'> <FaUser size={18}  className='react-icons' /> Profile</Link>
            <Link to='/login' className='navbar-link-dashboard'><RiLoginBoxLine className='react-icons'   />   Log In</Link>
            <Link to='/signin' className='navbar-link-dashboard'><VscSignIn className='react-icons' />    Sign In</Link>
            
            
        </div>
    </div>
  )
}
