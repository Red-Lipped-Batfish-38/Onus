import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TaskCard from '../components/TaskCard.jsx';
import { TextField, FormGroup, Button } from '@mui/material';

const TasksContainer = () => {
  const { project } = useParams();

  const [cards, setTaskCards] = useState([]); //taskcards = []
  const [userInput, setUserInput] = useState({
    name: '',
    description: '',
    project: project,
  });
  // useEffect(() => {}, []);

  //add taskInput into tasks array
  // const addTasks = (newTask) => {
  //   setTaskCards([...cards, newTask]);
  // };

  //add a task to project
  const handleSubmit = (e) => {
    console.log('userinput:', userInput);
    e.preventDefault();
    // if (!taskInput) return;
    //post request to add task to db
    fetch('http://localhost:3000/project/list', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(userInput),
    })
      .then((res) => res.json())
      .then((results) => {
        console.log('created new task res', results);
      })
      .then(setTaskCards([...cards, userInput]));
  };
  //useEffect; makes a fetch request to get tasks
  useEffect(() => {
    console.log('tasks container mounted', project); //typeof proj :string
    fetch(`http://localhost:3000/project/list/${project}`, {
      method: 'GET',
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((results) => {
        console.log('got the tsks goods', results);
        const tasksArr = results.toDos;
        setTaskCards([...tasksArr]);
      });
  }, []);

  return (
    <div id="taskContainer">
      <header className="cardHeader">
        <h1>TASKS</h1>
      </header>
      <div className="cardInput">
        <FormGroup row>
          <TextField
            label="Add New Task"
            variant="outlined"
            sx={{ width: 400, height: 100 }}
            placeholder="Add Task"
            onChange={(e) =>
              setUserInput({
                ...userInput,
                name: e.target.value,
              })
            }
          />
          <TextField
            label="Add New Task Description"
            variant="outlined"
            sx={{ width: 400, height: 100 }}
            placeholder="Add Description"
            onChange={(e) =>
              setUserInput({
                ...userInput,
                description: e.target.value,
              })
            }
          />
          <Button onClick={handleSubmit} style={{ height: 56 }}>
            +
          </Button>
        </FormGroup>
      </div>
      <hr />
      <div className="cardGrid">
        {cards.map((card, i) => (
          <TaskCard key={i} card={card} />
        ))}
      </div>
    </div>
  );
};

export default TasksContainer;
