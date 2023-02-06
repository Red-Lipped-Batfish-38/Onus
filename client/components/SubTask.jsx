import React, { useState, useEffect } from 'react';
import { FormControlLabel, Checkbox } from '@mui/material';

const SubTask = ({ SubTask }) => {
  return (
    <li>
      <label>
        <FormControlLabel control={<Checkbox />} />
      </label>
      <span className="content">{SubTask}</span>
      <p>WHY THIS NOT WORKING</p>
    </li>
  );
};

export default SubTask;
