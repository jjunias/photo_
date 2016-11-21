var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PhotoSchema = new Schema({
    location: String,
    date: String,
    number:Number,
    img: String
});

module.exports = mongoose.model('photo', PhotoSchema);
