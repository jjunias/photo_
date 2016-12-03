var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ReplySchema = new Schema({
	number:Number,
    location: String,
    parent: Number,
    reply : String,
    id : String,
    pwd : String,
    date : String
});
module.exports = mongoose.model('reply', ReplySchema);

