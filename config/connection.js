var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "Ja222320!",
        database: "burger"
    });
}


connection.connect(function (err) {
    if (err) {
        return err;
    };
    console.log("Connected")
});




module.exports = connection;