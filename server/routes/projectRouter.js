const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const accountController = require('../controllers/accountController');

//create a project
router.post(
  '/',
  accountController.checkUser,
  projectController.createProject,
  accountController.addProjectToAccount,
  (req, res) => {
    // console.log(res.locals);
    return res.status(201).json(res.locals.projects);
  }
);

//create a to do list
router.post(
  '/list',
  accountController.checkUser,
  projectController.createToDo,
  (req, res) => {
    // console.log(res.locals);
    return res.status(201).json(res.locals.toDo);
  }
);

//create a task
router.post(
  '/task',
  accountController.checkUser,
  accountController.checkUserExists,
  projectController.createTask,
  (req, res) => {
    // console.log(res.locals);
    return res.status(201).json(res.locals.task);
  }
);

//add a user
router.post(
  '/add',
  accountController.checkUser,
  accountController.checkUserExists,
  projectController.addUserToProject,
  (req, res) => {
    // console.log(res.locals);
    return res.status(201).json(res.locals.newUser);
  }
);

//mark task as completed
router.patch(
  '/complete',
  accountController.checkUser,
  projectController.markTaskComplete,
  (req, res) => {
    // console.log(res.locals);
    return res.status(201).json(res.locals.completed);
  }
);

//grab all projects corresponding to user
router.get(
  '/',
  accountController.checkUser,
  projectController.getProjects,
  (req, res) => {
    // console.log(res.locals);
    return res.status(200).json(res.locals.projects);
  }
);

//grab all toDoLists corresponding to project
router.get(
  '/list/:project',
  accountController.checkUser,
  projectController.getToDos,
  (req, res) => {
    // console.log(res.locals);
    return res.status(200).json(res.locals.toDos);
  }
);

//get all tasks corresponding to project
router.get(
  '/task',
  accountController.checkUser,
  projectController.getTasks,
  (req, res) => {
    // console.log(res.locals);
    return res.status(200).json(res.locals.tasks);
  }
);

//get all tasks corresponding to a specific to do list
router.get(
  '/:project/task/:id',
  accountController.checkUser,
  projectController.getTaskByListId,
  (req, res) => {
    // console.log(res.locals);
    return res.status(200).json(res.locals.tasks);
  }
);

//get all users corresponding to a project
router.get(
  '/users/:project',
  accountController.checkUser,
  projectController.getUsersForProject,
  accountController.getUserProjectCreds,
  (req, res) => {
    // console.log(res.locals);
    return res.status(200).json(res.locals.users);
  }
);

//delete a project
router.delete(
  '/:project',
  accountController.checkUser,
  projectController.deleteProject,
  (req, res) => {
    // console.log(res.locals);
    return res.status(201).json(res.locals.deleted);
  }
);

module.exports = router;
