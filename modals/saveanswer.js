var mongoose = require('mongoose');
var schema = mongoose.Schema;
var SaveAnswers = new schema({
  strollno : String,
  answers : Array
});

module.exports = mongoose.model('saveAnswers',SaveAnswers,'answers');