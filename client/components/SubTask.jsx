import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CardActionArea, Card, CardContent, Typography } from '@mui/material';

const SubTask = ({ subTask }) => {
  return (
    <li>
      <span className="content">{SubTask}</span>
      <p>WHY THIS NOT WORKING</p>
      <Card sx={{ minWidth: 200 }}>
        <CardContent>
          <Typography sx={{ mb: 1.5 }}>
            {/* Sub Tasks */}
            {subTask.subTaskName}
            {subTask.subTaskDescription}
            {subTask.subTaskDueDate}
            <FormControlLabel control={<Checkbox />} />
          </Typography>
        </CardContent>
      </Card>
    </li>
  );
};

export default SubTask;
