var mongoose = require('mongoose');
var schema = mongoose.Schema;
var testschema= new schema({
    "testname" : String,
    "passkey" : String,
    "duration" : Number,
    "no_of_ques" : Number
});

module.exports = mongoose.model('testdata',testschema,'metadata');