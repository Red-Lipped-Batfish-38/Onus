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
    return res.status(200).json(res.locals.subtask);
  }
);

router.get(
  '/:todolistId',
  // accountController.checkUser,
  subtaskController.getSubtask,
  (req, res) => {
    return res.status(200).json(res.locals.subTaskArray);
  }
);

module.exports = router;
