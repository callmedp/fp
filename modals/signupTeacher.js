var mongoose = require('mongoose');
var schema = mongoose.Schema;
var SignupTeacher= new schema({
  tname :String,
  tid : String,
  tpass : String,
  temail : String,
  tmobile : String
});

module.exports = mongoose.model('signupTeacher',SignupTeacher,'teacherdata');