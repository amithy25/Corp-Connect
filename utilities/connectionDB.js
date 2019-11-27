//const events = require('../models/events')

const topics = ["Art", "Outdoor and Adventure"]

allEvents = [
    {
        connectionId: 1,
        connectionName: "Sewing clothes that fit",
        connectionTopic: "Art",
        connectionDetails: "This is the social recreation group that teaches newbies how to sew clothes to wear!",
        connectionDate: "09/10/2019",
        connectionTime: "12:00 am",
        connectionHost: "Kevin Wong",
        connectionImage: "../assets/images/user.png",
        connectionLocation: "Freedom Park Charlotte NC",
        rsvp: ''
    },

    {
        connectionId: 2,
        connectionName: "knitting and crafting",
        connectionTopic: "Art",
        connectionDetails: "join us and learn how to Knit and we also learn Home Decor Crafting together.",
        connectionDate: "23/11/2019",
        connectionTime: "10:00 am",
        connectionHost: "Amith yarra",
        connectionImage: "../assets/images/usr.png",
        connectionLocation: "Freedom Park Charlotte NC",
        rsvp: ''
    },

    {
        connectionId: 3,
        connectionName: "Glass Blowing",
        connectionTopic: "Art",
        connectionDetails: "You are invited to leaarn the ancient chinese art of Glass blowing. yeah it is not rocket science.",
        connectionDate: "05/11/2019",
        connectionTime: "8:00 pm",
        connectionHost: "Kenneth Hathcock",
        connectionImage: "../assets/images/user.png",
        connectionLocation: "Freedom Park Charlotte NC",
        rsvp: ''
    },
    {
        connectionId: 4,
        connectionName: "Habitual Roots and Wellness",
        connectionTopic: "Outdoor and Adventure",
        connectionDetails: "Let us explore the beautiful nature and find the secret weapon to fight diseases using natural plant roots.",
        connectionDate: "27/09/2019",
        connectionTime: "6:00 am",
        connectionHost: "Ben Roberts",
        connectionImage: "../assets/images/usr.png",
        connectionLocation: "Freedom Park Charlotte NC",
        rsvp: ''
    },
    {
        connectionId: 5,
        connectionName: "Niagara Falls Trip",
        connectionTopic: "Outdoor and Adventure",
        connectionDetails: "Are you ready for some Adventure? join us on a wild road trip to Niagara Falls.",
        connectionDate: "06/7/2019",
        connectionTime: "1:00 am",
        connectionHost: "Doug Williams",
        connectionImage: "../assets/images/user.png",
        connectionLocation: "Freedom Park Charlotte NC",
        rsvp: ''
    },
    {
        connectionId: 6,
        connectionName: "Kayaking at Myrtle Beach",
        connectionTopic: "Outdoor and Adventure",
        connectionDetails: "In Mood for some sea wind? come with your Kayaks to Myrtle Beach to have amazing time",
        connectionDate: "04/5/2019",
        connectionTime: "1:00 pm",
        connectionHost: "Homelander",
        connectionImage: "../assets/images/usr.png",
        connectionLocation: "Myrtle, SC",
        rsvp: ''
    },
]




const getConnections = function () {
    return allEvents;
}


const getConnection = function (cid) {
    return allEvents.find(event => {
        return event.connectionId === cid;
    });
}

const getCon = function (cid) {
    for (var i = 0; i < allEvents.length; i++) {
        if (allEvents[i].connectionId == cid) {
            var con = {
                connectionId: allEvents[i].connectionId,
                connectionName: allEvents[i].connectionName,
                connectionTopic: allEvents[i].connectionTopic,
                connectionDetails: allEvents[i].connectionDetails,
                connectionDate: allEvents[i].connectionDate,
                connectionTime: allEvents[i].connectionTime,
                connectionLocation: allEvents[i].connectionLocation,
                rsvp: ''
            }
            return con;
        }
    }
}


module.exports = { getConnections, getConnection, topics, getCon }