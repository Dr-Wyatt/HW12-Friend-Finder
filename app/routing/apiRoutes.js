var express = require("express");
var path = require("path");
var app = express();
const allDataOfFriends = require("../data/friends.js");
var friends = allDataOfFriends.friends;
var testObj = {
    thing1: "thing1",
    thing2: "thing2"
}



module.exports = {
    friendsData: app.get("/api/friends", function (req, res) {
            return res.json(testObj);
    }),
    addUser: app.post("/api/friends", function (req, res) {

        var newUser = req.body;
    
        console.log(newUser);
    
        friends.push(newUser);
    
        res.json(newUser);
    })
};



