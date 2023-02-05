const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');
const sessionController = require('../controllers/sessionController');
const cookieController = require('../controllers/cookieController');

//create a new account 
router.post('/', accountController.createAccount, 
                 cookieController.getSSIDCookie, 
                 sessionController.startSession,
    (req, res) => {
    return res.status(201).json(res.locals.newUser);
  });



  //check user is logged in using browser cookies in react useEffect hook
  router.get('/', accountController.checkUser,
  (req, res) => {
    return res.status(200).json(res.locals.userSession);
  });



  //log in existing user
  router.post('/log', accountController.verifyUser, 
                      cookieController.getSSIDCookie, 
                      sessionController.startSession,
  (req, res) => {
    //send status 200 and return ssid, equivalent to cookie set in browser
    return res.status(200).json(res.locals.ssid);
  });



  //log out user and end session
  router.get('/logout', sessionController.endSession, 
  (req, res) => {
    res.clearCookie('ssid').json(res.locals.ssid);
  });

  








module.exports = router;