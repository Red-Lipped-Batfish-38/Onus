import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TaskCard from '../components/TaskCard.jsx';
import { TextField, FormGroup, Button } from '@mui/material';

const TasksContainer = () => {
  const { project } = useParams();

  const [cards, setTaskCards] = useState([]); //taskcards = []
  const [taskInput, setTaskInput] = useState('');
  // useEffect(() => {}, []);

  //add taskInput into tasks array
  const addTasks = (newTask) => {
    setTaskCards([...cards, newTask]);
  };

  //add a task to project
  const handleSubmit = (e) => {
    e.preventDefault();
    //SHOULD WE KEEP LINE 22.23?
    // if (!taskInput) return;
    // addTasks(taskInput);
    //post request to add task to db
    fetch('http://localhost:3000/project/list', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        name: taskInput,
        project,
        description: 'hoi, descrip for new task',
      }),
    })
      .then((res) => res.json())
      .then((results) => {
        console.log('created new task res', results);
      });
  };
  //useEffect; makes a fetch request to get tasks
  useEffect(() => {
    console.log('tasks container mounted', project);
    fetch(`http://localhost:3000/project/list/${project}`, {
      method: 'GET',
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((results) => {
        console.log('got the goods', results);
        const tasksArr = results.toDos;
        setTaskCards([...tasksArr]);
        // console.log('state proj', projects);
        //task was added to db, now not displaying correctly. ASK NICK HOW TO DISPLAY
      });
  }, [cards]);

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
          {/* NEED TO ADD DESCIPRTION */}
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
