import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Typography,
  FormControlLabel,
  Checkbox,
  TextField,
  FormGroup,
  Button,
} from '@mui/material';
// import { } from '@mui/material'; //added by erica, delete if we don't need

import SubTask from '../components/SubTask.jsx';

const SubTasksContainer = () => {
  const { project, task } = useParams();
  const [subTasks, setSubTasks] = useState([]);
  const [subTaskInput, setSubTaskInput] = useState('');

  const handleSubtaskSubmit = (e) => {
    e.preventDefault();
    // console.log(
    //   'right now there is no add mini task input...needs to be added'
    // );
    if (!subTaskInput) return;
    addSubTasks(subTaskInput);

    //fetch POST request to post subtasks when the add mini task button is clicked
    fetch('http://localhost:3000/subtask', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify({
        //this should send this for post
        subTaskName: subTaskInput,
        subTaskDescription: 'I dunno what to put here', //unneccessary?
        subTaskDueDate: '2-05-2025',
        toDoListId: task,
        taskId: task, //unneccessary?
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

  //NO VALID RES FROM CONTROLLER/DB
  useEffect(() => {
    fetch('http://localhost:3000/subtask', {
      method: 'GET',
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((results) => {
        console.log('get subtasks', results);
        setSubTasks([...results]);
      });
  }, []); //need to update so doesnt spam terminal

  return (
    <div>
      <h3>this is subtask container to POP UP</h3>
      <p>projId: {project} </p>
      <p>taskId: {task}</p>
      <hr />
      <div>
        <FormGroup row>
          <TextField
            label="Add New Task"
            variant="outlined"
            sx={{ width: 400, height: 100 }}
            placeholder="Add Task"
            onChange={(e) => setSubTaskInput(e.target.value)}
          />
          <Button onClick={handleSubtaskSubmit}>Add Sub Task</Button>
        </FormGroup>
      </div>
      <section className="subTasksGrid">
        {subTasks.map((subTask, i) => (
          <SubTask ket={i} subTask={subTask} />
        ))}
      </section>
    </div>
  );
};

export default SubTasksContainer;
