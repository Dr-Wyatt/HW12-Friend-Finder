var express = require("express");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var friends = [
    {
        name: "Daniel",
        photo: "Placeholder",
        choices: [1, 2, 4, 5, 1, 2, 3, 3, 2, 1]
    }
]
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

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


