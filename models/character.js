var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name: {
  	first: String,
        last: String
    },
        email: String,
	gender: String,
        school: String,
        updated_at: {type: Date, default: Date.now},
});

module.exports = mongoose.model('User', userSchema);
