var express = require("express");
var bodyParser = require("body-parser");
var Sequelize = require("sequelize");
var flash = require("connect-flash");
var session = require("express-session")
var passport = require("passport");



var app = express();



var PORT = process.env.PORT || 3001;



//Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("./client/public/"));
app.set("view engine", "ejs");

var db = require("./models");

//Routes aka Controller
require("./controller/apiRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}


//Starting server  
db.sequelize.sync({ force: true }).then(function(){
    app.listen(PORT, function() {
      console.log("========================")
        console.log(
            "Listening on port " + PORT + " Visit http://localhost:" + PORT + "/"
        )
        console.log("========================")
    })
})
