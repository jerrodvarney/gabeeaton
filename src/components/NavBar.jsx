import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoHome } from 'react-icons/io5';
import { FaUser, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { HiDocumentText } from 'react-icons/hi2';
import { IoIosMail } from 'react-icons/io';

export default function NavBar() {
  const linkClass = ({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`;

  return (
    <nav id="navbar">
      <h2 id="nav-title">
        <span id="nav-title-highlight">G</span>
        eaton
      </h2>
      <div id="nav-links">
        <NavLink to="/" end className={linkClass}>
          <IoHome size="1.5rem" />
          Home
        </NavLink>
        <NavLink to="/about" className={linkClass}>
          <FaUser size="1.5rem" />
          About Me
        </NavLink>
        <NavLink to="/resume" className={linkClass}>
          <HiDocumentText size="1.5rem" />
          Resume
        </NavLink>
        <NavLink to="/contact" className={linkClass}>
          <IoIosMail size="1.5rem" />
          Contact
        </NavLink>
      </div>
      <div id="nav-socials">
        <a href="https://www.linkedin.com/in/gabriel-eaton-20a981116/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
        <a href="https://www.instagram.com/gabeybabey50/?hl=en" target="_blank" rel="noreferrer"><FaInstagram /></a>
      </div>
    </nav>
  );
}
