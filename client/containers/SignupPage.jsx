// {fname/
// lname
// Email
// Password} send to back.
//mongo

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = ({ setIsLoggedIn }) => {
  const initialState = {
    fname: '',
    lname: '',
    email: '',
    password: '',
  };
  const [state, setState] = useState(initialState);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const createAccount = (e) => {
    e.preventDefault();
    console.log('account created');
    const userSignup = {
      firstName: state.fname,
      lastName: state.lname,
      email: state.email,
      password: state.password,
    };

    fetch('http://localhost:3000/account', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(userSignup),
    })
      .then((res) => res.json())
      .then((results) => {
        console.log('signup OK');
        setIsLoggedIn(true);
        navigate('/homepage');
      })
      .catch((err) => {
        console.log('err at signup');
      });
  };
  return (
    <div className="signUpContainer">
      <h2>SIGN UP</h2>
      <div className="signupForm form">
        <form>
          <label for="fname">First Name: </label>
          <input
            type="text"
            id="fname"
            placeholder="First name"
            value={state.fname}
            onChange={handleChange}
          />
          <label for="lname">Last Name: </label>
          <input
            type="text"
            id="lname"
            placeholder="Last name"
            value={state.lname}
            onChange={handleChange}
          />
          <label for="email">Email: </label>
          <input
            type="text"
            id="email"
            placeholder="Email"
            value={state.email}
            onChange={handleChange}
          />
          <label for="password">Password: </label>
          <input
            type="text"
            id="password"
            placeholder="Password"
            value={state.password}
            onChange={handleChange}
          />
          <button type="submit" onClick={createAccount}>
            Sign Up
          </button>
        </form>
      </div>
      <Link to="/">Login</Link>
    </div>
  );
};

export default Signup;
