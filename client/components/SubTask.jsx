import React, { useState, useEffect } from 'react';

const SubTask = ({ subTask }) => {
  return (
    <li>
      <span className="content">{SubTask}</span>
      <p>WHY THIS NOT WORKING</p>
      {subTask.subTaskName}
      {subTask.subTaskDescription}
      {subTask.subTaskDueDate}
      <Typography sx={{ mb: 1.5 }}>
        Sub Tasks
        <FormControlLabel control={<Checkbox />} />
      </Typography>
    </li>
  );
};

export default SubTask;
