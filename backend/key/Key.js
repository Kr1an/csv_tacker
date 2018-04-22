var mongoose = require('mongoose');  
var KeySchema = new mongoose.Schema({  
  value: { type: String, unique: true, required: true },
  used: { type: Boolean, default: false },
});
mongoose.model('Key', KeySchema);

module.exports = mongoose.model('Key');