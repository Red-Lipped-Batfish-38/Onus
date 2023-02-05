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

const TaskCard = ({ card }) => {
  const [subTasks, setSubTasks] = useState([]);
  const [subTaskInput, setSubTaskInput] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!subTaskInput) return;
  //   addTasks(subTaskInput);
  // };
  // const addSubTasks = (newTask) => {
  //   setSubTasks([...cards, newTask]);
  // };
  return (
    // <div>
    //   <h3>{hi}</h3>
    //   <ul>
    //     {/* {subTasks.map((subTask, i) => (
    //       <SubTask key={i} subTask={subTask} />
    //     ))} */}
    //     <SubTask subHi={"subHi"} />
    //   </ul>
    // </div>
    <div className="cardContainer">
      <Card sx={{ minWidth: 200 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {card}
          </Typography>
          <Typography sx={{ mb: 1.5 }}>
            Sub Tasks
            <FormControlLabel control={<Checkbox />} />
          </Typography>
          <Button>Add Mini Task</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default TaskCard;
