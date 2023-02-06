import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { FormGroup, TextField, Button } from '@mui/material';

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
  const [projectInput, setProjectInput] = useState({
    projectName: '',
    projectDescription: '',
  });

  useEffect(() => {
    console.log('Home page mounted');
    fetch('http://localhost:3000/project', {
      method: 'GET',
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((results) => {
        console.log('got the goods', results.projects);
        console.log('got the project goods - HomePage line 47', results);
        const projArr = results.projects;
        setProjects([...projArr]);
        console.log('state proj', projects);
        console.log('Proj[0]', projects[0]);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    //SHOULD WE KEEP LINE 22.23?
    if (projectInput.projectName === '') return;
    //post request to add task to db
    fetch('http://localhost:3000/project/', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(projectInput),
    })
      .then((res) => res.json())
      .then((results) => {
        console.log('created new task res', results);
      })
      .then(setProjects([...projects, projectInput]));
  };

  return (
    <div>
      <header className="projectHeader">
        <h1>HOMEPAGE</h1>
      </header>
      <div className="projectInput">
        <FormGroup row>
          <TextField
            label="Add New Project"
            variant="outlined"
            sx={{ width: 400, height: 100 }}
            placeholder="Add Project"
            onChange={(e) =>
              setProjectInput({
                ...projectInput,
                projectName: e.target.value,
              })
            }
          />
          <TextField
            label="Add Project Description"
            variant="outlined"
            sx={{ width: 400, height: 100 }}
            placeholder="Add Project Description"
            onChange={(e) =>
              setProjectInput({
                ...projectInput,
                projectDescription: e.target.value,
              })
            }
          />

          <Button onClick={handleSubmit}>+</Button>
        </FormGroup>
      </div>
      <div className="projectGrid">
        {projects.map((project, i) => (
          //should be passing down project name and project description, not id
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
