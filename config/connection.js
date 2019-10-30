var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Ja222320!",
  database: "burger"
});

const connectionPromise = new Promise((resolve, reject) => {
    connection.connect(function (err) {
        if (err) {
            return reject(err);
        };
        resolve(connection);
    });
});

function getConnection() {
    return connectionPromise;
}

module.exports = {
    getConnection
};