import React from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';

import TasksContainer from '../containers/TasksContainer.jsx';
//use params the endpoint for id url
//then make a fetch request for all project/task info
//display task info

//TODO: connect to router first

const Project = () => {
  const { userID, projectID } = useParams();
  return (
    <div>
      <h3>this is project</h3>
      {/* link to tasks */}
      <p>userid: {userID}</p>
      <p>projectid: {projectID}</p>
      <Link to="/user/1/project/3/task/4">Open Tasks</Link>
    </div>
  );
};

export default Project;
