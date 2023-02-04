import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

// const redirectHomepage = () => {
//   <Link to="/homepage"></Link>
// }

//{email and password} mongo
//Includes user login, link to sign up, on sign in, route to HomeContainer
const Login = () => {
  return (
    <div>
      <h2>sign in pl0x</h2>
      <h1>this is form:</h1>
      <div className="loginForm">
        {/* input form*/}
        {/* on submit, and verification, send to HomeContainer */}
        <form>
          <label for="userName">Username: </label>
          <input type="text" id="userName"></input>
          <label for="password">Password: </label>
          <input type="text" id="password"></input>
          <Link to="/homepage">
            to homepage
            {/* <button type="button" onClick={redirectHomepage}></button> */}
          </Link>
        </form>
      </div>
      <Link to="/signup">to signup</Link>
      <br></br>
    </div>
  );
};

export default Login;
