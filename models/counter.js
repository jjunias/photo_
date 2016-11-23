var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CounterSchema = new Schema({
	 seq: Number
});

module.exports = mongoose.model('counter', CounterSchema);
