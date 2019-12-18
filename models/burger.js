var orm = require("../config/orm");

var burger = {
    all: function() {
      return orm.all("burgers");
    },
    create: function() {
      return orm.create("burgers", )
    },
    update: function(objColVals, condition) {
      return orm.update("burgers", objColVals, condition);
    }
};

module.exports = burger;