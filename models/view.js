var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var viewSchema = new Schema({
    name: String,
    number:Number,
    age: String,
    img: String,
    content: String
});

module.exports = mongoose.model('view', viewSchema);