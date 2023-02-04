import React, { useState, useEffect } from 'react';
import MiniTasks from './MiniTasks.jsx';
import { Card } from '@mui/material';

const Todos = () => {
  return (
    <div>
      <h3>Dynamically Created Title</h3>
      <ul>
        <MiniTasks />
      </ul>
    </div>
    // <Card sx={{ minWidth: 275 }}>
    //   <CardContent>
    //     <Typography variant="h5" component="div">
    //       Task Name
    //     </Typography>
    //     <Typography sx={{ mb: 1.5 }} color="text.secondary">
    //       Mini Tasks
    //     </Typography>
    //   </CardContent>
    // </Card>>
  );
};

export default Todos;
