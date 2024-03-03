// MyNavbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Make sure to import your CSS file

const MyNavbar = () => {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/blogs">Blogs</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default MyNavbar;
