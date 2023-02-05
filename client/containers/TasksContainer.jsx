import React, { useState, useEffect } from 'react';
import Todos from '../components/Todos.jsx';
import { TextField, FormGroup, Button } from '@mui/material';

const TasksContainer = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  // useEffect(() => {}, []);

  //add taskInput into tasks array
  const addTasks = (newTask) => {
    setTodos([...tasks, newTask]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskInput) return;
    addTasks(taskInput);
  };

  return (
    <div>
      <header>
        <h1> TASKS</h1>
      </header>
      <div>
        <FormGroup row>
          <TextField
            label="Add New Task"
            variant="outlined"
            sx={{ width: 200 }}
            placeholder="Add Task"
            onChange={(e) => setTaskInput(e.target.value)}
          />
          <Button onClick={handleSubmit}>+</Button>
        </FormGroup>
      </div>
      <section className="grid">
        {tasks.map((task, i) => (
          <Todos key={i} task={task} />
        ))}
      </section>
    </div>
  );
};

export default TasksContainer;
