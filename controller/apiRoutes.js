var db = require("../models");
// var bcrypt = require("bcryptjs")
// var passport = require("passport")

module.exports = function(app) {

    //Get All Stories
    app.get("/stories/all", function(req,res) {
        db.Story.findAll({}).then(function(results) {
            res.json(results)
        })
    })

    //Posting a Story
    app.post("/stories/new", function(req,res) {
        db.Story.create({
            User: "John",
            Story: "One time I saw johnny talk to his friend at the bar and slipped"
        }).then(function(results) {
            res.json(results)
        })
    })

}