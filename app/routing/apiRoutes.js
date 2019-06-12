
const allDataOfFriends = require("../data/friends.js");
console.log(allDataOfFriends);

module.exports = function(app){
 
    app.get("/api/friends", function (req, res) {
        return res.json(allDataOfFriends);
    });
    
    app.post("/api/friends", function (req, res) {
        var newUser = req.body;
    
        var newUserChoices = newUser.choices;
        var userResult = newUserChoices.map(function (x) {
            return parseInt(x, 10);
        });
    
        console.log(userResult);
        var diffNum = 0;
        var diffArray = [];
        var totalDiffArray = [];
        var finalDiffArray =[];
    
    
        console.log(newUser);
        var newUserScore = userResult.reduce((a, b) => a + b, 0);
        console.log("newUserScore", newUserScore);
        for (var i = 0; i < allDataOfFriends.friends.length; i++) {
    
            console.log("Here is the Loop");
            console.log(newUser.name);
            console.log(newUser.photo);
            for (var j = 0; j < newUser.choices.length; j++) {
                // console.log(newUser.choices[j]);
                diffNum = Math.abs(newUser.choices[j] - allDataOfFriends.friends[i].choices[j]);
                diffArray.push(diffNum);
                console.log(diffArray);
                var totalDiff = diffArray.reduce((a, b) => a + b, 0)
                console.log(totalDiff);
            }
            totalDiffArray.push(totalDiff);
            diffArray.length = 0;
            console.log("Total Diff Array: ", totalDiffArray);
        }
        var finalDiff = Math.min(...totalDiffArray);
        console.log(finalDiff);
        var indexOfMin = totalDiffArray.indexOf(finalDiff);
        console.log(allDataOfFriends.friends[indexOfMin]);
        // friends.push(newUser);
        res.json(allDataOfFriends.friends[indexOfMin]);
    
    });
    
};



