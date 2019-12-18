var connection = require("./connection");

function printQMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    arr.push(key + "=" + ob[key]);
  }

  return arr.toString();
}

var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    console.log(queryString);

    connection.query(queryString, function(err, res) {
      if(err){
        return err
      }
      cb(res);
    });
  },

  insertOne: function(table, cols, vals) {
    var queryString = "INSERT INTO " + table;

    queryString += " (" + cols.toString() + ") ";
    queryString += "VALUES (" + printQMarks(vals.length) + ")";

    console.log(queryString)
    return connection.query(queryString, vals)  
  },
   
  updateOne: function(table, object, condition) {
    var queryString = "UPDATE " + table;
  
    queryString += " SET ";
    queryString += objToSql(object);
    queryString += " WHERE ";
    queryString += condition;
  
    console.log(queryString);
    return connection.query(queryString)
  }
};

module.exports = orm;