import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TextField, FormGroup, Button } from '@mui/material';
// import { } from '@mui/material'; //added by erica, delete if we don't need

import SubTask from '../components/SubTask.jsx';

const SubTasksContainer = () => {
  const { project, task } = useParams(); //both id
  const [subTasks, setSubTasks] = useState([]);
  const [subTaskInputs, setSubTaskInputs] = useState({
    name: '',
    description: 'dummy description',
    date: '2025-12-12',
    list: task,
    project,
    assigned: '',
    completed: false,
  });

  const handleSubtaskSubmit = (e) => {
    e.preventDefault();

    console.log('tosend this in post', subTaskInputs);
    //fetch POST request to post subtasks when the add mini task button is clicked
    fetch('http://localhost:3000/project/task', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(subTaskInputs),
    })
      .then((res) => {
        res.json();
      })
      .then((results) => {
        console.log('post task obj', results);
        setSubTasks([...subTasks, results]);
      })
      .catch((err) => console.log(err));
  };

  const addSubTasks = (newSubTask) => {
    setSubTasks([...subTasks, newSubTask]); //**why do you need ...card? */
  };

  useEffect(() => {
    fetch(`http://localhost:3000/project/${project}/task/${task}`, {
      method: 'GET',
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((results) => {
        console.log('get subtasks', results);
        setSubTasks([...results]);
      });
  }, []);

  //NO VALID RES FROM CONTROLLER/DB
  // useEffect(() => {
  //   fetch(`http://localhost:3000/subtask/${task}`, {
  //     method: 'GET',
  //     credentials: 'include',
  //   })
  //     .then((res) => res.json())
  //     .then((results) => {
  //       console.log('get subtasks', results);
  //       // setSubTasks([...results]);
  //     });
  // }, []); //need to update so doesnt spam terminal

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
            onChange={(e) =>
              setSubTaskInputs({
                ...subTaskInputs,
                name: e.target.value,
              })
            }
          />
          <TextField
            label="Add Assigned Contributor"
            variant="outlined"
            sx={{ width: 400, height: 100 }}
            placeholder="Add email"
            onChange={(e) =>
              setSubTaskInputs({
                ...subTaskInputs,
                assigned: e.target.value,
              })
            }
          />
          {/* <TextField
            label="Add New Task Due Date"
            variant="outlined"
            sx={{ width: 400, height: 100 }}
            placeholder="Add Due Date [YYYY-MM-DD]"
            onChange={(e) =>
              setSubTaskInputs({
                ...subTaskInputs,
                subTaskDueDate: e.target.value,
              })
            }
          /> */}
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
