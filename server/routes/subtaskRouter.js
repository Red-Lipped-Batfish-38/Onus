const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');
const subtaskController = require('../controllers/subtaskController');
//coming from /subtask. this may change

//we may need to parse out the task route to match task id to subtask id
router.post(
  '/',
  // accountController.checkUser,
  subtaskController.addSubtask,
  (req, res) => {
    res.status(200).send(res.locals.subtask);
  }
);

router.get(
  '/:todolistId',
  // accountController.checkUser,
  subtaskController.getSubtask,
  (req, res) => {
    res.status(200).send('gotta send a message from get subtasks');
  }
);

module.exports = router;
