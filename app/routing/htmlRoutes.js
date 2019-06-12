var express = require("express");
var path = require("path");
var app = express();



module.exports = {
    root: app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    }),
    survey: app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    })
};