var mongoose = require('mongoose');  
var UserSchema = new mongoose.Schema({  
  name: { type: String, unique: true, required: true },
  email: { type: String, unique: true },
  password: { type: String, required: true },
  read: { type: Boolean, default: false, required: true },
  write: { type: Boolean, default: true, required: true }
});
mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');