const express = require('express')
const connectionDB = require('../utilities/connectionDB')
const session = require('express-session');
const User = require('../models/user');
const userDB = require('../utilities/userDB');
const router = express.Router();

var loggeduser = userDB.getUsers();
var con = [];
var id;
var default_con;
var add_cons;

// router.get('/savedConnections', function (req, res) {
//     req.session.cid = id;
//     var rsvp = req.query.rsvp;

//     default_con = connectionDB.getCon(1);
//     default_con.rsvp = 'Yes';

//     var delete_id = req.query.delete_id;
//     req.session.theUser = loggeduser[0];
//     rsvp = req.query.rsvp;

//     // default saved connection
//     if (delete_id == undefined) {
//         if (req.session.cid == undefined) {
//             default_con.rsvp = 'Yes';
//             console.log(default_con)

//             if (con.length == 0) {
//                 con.push(default_con);
//             }
//             else {
//                 for (let i = 0; i < con.length; i++) {
//                     if (default_con.connectionId == con[i].connectionId) {

//                     }
//                     else {
//                         default_con.rsvp = rsvp;
//                         con.push(default_con);

//                         req.session.con = con;
//                     }
//                 }
//             }

//         }
//         else {
//             add_cons = connectionDB.getCon(req.session.cid);
//             rsvp = req.query.rsvp;
//             add_cons.rsvp = rsvp;
//             default_con.rsvp = 'Yes';
//             // con[0] = default_con;
//             for (let i = 0; i < con.length; i++) {
//                 if (con[i].connectionId == add_cons.connectionId) {
//                     con.splice(i, 1);
//                 }
//             }
//             con.push(add_cons)
//             console.log(con)
//         }
//         req.session.con = con;
//         res.render('savedConnections', { userConnections: con, theUser: req.session.theUser });
//     }
//     else {

//         con.splice(delete_id, 1);
//         res.render('savedConnections', { theUser: req.session.theUser, userConnections: con });

//         req.session.con = con;
//     }

// });

// router.get('/logout', function (req, res) {
//     req.session.destroy();
//     con.splice(0, con.length);
//     res.render('index');
// });


module.exports = router;