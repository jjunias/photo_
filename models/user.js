var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    pwd: String,
    email: String
});

module.exports = mongoose.model('user', userSchema);
