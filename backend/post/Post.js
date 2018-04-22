var mongoose = require('mongoose');  
var PostSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    city: { type: String },
    age: { type: Number },
    address: { type: String },
    issue: { type: String },
});
mongoose.model('Post', PostSchema);

module.exports = mongoose.model('Post');