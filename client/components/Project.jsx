import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useParams, useNavigate } from 'react-router-dom';

import {
  Card,
  CardContent,
  Typography,
  Button,
  FormControlLabel,
  Checkbox,
  CardActionArea,
  FormGroup,
} from '@mui/material';

//use params the endpoint for id url
//then make a fetch request for all project/task info
//display task info

//TODO: connect to router first

const Project = (project) => {
  // const initalState = undefined;
  // const { userID, projectID } = useParams();
  const [addusers, setAddUsers] = useState({
    email: '',
    project: project.project,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (addusers.email === '') return;
    fetch('', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(addusers),
    })
      .then((res) => res.json())
      .then((results) => {
        console.log('just added user to project', results);
      });
  };

  //waiting for mark to make controller
  useEffect(() => {}, []);
  console.log('project;', project);
  console.log('project.project', project.project);

  return (
    <div className="projectContainer">
      {/* dummy */}
      <CardActionArea component={RouterLink} to={`/project/${project.project}`}>
        <Card sx={{ minWidth: 200 }}>
          {/* this should be a dynamically created title*/}
          <CardContent>
            <h3>Dynamically Created Project Title Here</h3>
            <Typography variant="h5" component="div">
              Project {JSON.stringify(project.project)}
              {/* why so ugly */}
            </Typography>
            <hr />
            {/* im guessing with properties */}
            <FormGroup row>
              <TextField
                label="Add user to project"
                variant="outlined"
                sx={{ width: 400, height: 100 }}
                placeholder="Enter user email"
                onChange={(e) =>
                  setAddUsers({
                    ...addusers,
                    email: e.target.value,
                  })
                }
              />
              <Button onClick={handleSubmit}>+</Button>
            </FormGroup>
          </CardContent>
        </Card>
      </CardActionArea>
    </div>
  );
};

export default Project;
