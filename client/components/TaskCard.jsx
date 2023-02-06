import React, { useState, useEffect } from 'react';
import SubTask from './SubTask.jsx';
import {
  Card,
  CardContent,
  Typography,
  Button,
  FormControlLabel,
  Checkbox,
} from '@mui/material';

import { TextField, FormGroup } from '@mui/material'; //added by erica, delete if we don't need

const TaskCard = ({ card }) => {
  const [subTasks, setSubTasks] = useState([]);
  const [subTaskInput, setSubTaskInput] = useState('');

  const handleSubtaskSubmit = (e) => {
    e.preventDefault();
    console.log(
      'right now there is no add mini task input...needs to be added'
    );
    if (!subTaskInput) return;
    addSubTasks(subTaskInput);

    //fetch POST request to post subtasks when the add mini task button is clicked
    fetch('/subtask', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify({
        //this should send this for post
        subTaskName: 'subtask test',
        subTaskDescription: 'I dunno what to put here',
        subTaskDueDate: '2-05-2025',
        toDoListId: 3,
        taskId: 2,
        completed: false,
      })
        .then((data) =>
          console.log('got back data from subtaskcontroller:', data)
        )
        .catch((err) => console.log(err)),
    });
  };

  const addSubTasks = (newSubTask) => {
    setSubTasks([...subTasks, newSubTask]); //**why do you need ...card? */
  };

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
        <ul>
          {subTasks.map((subTask, i) => (
            <SubTask key={i} subTask={subTask} />
          ))}
          {/* <SubTask subHi={"subHi"} /> */}
        </ul>
      </div>
      <div className="cardContainer" color="blue">
        <Card sx={{ minWidth: 200 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              {card}
            </Typography>
            <Typography sx={{ mb: 1.5 }}>
              Sub Tasks
              <FormControlLabel control={<Checkbox />} />
            </Typography>
            <FormGroup row>
              <TextField
                label="Add New Task"
                variant="outlined"
                sx={{ width: 400, height: 100 }}
                placeholder="Add Task"
                onChange={(e) => setSubTaskInput(e.target.value)}
              />
              <Button onClick={handleSubtaskSubmit}>Add Mini Task</Button>
            </FormGroup>
          </CardContent>
        </Card>
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
