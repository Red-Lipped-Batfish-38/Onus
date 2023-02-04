import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Login from '../containers/LoginPage.jsx';
// import '../styles.scss';
import HomeContainer from '../containers/HomePage.jsx';
import NavbarMain from './NavbarMain.jsx';

const App = () => {
  return (
    <div>
      {/* header to persist through page, can link back to homepage, signout, switchuser */}
      <NavbarMain className="navbar-main" />
      <h1>WELCOME</h1>
      <Routes>
        {/* Auto load to Login page/> */}
        <Route exact path="/" element={<Login />} />
        {/* <Route exact path="/signup" element={<Signup />} /> */}
        <Route exact path="/homepage" element={<HomeContainer />} />
      </Routes>
    </div>
  );
};

export default App;
