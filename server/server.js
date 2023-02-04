const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const accountRouter = require('./routes/accountRouter');
//require('dotenv').config();
//once we have a secret key available contingent on db
const key = 'mongodb+srv://mzkrasner:element@cluster0.gxacbcq.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(key);

const PORT = 3000;
const app = express();

//allow cross-origin requests
app.use(
  cors({
    origin: 'http://localhost:8080',
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());
app.use(bodyParser.text());
// require routers

app.use('/account', accountRouter);

// require controllers?

app.use((req, res) => {
  res.status(200).send('This page does not exist in real life...');
});

app.use((err, req, res, next) => {
  const defaultError = {
    log: 'Global error handler caught an unknown middleware error.',
    status: 500,
    message: { err: 'An error has occurred' },
  };
  const errorObj = Object.assign({}, defaultError, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

module.exports = app.listen(PORT, () =>
  console.log(`Listening on port ${PORT}`)
);

