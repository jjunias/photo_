var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PhotoSchema = new Schema({
    catalog: String,
    data: String,
    img: String
});

module.exports = mongoose.model('photo', PhotoSchema);
