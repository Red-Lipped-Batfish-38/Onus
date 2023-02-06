const { Pool } = require('pg');
//const key = process.env.SECRET_KEY;
//require('dotenv').config();
const PG_URI =
  'postgres://uiziiixt:6qoAfgoyFy6N4K8Y_yXBFZEM2KuN-m0z@hansken.db.elephantsql.com/uiziiixt';

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

 CREATE TABLE subTask (
   _id SERIAL PRIMARY KEY,
   subTaskName VARCHAR(255) NOT NULL,
   subTaskDescription TEXT NOT NULL,
   subTaskDueDate DATE,
   toDoListId INT NOT NULL,
   taskId INT NOT NULL,
   completed BOOLEAN DEFAULT false,
   FOREIGN KEY (toDoListId) REFERENCES toDoList(_id),
   FOREIGN KEY (taskId) REFERENCES task(_id));
 

 INSERT INTO subTask (subTaskName, subTaskDescription, subTaskDueDate, taskId)
 VALUES ('Test Subtask', 'Description for Test Subtask', '2023-02-04', 1);

*/

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
