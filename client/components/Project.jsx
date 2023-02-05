import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

import TasksContainer from '../containers/TasksContainer.jsx';
//use params the endpoint for id url
//then make a fetch request for all project/task info
//display task info

//TODO: connect to router first

const Project = () => {
  // const initalState = undefined;
  const dummyState = [
    {
      projectName: 'solo',
      projectDescription: 'wowie',
    },
    {
      projectName: 'scratch',
      projectDescription: 'times two',
    },
  ];

  const { userID, projectID } = useParams();
  const { projects, setProjects } = useState(dummyState);
  useEffect(() => {
    console.log('mounted');
    fetch('/project')
      .then((res) => res.json())
      .then((results) => {
        console.log('got the goods', results);
      });
  });
  return (
    <div>
      <h3>this is project</h3>
      {/* link to tasks */}
      dummy
      {projects.projectName}
      <p>userid: {userID}</p>
      <p>projectid: {projectID}</p>
      <Link to="/user/1/project/3/task/4">Open Tasks</Link>
    </div>
  );
};

export default Project;
