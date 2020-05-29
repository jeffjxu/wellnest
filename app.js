var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var activitiesRouter = require('./routes/activities');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

let activities = {
  1: {'title': 'Card Title 1', 'text': 'Some placeholder text'},
  2: {'title': 'Card Title 2', 'text': 'Some placeholder text'},
  3: {'title': 'Card Title 3', 'text': 'Some placeholder text'},
  4: {'title': 'Card Title 4', 'text': 'Some placeholder text'},
  5: {'title': 'Card Title 5', 'text': 'Some placeholder text'},
  6: {'title': 'Card Title 6', 'text': 'Some placeholder text'},
  7: {'title': 'Card Title 7', 'text': 'Some placeholder text'},
  8: {'title': 'Card Title 8', 'text': 'Some placeholder text'},
  9: {'title': 'Card Title 9', 'text': 'Some placeholder text'},
  10: {'title': 'Card Title 10', 'text': 'Some placeholder text'},
  11: {'title': 'Card Title 11', 'text': 'Some placeholder text'}
};

app.get('/activities', function (req, res) {
  console.log("hi app");
  return res.send(Object.values(activities));
});

app.get('/activity/:id', function(req, res, next) {
  console.log("activity detail");
  return res.send(Object.values(activities)[req.params.id]);
});

// app.use('/', indexRouter);
// app.use('/activities', activitiesRouter);

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
