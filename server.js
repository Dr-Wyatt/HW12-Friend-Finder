var express = require("express");
var path = require("path");
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
var PORT = process.env.PORT || 3000;

const htmlRoutes = require("./app/routing/htmlRoutes.js");
// const apiRoutes = require("./app/routing/apiRoutes.js");
let mainRoute = htmlRoutes.root;
let surveyRoute = htmlRoutes.survey;
// let allDataRoute = apiRoutes.friendsData;
// let addUserRoute = apiRoutes.addUser;


app.use("/", mainRoute);
app.use("/survey", surveyRoute);
// app.use("/api/friends", allDataRoute);
// app.use("/api/friends", addUserRoute);

var friends = [
    {
        name: "Daniel",
        photo: "Placeholder",
        choices: [1, 2, 4, 5, 1, 2, 3, 3, 2, 1]
    }
]

app.get("/api/friends", function (req, res) {
    return res.json(friends);
});

app.post("/api/friends", function (req, res) {
    var newUser = req.body;
    console.log(newUser);
    friends.push(newUser);
    res.json(newUser);
});


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});


