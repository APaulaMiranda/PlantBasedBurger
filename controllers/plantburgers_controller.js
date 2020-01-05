var express = require("express")

var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function (req, res) {
    burger.getPlantBurgers(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});


router.get("/api/plantBurgers", function (req, res) {
    burger.getPlantBurgers(function (result) { res.json(result) });
});

router.post("/api/plantBurgers", function (req, res) {
    console.log(req.body)
    burger.addPlantBurger(req.body, function (result) { res.json(result) });
});

router.put("/api/plantBurgers/:id", function (req, res) {
    var burgeryummy = req.body;
    burgeryummy.id = parseInt(req.params.id);
    burgeryummy.devoured = req.body.devoured === "true"
    console.log(burgeryummy)
    burger.editPlantBurger(burgeryummy, function (result) { res.json(result) });
});

router.get("/", function (req, res) {
    // Handlebars requires an object to be sent to the dog handlebars file.
    // Lucky for us, animals[0] is an object!

    // 1. send the dog object from the animals array to the dog handlebars file.
    res.render("index");
});

module.exports = router;