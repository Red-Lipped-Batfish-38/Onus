import React, { useState, useEffect } from 'react';
import { FormControlLabel, Checkbox } from '@mui/material';
const SubTask = ({ subHi }) => {
  return (
    <li>
      <label>
        <FormControlLabel control={<Checkbox />} />
      </label>
      <span className="content">{subHi}</span>
    </li>
  );
};

export default SubTask;
