var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var alerts = require('./middlewares/alerts');
const session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var ejerciciosRouter = require('./routes/ejercicios');
var persistenciaRouter = require('./routes/persistencia');
var databaseRouter = require('./routes/database');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(alerts.alert);
app.use(session({secret:"dh"}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/frontend', ejerciciosRouter);
app.use('/persistencia', persistenciaRouter);
app.use('/database', databaseRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
