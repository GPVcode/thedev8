// MyNavbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Make sure to import your CSS file
import logo from '../../styles/logo/TD8 Black Background.png';

const MyNavbar = () => {
  return (
    <>
      <nav class="navbar">
        <div class="logo">
          {/* <i class="bx bx-menu" id="sidebarOpen"></i> */}
          <img src={logo} alt="Logo" id="sidebarOpen" />
        </div>
      </nav>
      <nav class="sidebar">
        <div class="menu_content">
          <ul class="menu_items">
            <li class="menu_item">
              <a href="#" class="nav_link">
              <span class="navlink_icon">
                <i class="bx bx-home"></i>
              </span>
              <span class="navlink"><Link to="/">Home</Link></span>
              </a>
            </li>
            <li class="menu_item">
              <a class="nav_link">
              <span class="navlink_icon">
                <i class="bx bx-cog"></i>
              </span>
              <span class="navlink"><Link to="/blogs">Blogs</Link></span>
            </a>
            </li>
            <li class="menu_item">
              <a href="#" class="nav_link">
              <span class="navlink_icon">
                <i class="bx bx-layer"></i>
              </span>
              <span class="navlink"><Link to="/projects">Projects</Link></span>
            </a>
            </li>
            <li class="menu_item">
              <a href="#" class="nav_link">
              <span class="navlink_icon">
                <i class="bx bx-cloud-upload"></i>
              </span>
              <span class="navlink"><Link to="/contact">Contact</Link></span>
            </a>
            </li>
          </ul>
          <div class="collapse_content">
            <div class="collapse expand_sidebar">
              <span> Expand</span>
              <i class="bx bx-chevron-right"></i>
            </div>
            <div class="collapse collapse_sidebar">
              <span> Collapse</span>
              <i class="bx bx-chevron-left"></i>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MyNavbar;
