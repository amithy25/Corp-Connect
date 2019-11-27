const express = require('express')
const connection = require('../utilities/connectionDB')
const router = express.Router();
const session = require('express-session');
const User = require('../models/user');
const connectionDB = require('../utilities/connectionDB')
const userDB = require('../utilities/userDB');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
//require connection model.
var connectionModel = require('../models/connections');
//require user model:
var userDbModel = require('../models/user');
//require user connections model:
var userConnections = require('../models/userConnection');

var urlencodedParser = bodyParser.urlencoded({ extended: false });
mongoose.connect('mongodb://localhost/corpdb', { useNewUrlParser: true }, (err) => {
    (err) ? console.log('error') : console.log('connected')
});

var db = mongoose.connection;
var Schema = mongoose.Schema;


var connections = [{
    connectionId: '1',
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
    connectionId: '2',
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
    connectionId: '3',
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
    connectionId: '4',
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
    connectionId: '5',
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
    connectionId: '6',
    connectionName: "Kayaking at Myrtle Beach",
    connectionTopic: "Outdoor and Adventure",
    connectionDetails: "In Mood for some sea wind? come with your Kayaks to Myrtle Beach to have an amazing time",
    connectionDate: "04/5/2019",
    connectionTime: "1:00 pm",
    connectionHost: "Homelander",
    connectionImage: "../assets/images/usr.png",
    connectionLocation: "Myrtle, SC",
    rsvp: ''
}
];

var users = [
    {
        userID: 1,
        fname: "Dave",
        lname: "Lee",
        email: "d2d@gmail.com",
    },

    {
        userID: 2,
        fname: "mark",
        lname: "spencer",
        email: "mspencer@gmail.com",
    }
];

var userConnection = [{
    userID: 1,
    connectionDetails: [['1', 'Yes'], ['2', 'No']]
}];

//reset the data on everytime the database is opened.

db.once('open', function () {
    mongoose.connection.dropDatabase();
    // save multiple documents to the collection referenced by Connection Model:
    connectionModel.collection.insert(connections, function (err, docs) {
        if (err) {
            return console.error(err);
        } else {
            console.log("Documents populated!");
        }
    });

    userDbModel.collection.insert(users, function (err, docs) {
        if (err) {
            return console.error(err);
        } else {
            console.log("Documents populated!");
        }
    });


    userConnections.collection.insert(userConnection, function (err, docs) {
        if (err) {
            return console.error(err);
        } else {
            console.log("Documents populated!");
        }
    });
});



var user = userDB.getUsers()[0]

const app = express();

app.set('view engine', 'ejs');


app.use('/assets', express.static('assets'));

//define route handling: 

router.get('/', function (req, res) {
    res.render('index')
});



router.get('/connections', (req, res) => {
    connectionModel.getConnections(function (err, data) {
        if (err) {
            console.log(err);
        }
        connections = data;
        var topics = [];
        connections.forEach(connection => {

            topics.push(connection.connectionTopic);
        });

        res.render('connections', { events: connections, topic: topics })
    })


});


router.get('/connections*', (req, res) => {
    res.render('index');
})

var id;
router.get('/connection/:connectionId', (req, res) => {
    id = req.params.connectionId;

    connectionModel.getConnection(id, function (err, con) {
        //console.log(con);
        res.render('connection', { event: con });
    })
});


let delete_flag = false;
router.get('/savedConnections', async function (req, res) {

    var rsvp = req.query.rsvp;
    let userID = 1;
    let saveUserConnection = [[id, rsvp]];
    let connection_array = [];
    var deletable_id = req.query.delete_id;
    let delete_rsvp = req.query.delete_rsvp;


    if (delete_rsvp == undefined) {
        delete_flag = false;
        await userConnections.addConnection(userID, saveUserConnection, function (error, data) {
            if (error) {
                console.log(error);
            }
        });

        await userConnections.getUser(userID, async function (error, data) {
            let ht = {};
            for (values in data[0].connectionDetails) {
                ht[data[0].connectionDetails[values][0]] = data[0].connectionDetails[values][1];
                connection_array.push(data[0].connectionDetails[values][0]);
            }
            // console.log(connection_array)
            await connectionModel.getConnectionMultiple(connection_array, function (error, data) {
                let updatedConnections = data;
                for (con in updatedConnections) {
                    updatedConnections[con].rsvp = ht[updatedConnections[con].connectionId]
                }
                res.render("savedConnections.ejs", { userConnections: updatedConnections });
            })
        })
    }

    if (delete_rsvp != undefined) {
        delete_flag = true;
        let delete_array = [];
        await userConnections.getUser(userID, async function (err, data) {
            if (err) console.log(err);
            for (con in data[0].connectionDetails) {
                if (data[0].connectionDetails[con][0] == deletable_id) {
                    delete_array.push(data[0].connectionDetails[con])
                }
            }
            for (con in delete_array) {
                await userConnections.deleteConnection(userID, delete_array[con], function (err, data) {
                    if (err) console.log(err);
                });
            }
            await userConnections.getUser(userID, async function (error, data) {
                let ht = {};
                for (values in data[0].connectionDetails) {
                    ht[data[0].connectionDetails[values][0]] = data[0].connectionDetails[values][1];
                    connection_array.push(data[0].connectionDetails[values][0]);
                }
                await connectionModel.getConnectionMultiple(connection_array, async function (err, data) {
                    let updatedConnections = data;
                    for (con in updatedConnections) {
                        updatedConnections[con].rsvp = ht[updatedConnections[con].connectionId]
                    }
                    res.render("savedConnections.ejs", { userConnections: updatedConnections });
                });
            })
        })
    }
});



router.get('/logout', function (req, res) {
    res.render('index');
});

router.get('/signin', (req, res) => {
    res.render('signin');
});

router.get('/about', (req, res) => {
    res.render('about')
})


router.get('/contact', (req, res) => {
    res.render('contact')
})

router.get('/newConnection', (req, res) => {
    res.render('newConnection', { qs: req.query })
})
router.post('/newConnection', urlencodedParser, (req, res) => {
    connectionModel.addConnection(req.body, function (err, data) {
        console.log("inserted: " + data.connectionId);
        if (err) {
            console.log(err);
        }
    })
    res.render('newConnection', { qs: req.query });
    console.log(req.body)
});

var cid;

router.get('/edit/:connectionId', (req, res) => {
    cid = req.params.connectionId;
    //console.log(cid);
    connectionModel.getConnection(cid, function (err, con) {
        //console.log(con);
        res.render('edit', { qs: con });
    })
});

router.post('/update', urlencodedParser, (req, res) => {
    connectionModel.updateConnection(cid, req.body, function (err, data) {
        if (err)
            console.log(err);
        console.log("change made!")
        connectionModel.getConnections(function (err, data) {
            if (err) {
                console.log(err);
            }
            connections = data;
            var topics = [];
            connections.forEach(connection => {

                topics.push(connection.connectionTopic);
            });

            res.render('connections', { events: connections, topic: topics })
        })
    })
});

router.get('/delete/:id', async function (req, res) {
    // console.log(req.params.id.toString());
    await connectionModel.deleteConnection(req.params.id.toString(), async function (err, data) {
        if (err) console.log(err);
        //console.log("deleted connection: " + JSON.stringify(data));
        await connectionModel.getConnections(function (err, data) {
            if (err) {
                console.log(err);
            }
            connections = data;
            var topics = [];
            connections.forEach(connection => {

                topics.push(connection.connectionTopic);
            });

            res.render('connections', { events: connections, topic: topics })
        })
    })
})


module.exports = router;