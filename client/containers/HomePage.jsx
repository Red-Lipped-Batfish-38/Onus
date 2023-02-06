import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

import Project from '../components/Project.jsx';
//TODO: figure out how to route projects
// Container that presents all projects, with extra empty
const HomeContainer = () => {
  //fetch user via ID from data base
  //destructure data to grab projects
  //display every project on this page
  //pass all id into url params as variables
  const { userID } = useParams();
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
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
  const userLogout = () => {
    fetch('http://localhost:3000/account/logout', {
      method: 'GET',
      credentials: 'include',
    })
      .then((res) => {
        res.json();
      })
      .then((results) => {
        console.log('logged out of ', results);
        navigate('/');
      });
  };
  useEffect(() => {
    console.log('mounted');
    fetch('http://localhost:3000/project', {
      method: 'GET',
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((results) => {
        console.log('got the goods', results.projects);
        const projArr = results.projects;
        setProjects([...projArr]);
        console.log('state proj', projects);
      });
  }, []);
  return (
    <div>
      <h1>HOMEPAGE</h1>
      <div className="projectGrid">
        {projects.map((project, i) => (
          <Project key={i} project={project.projectid} />
        ))}
      </div>
      {/* <Link to="/user/1/project/3/">Project{`${userID}`}</Link> */}
      {/* createprojects button*/}
    </div>
  );
};

export default HomeContainer;
{
  /* stretch :: should have empty that allows user to create and be a leader in project */
}
