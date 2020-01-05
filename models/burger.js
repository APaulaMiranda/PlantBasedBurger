var orm = require("../config/orm.js");



var burger = {

    getPlantBurgers: function (callback) {
        orm.getPlantBurgers(function (result) { callback(result) });
    },
    addPlantBurger: function (plantBurger, callback) {
        orm.addPlantBurger(plantBurger, function (result) { callback(result) });
    },
    editPlantBurger: function (plantBurger, callback) {
        orm.editPlantBurger(plantBurger, function (result) { callback(result) });
    },
}



module.exports = burger;