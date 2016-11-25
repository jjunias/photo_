var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var QaSchema = new Schema({
	number: Number,
    writer: String,
    pwd: String,
    title: String,
    content: String,
    date: String,
    clicked: Number
});
module.exports = mongoose.model('qa', QaSchema);