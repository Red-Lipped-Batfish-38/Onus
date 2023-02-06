import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

import {
  Card,
  CardContent,
  Typography,
  Button,
  FormControlLabel,
  Checkbox,
} from '@mui/material';

//use params the endpoint for id url
//then make a fetch request for all project/task info
//display task info

//TODO: connect to router first

const Project = (project) => {
  // const initalState = undefined;
  // const { userID, projectID } = useParams();
  console.log('passed into proj component', project);
  return (
    <div className="projectContainer">
      <h3>this is project</h3>
      {/* dummy */}
      <Card sx={{ minWidth: 200 }}>
        <Link to={`/project/${project.project}`}>Open Tasks</Link>
        <CardContent>
          <Typography variant="h5" component="div">
            Project {JSON.stringify(project.project)}
            {/* why so ugly */}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Project;
