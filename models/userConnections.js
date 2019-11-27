



// userProfile = [
//     {
//         user: {
//             userID: 1,
//             fname: "Dave",
//             lname: "Lee",
//             email: "d2d@gmail.com",
//             add1: "race course lane",
//             add2: "Red Fort road",
//             city: "New Delhi",
//             state: "New Delhi",
//             zip: 560070,
//             country: "USA"
//         },

//         userConnections:[
//             {   
//                 connection:{
//                     "connectionId": 5,
//                     "connectionName": "Niagara Falls Trip",
//                     "connectionTopic": "Outdoor and Adventure",
//                     "connectionDetails": "Are you ready for some Adventure? join us on a wild road trip to Niagara Falls.",
//                     "connectionDate": "06/7/2019",
//                     "connectionTime": "1:00 am",
//                     "connectionHost": "Doug Williams",
//                     "connectionLocation": "Freedom Park Charlotte NC"
//                 },
//             rsvp: 'no'
//         },
//         {
//             connection:{
//                 "connectionId": 4,
//                 "connectionName": "Habitual Roots and Wellness",
//                 "connectionTopic": "Outdoor and Adventure",
//                 "connectionDetails": "Let us explore the beautiful nature and find the secret weapon to fight diseases using natural plant roots.",
//                 "connectionDate": "27/09/2019",
//                 "connectionTime": "6:00 am",
//                 "connectionHost": "Ben Roberts",
//                 "connectionLocation": "Freedom Park Charlotte NC"
//             },
//             rsvp: 'yes'
//         }
//      ]

//     }
// ]


// module.exports.getUserConnections = function(Id){
//      for(let i=0;i<userProfile.length;i++){
//        if(userProfile[i].user.userID == Id){
//            return userProfile[i];
//        }
//      }
// }

// module.exports.getConnection = function(id){

//    userProfile[0].userConnections.forEach(element => {
//        //console.log(element);
//        if(element.connection.connectionId==id){
//            console.log(element)
//            return element;
//        }
//    });
// }


// //console.log(userp.userp[0].userConnections[1].connection)






