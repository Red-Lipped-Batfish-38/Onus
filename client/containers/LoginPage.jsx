import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// const redirectHomepage = () => {
//   <Link to="/homepage"></Link>
// }

//{email and password} mongo
//Includes user login, link to sign up, on sign in, route to HomeContainer
const Login = ({ setIsLoggedIn }) => {
  const [state, setState] = useState({ email: '', password: '' });
  const [loginFailed, setLoginFailed] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setIsLoggedIn(false);
    // fetch('http://localhost:3000/account/logout', {
    //   method: 'GET',
    //   credentials: 'include',
    // });
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const verifyLogin = (e) => {
    e.preventDefault();
    //check if key match db
    const userLogin = {
      email: state.email,
      password: state.password,
    };
    // console.log(userLogin); //OK

    fetch('http://localhost:3000/account/log', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(userLogin),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.err) {
          setLoginFailed(true);
          return;
        } else {
          console.log('post req', result);
          console.log('login OK');
          setIsLoggedIn(true);
          navigate('/homepage');
        }
      })
      .catch((err) => {
        setLoginFailed(true); //same as setIsLogged In?
        console.log('err at login');
      });
  };

  return (
    <div className="loginContainer">
      {/* <h2>sign in pl0x</h2> */}
      <h2>LOGIN</h2>
      <div className="loginForm form">
        {/* input form*/}
        {/* on submit, and verification, send to HomeContainer */}
        <form>
          <label for="email">Email: </label>
          <input
            type="text"
            id="email"
            placeholder="Email"
            value={state.email}
            onChange={handleChange}
          ></input>
          <label for="password">Password: </label>
          <input
            type="text"
            id="password"
            placeholder="Password"
            value={state.password}
            onChange={handleChange}
          ></input>
          <button type="submit" onClick={verifyLogin}>
            Login
          </button>
        </form>
        {loginFailed && (
          <div className="loginFail">
            <p style={{ color: 'red' }}>Incorrect Login</p>
          </div>
        )}
      </div>
      <Link to="/signup">Sign up</Link>
      <br></br>
      {/* <Link to="/homepage/1">to homepage</Link> */}
    </div>
  );
};

export default Login;
