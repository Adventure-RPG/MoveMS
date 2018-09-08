var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  username: {type: String, required:true},
  point: {type: [Number], default: [0.0,0.0,0.0]}
});

module.exports = mongoose.model('User', UserSchema);
