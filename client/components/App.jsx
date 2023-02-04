import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Login from './Login.jsx';
import '../styles.scss';
import HomeContainer from '../containers/HomeContainer.jsx';

const App = () => {
  return (
    <div>
      {/* header to persist through page, can link back to homepage, signout, switchuser */}
      {/* <Header/> */}
      <h1>WELCOME</h1>
      <h2>sign in pl0x</h2>
      <Login />
    </div>
  );
};

export default App;
