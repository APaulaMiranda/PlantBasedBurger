var express = require("express");
var exphbs = require("express-handlebars");

const dotenv = require("dotenv");
dotenv.config();

var app = express();

app.use(express.static("public"));

var PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//app.get("/", function (req, res) {
// Handlebars requires an object to be sent to the dog handlebars file.
// Lucky for us, animals[0] is an object!

// 1. send the dog object from the animals array to the dog handlebars file.
//    res.render("index");
//});

var routes = require("./controllers/plantburgers_controller.js");

app.use(routes);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});