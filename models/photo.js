var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PhotoSchema = new Schema({
    location: String,
    date: String,
    number:Number,
    first:Number,	
    clicked:Number,
    img: String
});

module.exports = mongoose.model('photo', PhotoSchema);
