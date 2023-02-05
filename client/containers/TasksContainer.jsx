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
          <Button>+</Button>
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
