var express = require('express');
var router = express.Router();

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

router.get('/', function(req, res, next) {
  console.log("index");
  return res.send(Object.values(activities));
});

router.get('/:id', function(req, res, next) {
  console.log("activity detail");
  return res.send(Object.values(activities)[req.params.id]);
});

module.exports = router;