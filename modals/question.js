var mongoose = require('mongoose');

var schema = mongoose.Schema;

var question = new schema({
    passkey :String,
    question : String,
    option1 : String,
    option2 : String,
    option3 : String,
    option4 : String,
    answer : String

});

module.exports = mongoose.model('questions',question);