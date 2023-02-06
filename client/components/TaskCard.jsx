import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SubTask from './SubTask.jsx';
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActionArea,
} from '@mui/material';

const TaskCard = ({ card }, project) => {
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!subTaskInput) return;
  //   addTasks(subTaskInput);
  // };
  // const addSubTasks = (newTask) => {
  //   setSubTasks([...cards, newTask]);
  // };

  return (
    <div>
      <div>
        <h3>Your tasks!!</h3>
        {/* <ul>
          {subTasks.map((subTask, i) => (
            <SubTask key={i} subTask={subTask} />
          ))}
        </ul> */}
      </div>
      <div className="cardContainer" color="blue">
        <CardActionArea
          component={Link}
          to={`/project/${card.projectid}/tasks/${card._id}`}
        >
          <Card sx={{ minWidth: 200 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {card.name}
                <br></br>
                {card.description}
              </Typography>
            </CardContent>
          </Card>
        </CardActionArea>
      </div>
    </div>
  );
};

// CREATE TABLE subTask (
//   _id SERIAL PRIMARY KEY,
//   subTaskName VARCHAR(255) NOT NULL,
//   subTaskDescription TEXT NOT NULL,
//   subTaskDueDate DATE,
//   toDoListId INT NOT NULL,
//   taskId INT NOT NULL,
//   completed BOOLEAN DEFAULT false,
//   FOREIGN KEY (toDoListId) REFERENCES toDoList(_id),
//   FOREIGN KEY (taskId) REFERENCES task(_id));

export default TaskCard;
