const { Pool } = require('pg');
//const key = process.env.SECRET_KEY;
//require('dotenv').config();
const PG_URI =  "postgres://uiziiixt:6qoAfgoyFy6N4K8Y_yXBFZEM2KuN-m0z@hansken.db.elephantsql.com/uiziiixt";

const pool = new Pool({
  connectionString: PG_URI,
});

/*

CREATE TABLE project (
   _id SERIAL PRIMARY KEY,
   projectName VARCHAR(255) NOT NULL,
   projectDescription TEXT NOT NULL,
);

INSERT INTO project (projectName, projectDescription) VALUES ('this is a name', 'this is a description')

CREATE TABLE projectToUser (
     _id SERIAL PRIMARY KEY,
     projectId INT NOT NULL,
     FOREIGN KEY (projectId) REFERENCES project(_id),
     userId TEXT NOT NULL)

     INSERT INTO projectToUser (projectId, userId) VALUES (1, 'something@aol.com');

     CREATE TABLE toDoList (
   _id SERIAL PRIMARY KEY,
   name VARCHAR(255) NOT NULL,
   projectId INT NOT NULL,
   description TEXT NOT NULL,
FOREIGN KEY (projectId) REFERENCES project(_id));

INSERT INTO toDoList (name, projectId, description) VALUES ('this is a name', 1, 'this is a description');

CREATE TABLE task (
   _id SERIAL PRIMARY KEY,
   taskName VARCHAR(255) NOT NULL,
   taskDescription TEXT NOT NULL,
   dueDate DATE,
   toDoList INT NOT NULL,
   projectId INT NOT NULL,
   assignedTo TEXT NOT NULL,
   completed BOOLEAN DEFAULT false,
   FOREIGN KEY (toDoList) REFERENCES toDoList(_id),
   FOREIGN KEY (projectId) REFERENCES project(_id));

   INSERT INTO task (taskName, taskDescription, dueDate, toDoList, projectId, assignedTo, completed) 
   VALUES ('this is a name', 'this is a description', '2023-03-01', 1, 1,  '63dede316dfc3b90f4c4ee58', false);
*/

// CREATE TABLE project (
//   _id SERIAL PRIMARY KEY,
//   projectName VARCHAR(255) NOT NULL,
//   projectDescription TEXT NOT NULL,
//   array of other sub collaborators on the project??
// );

// INSERT INTO project (projectName, projectDescription)
// VALUES ('Test Project', 'This is a test project description.');

// CREATE TABLE task (
//   _id SERIAL PRIMARY KEY,
//   taskName VARCHAR(255) NOT NULL,
//   taskDescription TEXT NOT NULL,
//   dueDate DATE,
//   projectId INT NOT NULL,
//   completed BOOLEAN DEFAULT false,
//   FOREIGN KEY (projectId) REFERENCES project(_id),
// );

// INSERT INTO task (taskName, taskDescription, dueDate, projectId)
// VALUES ('Test Task', 'This is a test task', '2023-02-04', 1);

// CREATE TABLE subTask (
//   _id SERIAL PRIMARY KEY,
//   subTaskName VARCHAR(255) NOT NULL,
//   subTaskDescription TEXT NOT NULL,
//   subTaskDueDate DATE,
//   taskId INT NOT NULL,
//   completed BOOLEAN DEFAULT false,
//   FOREIGN KEY (taskId) REFERENCES task(_id),
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

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};