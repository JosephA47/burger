var orm = require("../config/orm");

var burger = {
    selectAll: function(cb) {
      return orm.selectAll("burgers", function(res){
        cb(res)
      });
    },
    insertOne: function(name, cb) {
      return orm.insertOne("burgers", ["burgerName", "devoured"], [name,false], function(res){
        cb(res)
      })
    },
    updateOne: function(objColVals, condition, cb) {
      return orm.updateOne("burgers", objColVals, condition, function(res){
        cb(res)
      });
    }
};

module.exports = burger;