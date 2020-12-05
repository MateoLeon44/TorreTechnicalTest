var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./server/routes/index');
var usersRouter = require('./server/routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/dist/TorreTechnicalTest')));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/TorreTechnicalTest/index.html'));
  });

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(process.env.PORT || 3000);

module.exports = app;
