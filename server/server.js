const express = require('express');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
//once we have a secret key available contingent on db
const key = process.env.SECRET_KEY;
require('dotenv').config();
// this is a test of checkout
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
