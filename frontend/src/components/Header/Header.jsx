import React, { useEffect, useState } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import {useLoginContext} from '../../context/LoginContext.js';

const Header = () => {

  const {isLoggedIn,username,LogIn,LogOut} = useLoginContext();

  const logout = async()=>{
    try {
      const response = await fetch('/api/logout',{method:"POST"})
      if(!response.ok){
        console.error("Error occured while logging out :",error)
      }
      else{
        LogOut()
      }
    } catch (error) {
      console.error("Error occured while logging out :",error)
    }
  }
  return (
    <>
      <header className='navBar'>
        <div className='side-image-nav-bar'>
          <NavLink className="Logo" to ="/">
            <img src='./src/assets/dotslashLogo.png' alt="logo" id='logo1'/>
          </NavLink>
          {/* <p>DotSlash</p> */}
        </div>
        <nav className='navGroup'>
          <NavLink to="/" className={({ isActive }) => `${isActive ? "glow-text-nav-bar" : ""}`}>
            Home
          </NavLink>
          <NavLink to="/announcements" className={({ isActive }) => `${isActive ? "glow-text-nav-bar" : ""}`}>
            Announcements
          </NavLink>
          <NavLink to="/resources" className={({ isActive }) => `${isActive ? "glow-text-nav-bar" : ""}`}>
            Resources
          </NavLink>
          <NavLink to="/mentors" className={({ isActive }) => `${isActive ? "glow-text-nav-bar" : ""}`}>
            Mentors
          </NavLink>
          <NavLink to="/ratings" className={({ isActive }) => `${isActive ? "glow-text-nav-bar" : ""}`}>
            Ratings
          </NavLink>
          <NavLink to="/discussions" className={({ isActive }) => `${isActive ? "glow-text-nav-bar" : ""}`}>
            Discussions
          </NavLink>
          <NavLink to="/blogs" className={({ isActive }) => `${isActive ? "glow-text-nav-bar" : ""}`}>
            Blogs
          </NavLink>
          {
            !isLoggedIn ? ( 
              <NavLink to="/login" className={({ isActive }) => `${isActive ? "glow-text-nav-bar" : ""}`}> Login </NavLink>
            ) 
            :(
              <>
                <NavLink to={`/user/${username}`} className={({ isActive }) => `${isActive ? "glow-text-nav-bar" : ""}`}>{username}</NavLink>
                <NavLink to="#" onClick={logout}>Logout</NavLink>
              </>
            )
          }
        </nav>
      </header>
    </>
  );
};

export default Header;