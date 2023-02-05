// import '../styles.scss';
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/homepage">Home</Link>
        </li>
        <li>
          <Link to="/">Sign Out</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
