var connection = require("./connection.js");

var tableName = "plant_burgers";

var orm = {
    getPlantBurgers: function (callback) {
        var s = "SELECT * FROM " + tableName;

        connection.query(s, function (err, result) {

            callback(result);

        });
    },
    addPlantBurger: function (plantBurger, callback) {
        var s = "INSERT INTO " + tableName + " (plant_burger_name, devoured) VALUES (?,?)";
        plantBurger.devoured = false;
        console.log(plantBurger)
        connection.query(s, [
            plantBurger.name, plantBurger.devoured
        ], function (err, result) {

            callback(result);

        });
    },

    editPlantBurger: function (plantBurger, callback) {
        var s = "UPDATE " + tableName + " SET devoured=? WHERE id=?";

        connection.query(s, [
            plantBurger.devoured, plantBurger.id
        ], function (err, result) {

            callback(result);

        });
    }
};

module.exports = orm;