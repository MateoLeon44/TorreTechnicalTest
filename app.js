const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dotenv = require('dotenv');
const indexRouter = require('./server/routes/index');
const peopleRouter = require('./server/routes/people');
const compression = require('compression');
const cors = require('cors');

const app = express();
app.use(compression())

dotenv.config();
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/dist/torre-technical')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/torre-technical/index.html'));
});

app.use('/', indexRouter);
app.use('/people', peopleRouter);

app.listen(process.env.PORT || 3000);

console.log(`App running on ${process.env.PORT || 3000}`);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Credentials", true);

  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With, X-HTTP-Method-Override, content-Type, Accept, credentials, cache"
  );

  if ("OPTIONS" == req.method) {
    res.send(200);
  } else {
    next();
  }
});

module.exports = app;
