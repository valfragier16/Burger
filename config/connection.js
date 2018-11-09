// Dependencies
var mysql = require("mysql");

var connection;

// Connect with JawsDB database on our Heroku app
// 	If not found, then run locally
if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
	  host: "localhost",
	  user: "root",
	  password: "Passw0rd",
	  database: "burgers_db"
	});
}

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export our MySQL connection
module.exports = connection;