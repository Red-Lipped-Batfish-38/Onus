import React, { useState, useEffect } from 'react';
import Todos from '../components/Todos.jsx';

const TasksContainer = () => {
  return (
    <div>
      <header>TO-DOS</header>
      <section className="grid">
        <Todos />
      </section>
    </div>
  );
};

export default TasksContainer;
