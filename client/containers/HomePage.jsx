import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Project from '../components/Project.jsx';
//TODO: figure out how to route projects
// Container that presents all projects, with extra empty
const HomeContainer = () => {
  //fetch user via ID from data base
  //destructure data to grab projects
  //display every project on this page
  //pass all id into url params as variables

  return (
    <div>
      <h1>HOMEPAGE</h1>
      {/* <Project /> */}
      {/* stretch :: should have empty that allows user to create and be a leader in project */}
      <Link to="/project/:user_id/:project_id/">Projectname</Link>

      {/* createprojects button*/}
      <Link to="/">Login</Link>
    </div>
  );
};

export default HomeContainer;
