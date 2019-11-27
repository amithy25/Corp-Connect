const Connection = require('./connection')
const User = require('./user')
const UserConnection = require('./userConnection');

class UserProfile {
    constructor(user, userConnections) {
        this.user = user;
        this.userConnections = userConnections;
    }

    addConnection(connection, rsvp) {
        this.userConnections.forEach(uconnection => {
            if (uconnection.connection.connectionName === connection.connectionName()) {
                return new Error("This connection already exists.");
            }
        });

        var newConnection = new UserConnection(connection, rsvp);
        this._userConnections.push(newConnection);
    }

    removeConnection(connection) {
        for (let i = 0; i < this.userConnections.length; i++) {
            if (this.userConnections[i].connection.connectionName === connection.connectionName) {
                this.userConnections.splice(i, 1);
                break;
            }
        }
    }

    updateConnection(uConnection) {
        if (!uconnection instanceof Connection) {
            return new Error("This is not a connection object.")
        }
        UserConnection.forEach(uconnection => {
            if (uconnection.connection.connectionName === connection.connectionName()) {
                return this.UserConnection = uConnection;
            }
        });
    }

    getConnections() {
        return this.UserConnection;
    }

    emptyProfile() {
        delete this.user;
    }
}

module.exports = UserProfile;

