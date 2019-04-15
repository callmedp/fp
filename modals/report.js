var mongoose = require('mongoose');
var schema = mongoose.Schema;
var Report = new schema({
  stname : String,
  checkedans : Array,
  score : Number
});

module.exports = mongoose.model('report',Report,'report');