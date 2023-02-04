import React, { useState, useEffect } from 'react';
import Todos from '../components/Todos.jsx';
import { TextField, FormGroup, Button } from '@mui/material';

const TasksContainer = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {}, []);

  const addTasks = (newTask) => {
    setTodos([...tasks, newTask]);
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
            sx={{ width: 200 }}
            InputProps
          />
          <Button>+</Button>
        </FormGroup>
      </header>
      <section className="grid">
        {tasks.map((task, i) => (
          <Todos key={i} todo={todo} />
        ))}
      </section>
    </div>
  );
};

export default TasksContainer;
