import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import HomeContainer from '../containers/HomeContainer.jsx';

//Includes user login, link to sign up, on sign in, route to HomeContainer
const Login = () => {
  return (
    <div>
      <h1>this is form:</h1>
      <div className="loginForm">
        {/* input form*/}
        {/* on submit, and verification, send to HomeContainer */}
        <Link to="/signup">
          <button>to signup</button>
        </Link>
      </div>
      <Link to="/homepage">
        <button>to homepage</button>
      </Link>
      <Routes>
        {/* <Route exact path="/signup" element={<Signup />} /> */}
        <Route exact path="/homepage" element={<HomeContainer />} />
      </Routes>
    </div>
  );
};
// whats withRouter
export default Login;
