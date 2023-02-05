const {Account, Cookie, Session} = require('../models/models');
const sessionController = {};


/**
* startSession - create and save a new Session into the database.
*/
sessionController.startSession = (req, res, next) => {
    //access locals property from previous middleware chain
    //console.log(res.locals.ssid, 'This is from startsession res.locals');
    //console.log(res.locals, 'this is general response');
    //console.log(req.locals, 'this is general request')
    //console.log(req.body, 'This is from startsession req.locals')
    Session.create({cookieId: res.locals.ssid})
      .then((data) => {
        console.log('successfully created session document');
        //res.locals.ssid = data;
        next();
      })
      .catch(err => {
        next({
            log: 'Error occurred in the sessionController.startSession middleware',
            status: 400,
            err: { err: 'Error occurred in creating your session'}
          });
      });
  }

  sessionController.endSession = (req, res, next) => {
    //write code here
    console.log(req.cookies.ssid );
    res.clearCookie('ssid');
    res.locals.ssid = ssid;
     next();
    //do we need to delete the session from the database too? or just let it expire?
  }




  module.exports = sessionController;