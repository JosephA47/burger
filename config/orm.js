var connection = require("./connection");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

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
  selectAll: function(tableInput) {
    var queryString = "SELECT * FROM " + tableInput;
    console.log(queryString);
    return connection.query(queryString);
  },

  insertOne: function(table, object, vals) {
    var queryString = "INSERT INTO " + table;

    queryString += '(' + objToSql(object) + ')';
    queryString += ' VALUES (' + printQuestionMarks(vals) + ')'

    return connection.query(queryString);
  },
   
  updateOne: function(table, object, condition) {
    var queryString = "UPDATE " + table;
  
    queryString += " SET ";
    queryString += objToSql(object);
    queryString += " WHERE ";
    queryString += condition;
  
    console.log(queryString);
    return connection.query(queryString);
  }
};

module.exports = orm;