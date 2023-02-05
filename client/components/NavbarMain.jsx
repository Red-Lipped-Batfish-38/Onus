// import '../styles.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import LogoutButton from './LogoutButton.jsx';
import { useState, useEffect } from 'react';

function NavbarMain() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   fetch('http://localhost:3000/account', {
  //     method: 'GET',
  //     credentials: 'include',
  //   })
  //     .then((user) => {
  //       user ? setIsLoggedIn(true) : setIsLoggedIn(false);
  //     })
  //     .catch((err) => {
  //       console.log('There is an error');
  //     });
  // }, []);

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav.Link className="fs-1" to="/">
          Project Manager
        </Nav.Link>
        <Nav className="mr-auto p-3">
          <Nav.Link className="fs-4" to="/account">
            About Us
          </Nav.Link>
          {/* {isLoggedIn ? <LogoutButton /> : <Link to="/">Login</Link>} */}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarMain;
