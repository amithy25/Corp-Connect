const mongoose = require('mongoose');

var connectionSchema = mongoose.Schema({
    connectionId: String,
    connectionName: String,
    connectionTopic: String,
    connectionDetails: String,
    connectionDate: String,
    connectionTime: String,
    connectionHost: String,
    connectionLocation: String,
});

connectionSchema.statics.addConnection = function addConnection(newConnection, cb) {
    connectionModel.create(newConnection);
}

connectionSchema.statics.getConnection = function getConnection(connectionId, cb) {
    return connectionModel.find({ connectionId: connectionId }).exec(cb);
}

connectionSchema.statics.getConnections = function getConnections(cb) {
    return connectionModel.find({}).exec(cb);
}


connectionSchema.statics.getConnectionMultiple = function getConnectionMultiple(connection_array, cb) {
    return connectionModel.find({ connectionId: { $in: connection_array } }).exec(cb);
}

connectionSchema.statics.updateConnection = function updateConnection(connectionId, connection, cb) {
    return connectionModel.updateOne({ connectionId: connectionId }, {
        $set: {
            "connectionName": connection.connectionName,
            "connectionTopic": connection.connectionTopic,
            "connectionDetails": connection.connectionDetails,
            "connectionDate": connection.connectionDate,
            "connectionTime": connection.connectionTime,
            "connectionHost": connection.connectionHost,
            "connectionLocation": connection.connectionLocation
        }
    }).exec(cb);
}

connectionSchema.statics.deleteConnection = function deleteConnection(connectionId, cb) {
    return connectionModel.deleteOne({ connectionId: connectionId }).exec(cb);
}

var connectionModel = mongoose.model('connectionModel', connectionSchema);
module.exports = connectionModel;