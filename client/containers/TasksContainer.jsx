import React, { useState, useEffect } from 'react';
import TaskCard from '../components/TaskCard.jsx';
import { TextField, FormGroup, Button } from '@mui/material';
import { Link } from 'react-router-dom';
//
const TasksContainer = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {}, []);

  const addTasks = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      <header>
        <h1> TASKS</h1>
        <FormGroup row>
          <TextField
            id="outlined-basic"
            label="Add New Task"
            variant="outlined"
            sx={{ width: 300, height: 100 }}
            InputProps
          />
          <Button
            className="add-subtask-btn"
            onClick={() => {
              fetch('/subtask', {
                method: 'POST',
                headers: {
                  'Content-Type': 'Application/JSON',
                },
                body: JSON.stringify({
                  //this should send this for post
                  subTaskName: 'subtaskname here',
                  subTaskDescription: 'subtask description here',
                  subTaskDueDate: 'subtask due date here',
                  taskId: 'taskID here',
                  completed: 'should be false',
                }),
              }) //end of fetch;
                .then((data) => {
                  console.log(data);
                })
                .catch((err) => console.log(err));
            }} //end of onclick function
          >
            +
          </Button>
        </FormGroup>
      </header>
      <section className="grid">
        {/* {tasks.map((task, i) => (
          <TaskCard key={i} task={task} />
        ))} */}
        <TaskCard hi={'hi'} />
      </section>
      <Link to="/user/1/project/3/">back to project</Link>
    </div>
  );
};

export default TasksContainer;

// CREATE TABLE subTask (
//   _id SERIAL PRIMARY KEY,
//   subTaskName VARCHAR(255) NOT NULL,
//   subTaskDescription TEXT NOT NULL,
//   subTaskDueDate DATE,
//   taskId INT NOT NULL,
//   completed BOOLEAN DEFAULT false,
//   FOREIGN KEY (taskId) REFERENCES task(_id),
// );
