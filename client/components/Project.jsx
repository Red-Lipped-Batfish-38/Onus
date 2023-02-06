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
} from '@mui/material';

//use params the endpoint for id url
//then make a fetch request for all project/task info
//display task info

//TODO: connect to router first

const Project = (project) => {
  // const initalState = undefined;
  // const { userID, projectID } = useParams();

  console.log('project;', project);
  console.log('project.project', project.project);
  return (
    <div className="projectContainer">
      {/* dummy */}
      <CardActionArea component={RouterLink} to={`/tasks/${project.project}`}>
        <Card sx={{ minWidth: 200 }}>
          {/* this should be a dynamically created title*/}
          <CardContent>
            <h3>Dynamically Created Project Title Here</h3>
            <Typography variant="h5" component="div">
              Project {JSON.stringify(project.project)}
              {/* why so ugly */}
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </div>
  );
};

export default Project;
