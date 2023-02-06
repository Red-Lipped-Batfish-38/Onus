import React, { useState, useEffect } from 'react';
import TaskCard from '../components/TaskCard.jsx';
import { TextField, FormGroup, Button } from '@mui/material';

const TasksContainer = () => {

  const [cards, setTaskCards] = useState([]); //taskcards = []

  const [taskInput, setTaskInput] = useState('');
  // useEffect(() => {}, []);

  //add taskInput into tasks array
  const addTasks = (newTask) => {
    setTaskCards([...cards, newTask]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskInput) return;
    addTasks(taskInput);
  };

  return (
    <div id="taskContainer">
      <header className="taskHeader">
      
        <h1>TASKS</h1>

      </header>
      <div className="taskHeader">
        <FormGroup row>
          <TextField
            label="Add New Task"
            variant="outlined"
            sx={{ width: 400, height: 100 }}
            placeholder="Add Task"
            onChange={(e) => setTaskInput(e.target.value)}
          />
          <Button onClick={handleSubmit}>+</Button>
        </FormGroup>
      </div>
      <hr />
      <section className="cardGrid">
        {cards.map((card, i) => (
          <TaskCard key={i} card={card} />
        ))}
      </section>
    </div>
  );
};

export default TasksContainer;
