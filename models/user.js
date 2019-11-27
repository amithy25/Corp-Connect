const mongoose = require('mongoose');
var userDbSchema = mongoose.Schema({
    userID: String,
    fname: String,
    lname: String,
    email: String
});

var userDbModel = mongoose.model('userDbModel', userDbSchema);
module.exports = userDbModel;

// User ID
// First Name
// Last Name
// Email Address
// Optional fields
// Address 1 Field
// Address 2 Field
// City
// State
// Zip Code
// Country