var connection = require("./promisify");

function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    var value = ob[key];
    
    if (Object.hasOwnProperty.call(ob, key)) {
      
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
};

var orm = {
  all: function(tableInput) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    console.log(queryString);
    return connection.query(queryString);
  },
   
  update: function(table, objColVals, condition) {
    var queryString = "UPDATE " + table;
  
    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;
  
    console.log(queryString);
    return connection.query(queryString);
  }
};

module.exports = orm;