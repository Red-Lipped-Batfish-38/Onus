const express = require('express');
const { Account, Cookie, Session } = require('../models/models');
const bcrypt = require('bcryptjs');
const accountController = {};

accountController.createAccount = (req, res, next) => {
  // -->
  console.log('we are currently in account controller create account');
  const { firstName, lastName, email, password } = req.body;
  //console.log(req.body)
  console.log(firstName, lastName, email, password, 'checking credentials');
  if (!firstName || !lastName || !email || !password) {
    return next('Missing credentials');
  }
  Account.create({ firstName, lastName, email, password })
    .then((data) => {
      console.log('We got into the account creation method');
      //res.locals.newUser = data[0];
      console.log(data);
      next();
    })
    .catch((err) => {
      next({
        log: 'Error occurred in the accountController.createAccount middleware',
        status: 400,
        err: { err: 'Error occurred in creating your account' },
      });
    });
};

accountController.checkUserExists = (req, res, next) => {
  console.log('in checkUserExists');
  //user logs in with email and password

  const { email } = req.body;
  console.log(email);
  Account.find({ email })
    .exec()
    .then((data) => {
      console.log(data);
      //compare plaintext pw and encrypted
      if (data.length) {
        next();
      } else {
        next({
          log: 'Error occurred in the accountController.checkUserExists middleware',
          status: 400,
          err: { err: 'User does not exist' },
        });
      }
    })
    .catch((err) => {
      next({
        log: 'Error occurred in the accountController.verifyUser middleware',
        status: 400,
        err: { err: 'Unknown error' },
      });
    });
};
accountController.verifyUser = (req, res, next) => {
  console.log(JSON.parse(req.body));
  //user logs in with email and password
  const { email, password } = JSON.parse(req.body);

  const controller = (passPhrase) => {
    console.log(passPhrase, 'this is the password');
    Account.find({ email }, 'password')
      .exec()
      .then((data) => {
        console.log(data);
        //compare plaintext pw and encrypted
        bcrypt.compare(passPhrase, data[0].password, function (err, res) {
          console.log(res, 'this is the res');
          if (err) {
            return next({
              log: 'Error occurred in the accountController.verifyUser middleware',
              status: 400,
              err: { err: 'Either the password or username is incorrect' },
            });
          }
        });

        next();
      })
      .catch((err) => {
        next({
          log: 'Error occurred in the accountController.verifyUser middleware',
          status: 400,
          err: { err: 'Unknown error' },
        });
      });
  };

  controller(password);
};

//for auto-checking user exists based on browser cookie upon useEffect react hook
accountController.checkUser = (req, res, next) => {
  const ObjectId = require('mongodb').ObjectId;
  const id = req.cookies.ssid;
  const o_id = new ObjectId(id);

  Account.find({ _id: o_id })
    .exec()
    .then((data) => {
      console.log('we got into the check user method');
      //console.log(data);
      const { firstName, lastName, email } = data[0];
      res.locals.userSession = { firstName, lastName, email };
      next();
    })
    .catch((err) => {
      next({
        log: 'Error occurred in the accountController.checkUser middleware',
        status: 400,
        err: { err: 'Unknown cookie error' },
      });
    });
};

//add project to account accountController.addProjectToAccount
accountController.addProjectToAccount = (req, res, next) => {
  const ObjectId = require('mongodb').ObjectId;
  const id = req.cookies.ssid;
  const o_id = new ObjectId(id);
  console.log('checking from add project to account');
  Account.findOneAndUpdate(
    { _id: o_id },
    { $push: { projectIds: res.locals.newEntry } }
  )
    .exec()
    .then((data) => {
      console.log('we successfully added a project id');
      //console.log(data);
      // const {firstName, lastName, email} = data[0];
      // res.locals.new = {firstName, lastName, email};
      console.log(data);
      next();
    })
    .catch((err) => {
      next({
        log: 'Error occurred in the accountController.checkUser middleware',
        status: 400,
        err: { err: 'Unknown cookie error' },
      });
    });
};

module.exports = accountController;
