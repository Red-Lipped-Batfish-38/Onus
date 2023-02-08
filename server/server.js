const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const accountRouter = require('./routes/accountRouter');
const projectRouter = require('./routes/projectRouter');
const subtaskRouter = require('./routes/subtaskRouter');
require('dotenv').config();
// note this is a URL, not a key, but that's what they named it and I don't want to change it
const key = process.env.MONGO_URL;
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
app.use('/project', projectRouter);
app.use('/subtask', subtaskRouter);
// require controllers?

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/index.html'));
});

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
