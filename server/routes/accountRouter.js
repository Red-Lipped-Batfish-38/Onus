const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');
const sessionController = require('../controllers/sessionController');
const cookieController = require('../controllers/cookieController');

//create a new account -> createaccount, createSSIDCookie
router.post('/', accountController.createAccount, 
                 cookieController.getSSIDCookie, 
                 sessionController.startSession,
    (req, res) => {
    return res.status(201).json(res.locals.newUser);
  });

  router.post('/log', accountController.verifyUser, cookieController.setSSIDCookie, sessionController.startSession,
  (req, res) => {
    
    
  });

  








module.exports = router;