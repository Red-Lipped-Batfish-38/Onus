// import '../styles.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import LogoutButton from './LogoutButton.jsx';
import LoginButton from './LoginButton.jsx';
// import { useState, useEffect } from 'react';

function NavbarMain({ isLoggedIn }) {
  return (
    <Navbar bg="dark" variant="dark">
      <Container className="navBarBanner">
        <Nav.Link className="fs-1" to="/">
          Onus
        </Nav.Link>
        <Nav className="mr-auto p-3">
          {isLoggedIn ? (
            <LogoutButton className="logoutButton" />
          ) : (
            <LoginButton />
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarMain;
