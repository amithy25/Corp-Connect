usersList = [
    {
        userID: 1,
        fname: "Dave",
        lname: "Lee",
        email: "d2d@gmail.com",
        add1: "race course lane",
        add2: "Red Fort road",
        city: "New Delhi",
        state: "New Delhi",
        zip: 560070,
        country: "USA"
    },

    {
        userID: 2,
        fname: "mark",
        lname: "spencer",
        email: "mspencer@gmail.com",
        add1: "34 lane road",
        add2: "falling leaf dr",
        city: "charlotte",
        state: "North Carolina",
        zip: 29289,
        country: "USA"
    }
]


module.exports.getUsers = function(){
    return usersList;
}


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