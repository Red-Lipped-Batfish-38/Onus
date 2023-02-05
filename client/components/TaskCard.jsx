import React, { useState, useEffect } from 'react';
import SubTask from './SubTask.jsx';
import { Card, CardContent, Typography, Button } from '@mui/material';

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
    <Card sx={{ minWidth: 200 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {card}
        </Typography>
        <Typography sx={{ mb: 1.5 }}>Mini Tasks</Typography>
        <Button>Add Mini Task</Button>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
