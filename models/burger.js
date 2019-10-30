var orm = require("../config/orm");

var burger = {
    all: function(cb) {
      return orm.all("burgers");
    },
    update: function(objColVals, condition, cb) {
      return orm.update("burgers", objColVals, condition);
    }
};

module.exports = burger;