import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav style={{ display: 'flex', gap: 12 }}>
      <Link to="/">Home</Link>
      <Link to="/about">About Me</Link>
      <Link to="/resume">Resume</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
