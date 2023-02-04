const express = require('express');
const {Account, Cookie, Session} = require('../models/models');



const cookieController = {};

cookieController.getSSIDCookie = (req, res, next) => {
    // write code here
    const { email, password} = req.body;
    console.log('checking from SSID', email);

      Account.find({email}, '_id').exec()
        .then((data) =>{
          console.log(data[0]._id.toString(), 'this is to string');
          const id = data[0]._id.toString();
          res.cookie('ssid', id, { httpOnly: true });
          res.locals.ssid = id;
          next();
        })
        .catch(err => {
            next({
                log: 'Error occurred in the cookieController.SSIDCookie middleware',
                status: 400,
                err: { err: 'Error occurred in creating your session'}
              });
        });
     
  }


module.exports = cookieController;