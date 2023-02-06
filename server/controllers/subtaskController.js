const db = require('../models/projectModels');

const subtaskController = {};

//I need to connect task id and todolist id
//make fetch requests work from frontend
//make subtask input

subtaskController.addSubtask = (req, res, next) => {
  console.log('addsubtask req body:', req.body);
  const {
    subTaskName,
    // subTaskDescription,
    // subTaskDueDate,
    toDoListId,
    taskId,
    completed,
  } = req.body;

  console.log(
    'RESULTS from post request from taskCard: ',
    subTaskName
    // subTaskDescription,
    // subTaskDueDate
  );

  const text = `INSERT INTO subtask (subtaskname, todolistid, taskid, completed)
  VALUES ('${subTaskName}', '${toDoListId}', '${taskId}', '${completed}')`;

  db.query(text)
    .then((data) => {
      console.log(data);
      console.log('added data');
      res.locals.subtask = {
        subTaskName,
        // subTaskDescription,
        subTaskDueDate: '2-05-2025',
        completed,
      };
      next();
    })
    .catch((err) =>
      next({
        log: 'There was an error in subtaskController.addSubtask',
        message: 'Your subtask could not be added for some reason, sorry.',
      })
    );
};

//on TaskCard render, the subtask list should populate
subtaskController.getSubtask = (req, res, next) => {
  console.log('in getsubtasks right now');

  //need task id and maybe todolist id
  const { taskId, todolistId } = req.params;
  // const todolist_id = 2; //for testing purposes
  //grab subtasks from subtask table with corresponding todolist id
  const text = `SELECT * FROM subtask WHERE toDoListId = ${todolistId}`;
  db.query(text)
    .then((data) => {
      //data.rows is an array of obj of each subtask
      console.log('this is taskss todos', data.rows);
      const subTaskArray = data.rows;
      res.locals.subTaskArray = subTaskArray;
      next();
    })
    .catch((err) =>
      next({
        log: 'There was an error in subtaskController.getSubtask',
        message: 'There was an error in retrieving your subtasks.',
      })
    );
};
module.exports = subtaskController;

//subtask schema from projectModels
// CREATE TABLE subTask (
//   _id SERIAL PRIMARY KEY,
//   subTaskName VARCHAR(255) NOT NULL,
//   subTaskDescription TEXT NOT NULL,
//   subTaskDueDate DATE,
//   toDoListId INT NOT NULL,
//   taskId INT NOT NULL,
//   completed BOOLEAN DEFAULT false,
//   FOREIGN KEY (toDoListId) REFERENCES toDoList(_id),
//   FOREIGN KEY (taskId) REFERENCES task(_id));

// INSERT INTO subTask (subTaskName, subTaskDescription, subTaskDueDate, taskId)
// VALUES ('Test Subtask', 'Description for Test Subtask', '2023-02-04', 1);

//example test POST req.body for postman:
// {
//   "subTaskName": "subtask from postman",
//   "subTaskDescription": "postman description",
//   "subTaskDueDate": "2023-02-04",
//   "toDoListId": "2",
//   "taskId": "1",
//   "completed": "false"
// }
