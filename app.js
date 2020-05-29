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
// app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));

let activities = {
  1: {'title': 'Card Title 1', 'text': 'Some placeholder text', 'image': 'http://localhost:3000/images/hobby.jpg'},
  2: {'title': 'Card Title 2', 'text': 'Some placeholder text', 'image': 'http://localhost:3000/images/hobby.jpg'},
  3: {'title': 'Card Title 3', 'text': 'Some placeholder text', 'image': 'http://localhost:3000/images/hobby.jpg'},
  4: {'title': 'Card Title 4', 'text': 'Some placeholder text', 'image': 'http://localhost:3000/images/hobby.jpg'},
  5: {'title': 'Card Title 5', 'text': 'Some placeholder text', 'image': 'http://localhost:3000/images/hobby.jpg'},
  6: {'title': 'Card Title 6', 'text': 'Some placeholder text', 'image': 'http://localhost:3000/images/hobby.jpg'},
  7: {'title': 'Card Title 7', 'text': 'Some placeholder text', 'image': 'http://localhost:3000/images/hobby.jpg'},
  8: {'title': 'Card Title 8', 'text': 'Some placeholder text', 'image': 'http://localhost:3000/images/hobby.jpg'},
  9: {'title': 'Card Title 9', 'text': 'Some placeholder text', 'image': 'http://localhost:3000/images/hobby.jpg'},
  10: {'title': 'Card Title 10', 'text': 'Some placeholder text', 'image': 'http://localhost:3000/images/hobby.jpg'},
  11: {'title': 'Card Title 11', 'text': 'Some placeholder text', 'image': 'http://localhost:3000/images/hobby.jpg'}
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
