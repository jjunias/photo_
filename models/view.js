var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ViewSchema = new Schema({
    name: String,
    number:Number,
    age: String,
    img: String,
    content: String
});

module.exports = mongoose.model('view', ViewSchema);