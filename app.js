var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const dotenv = require('dotenv');
var indexRouter = require('./server/routes/index');
var usersRouter = require('./server/routes/users');

var app = express();

dotenv.config();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/dist/torre-technical')));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/torre-technical/index.html'));
  });

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(process.env.PORT || 3000);

console.log(`App running on ${process.env.PORT || 3000}`);

module.exports = app;
