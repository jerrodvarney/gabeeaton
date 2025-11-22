import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoHome } from 'react-icons/io5';
import { FaUser, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { HiDocumentText } from 'react-icons/hi2';
import { IoIosMail } from 'react-icons/io';

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/gabriel-eaton-20a981116/',
    label: 'Gabriel on LinkedIn',
    Icon: FaLinkedinIn,
  },
  {
    href: 'https://www.instagram.com/gabbeybabey50/?hl=en',
    label: 'Gabriel on Instagram',
    Icon: FaInstagram,
  },
];

export default function NavBar() {
  const linkClass = ({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`;

  return (
    <nav id="navbar">
      <h2>
        <span>G</span>
        eaton
      </h2>
      <div className="nav-links">
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
      <div className="nav-socials">
        {socialLinks.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="nav-social-link"
          >
            <Icon size={20} />
          </a>
        ))}
      </div>
    </nav>
  );
}
