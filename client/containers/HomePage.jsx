import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Project from '../components/Project.jsx';
// Container that presents all projects, with extra empty
const HomeContainer = () => {
  return (
    <div>
      <h1>HOMEPAGE</h1>
      {/* <Project /> */}
      {/* stretch :: should have empty that allows user to create and be a leader in project */}
      <Project />
      <Link to="/">Login</Link>
    </div>
  );
};

export default HomeContainer;
