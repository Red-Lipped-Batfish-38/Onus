const { Pool } = require('pg');
const key = process.env.SECRET_KEY;
require('dotenv').config();
const PG_URI = process.env.SQL_KEY;

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = pool;

// CREATE TABLE project (
//   _id SERIAL PRIMARY KEY,
//   projectName VARCHAR(255) NOT NULL,
//   projectDescription TEXT NOT NULL
// );

// INSERT INTO project (projectName, projectDescription)
// VALUES ('Test Project', 'This is a test project description.');

// CREATE TABLE task (
//   _id SERIAL PRIMARY KEY,
//   taskName VARCHAR(255) NOT NULL,
//   taskDescription TEXT NOT NULL,
//   dueDate DATE,
//   projectId INT NOT NULL,
//   FOREIGN KEY (projectId) REFERENCES project(_id)
// );

// INSERT INTO task (taskName, taskDescription, dueDate, projectId)
// VALUES ('Test Task', 'This is a test task', '2023-02-04', 1);

// CREATE TABLE subTask (
//   _id SERIAL PRIMARY KEY,
//   subTaskName VARCHAR(255) NOT NULL,
//   subTaskDescription TEXT NOT NULL,
//   subTaskDueDate DATE,
//   taskId INT NOT NULL,
//   FOREIGN KEY (taskId) REFERENCES task(_id)
// );

// INSERT INTO subTask (subTaskName, subTaskDescription, subTaskDueDate, taskId)
// VALUES ('Test Subtask', 'Description for Test Subtask', '2023-02-04', 1);

//---SELECT ALL TASKS THAT BELONG TO PROJECT 1---

// SELECT task.*
// FROM task
// JOIN project ON task.projectId = project._id
// WHERE project._id = 1;

//---SELECT ALL SUBTASKS THAT BELONG TO PROJECT 1---

// SELECT subTask.*
// FROM subTask
// JOIN task ON subTask.taskId = task._id
// JOIN project ON task.projectId = project._id
// WHERE project._id = 1;


// CREATE TABLE project (
//   _id SERIAL PRIMARY KEY,
//   projectName VARCHAR(255) NOT NULL,
//   projectDescription TEXT NOT NULL
// );

// CREATE TABLE task (
//   _id SERIAL PRIMARY KEY,
//   taskName VARCHAR(255) NOT NULL,
//   taskDescription TEXT NOT NULL,
//   dueDate DATE,
//   projectId INT NOT NULL,
//   FOREIGN KEY (projectId) REFERENCES project(_id)
// );

// CREATE TABLE subTask (
//   _id SERIAL PRIMARY KEY,
//   subTaskName VARCHAR(255) NOT NULL,
//   subTaskDescription TEXT NOT NULL,
//   subTaskDueDate DATE,
//   taskId INT NOT NULL,
//   FOREIGN KEY (taskId) REFERENCES task(_id)
// );