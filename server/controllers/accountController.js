const express = require('express');
const {Account, Cookie, Session} = require('../models/models');
const bcrypt = require('bcryptjs');
const accountController = {};

accountController.createAccount = (req, res, next) => {
    // --> 
    console.log('we are currently in account controller create account')
    const { firstName, lastName, email, password} = req.body;
    //console.log(req.body)
    console.log(firstName, lastName, email, password, 'checking credentials');
    if(!firstName || !lastName || !email || !password){
        return next('Missing credentials');
      }
    Account.create({firstName, lastName, email, password})
    .then((data) => {
        console.log('We got into the account creation method');
        //res.locals.newUser = data[0];
        console.log(data);
        next();
    })
    .catch(err => {
        next({
          log: 'Error occurred in the accountController.createAccount middleware',
          status: 400,
          err: { err: 'Error occurred in creating your account'}
        });
      });
}


accountController.verifyUser = (res, req, next) => {
    console.log('in verify user')
    const (firstName, lastName, email, password) = req.body;
    if(!firstName || !lastName || !email || !password){
        return next('Missing credentials');
      }
    //find email and associated pw
     //then save to encryoed pw
    
    //get the pasword
    bcrypt.compare(password, ) //compare to encrypted
    //bcrypt.compare the plaintext pw and encrypted
      //errm result, send result next
}

module.exports = accountController;