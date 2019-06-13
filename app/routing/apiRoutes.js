
const allDataOfFriends = require("../data/friends.js");

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

        var diffNum = 0;
        var diffArray = [];
        var totalDiffArray = [];

        for (var i = 0; i < allDataOfFriends.friends.length; i++) {
            for (var j = 0; j < newUser.choices.length; j++) {
                diffNum = Math.abs(newUser.choices[j] - allDataOfFriends.friends[i].choices[j]);
                diffArray.push(diffNum);
                var totalDiff = diffArray.reduce((a, b) => a + b, 0)
            }
            totalDiffArray.push(totalDiff);
            diffArray.length = 0;
        }
        var finalDiff = Math.min(...totalDiffArray);
        var indexOfMin = totalDiffArray.indexOf(finalDiff);
        res.json(allDataOfFriends.friends[indexOfMin]);
    
    });
    
};



