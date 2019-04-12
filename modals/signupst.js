var mongoose = require('mongoose');
var schema = mongoose.Schema;
var Signupst= new schema({
  stname :String,
  strollno : String,
  stpass : String,
  stemail : String,
  stmobile : String
});

module.exports = mongoose.model('signupst',Signupst,'studentdata');