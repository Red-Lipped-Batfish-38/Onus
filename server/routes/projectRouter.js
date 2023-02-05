const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const accountController = require('../controllers/accountController');

router.post('/',
  accountController.checkUser,
  projectController.createProject,
  accountController.addProjectToAccount,
  (req, res) => {
    // console.log(res.locals);
    return res.status(200).json(res.locals.projects);
  }
);

module.exports = router;