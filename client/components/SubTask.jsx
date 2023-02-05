import React, { useState, useEffect } from 'react';

const SubTask = ({ subHi }) => {
  return (
    <li>
      <label>
        <span className="checkbox"></span>
      </label>
      <span className="content">{subHi}</span>
    </li>
  );
};

export default SubTask;
