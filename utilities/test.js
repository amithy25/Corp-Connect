// const con = require('./connectionDB')
// const data  = con.getConnections()
// data.forEach(event => {
//     if(event.connectionTopic === "Art"){
//         console.log(JSON.stringify(event)+"\n")
//     }
// });
// // //console.log(data.length)
// // // const ids = [];
// // // data.forEach(event => {
// // //    // console.log(event.connectionId)
// // //     ids.push(event.connectionId)
// // // });

// // // console.log(ids)

// // const topics = con.topics
// // console.log(topics)



const users = require('./userDB');
console.log(users.getUsers()[1])