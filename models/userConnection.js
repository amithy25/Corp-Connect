const mongoose = require('mongoose');
var UserConnectionDBSchema = mongoose.Schema({
    userID: Number,
    connectionDetails: Array
});

UserConnectionDBSchema.statics.getUser = function getUser(userID, cb) {
    return userConnections.find({ userID: userID }).exec(cb);
}

UserConnectionDBSchema.statics.addConnection = function addConnection(userID, saveConnectionUser, cb) {
    return userConnections.update({ userID: userID }, { $push: { connectionDetails: saveConnectionUser } }).exec(cb);
}

UserConnectionDBSchema.statics.deleteConnection = function deleteConnection(userID, delete_array, cb) {
    return userConnections.update({ $pullAll: { connectionDetails: [delete_array] } }).exec(cb);
}

var userConnections = mongoose.model('userConnections', UserConnectionDBSchema);
module.exports = userConnections;