import React, { useState, useEffect } from 'react';
import SubTask from './SubTask.jsx';
import { Card } from '@mui/material';

const TaskCard = ({ hi }) => {
  const [subTasks, setSubTasks] = useState([]);

  return (
    <div style={{ backgroundColor: 'blue' }}>
      <h3>{hi}</h3>
      <ul>
        {/* {subTasks.map((subTask, i) => (
          <SubTask key={i} subTask={subTask} />
        ))} */}
        <SubTask subHi={'subHi'} />
      </ul>
    </div>
    // <Card sx={{ minWidth: 275 }}>
    //   <CardContent>
    //     <Typography variant="h5" component="div">
    //       Task Name
    //     </Typography>
    //     <Typography sx={{ mb: 1.5 }} color="text.secndary">
    //       Mini Tasks
    //     </Typography>
    //   </CardContent>
    // </Card>>
  );
};

export default TaskCard;
