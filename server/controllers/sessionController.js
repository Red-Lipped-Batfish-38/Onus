const {Account, Cookie, Session} = require('../models/models');
const sessionController = {};


/**
* startSession - create and save a new Session into the database.
*/
sessionController.startSession = (req, res, next) => {
    //access locals property from previous middleware chain
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




  module.exports = sessionController;