import React from 'react';
// import { Routes, Route, Link } from 'react-router-dom';

import TasksContainer from '../containers/TasksContainer.jsx';
//use params the endpoint for id url
//then make a fetch request for all project/task info
//display task info

//TODO: connect to router first

const Project = () => {
  return (
    <div>
      <h3>this is project</h3>
      {/* link to tasks */}
      <TasksContainer />
      {}
    </div>
  );
};

export default Project;
