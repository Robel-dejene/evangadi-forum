const mysql2 = require("mysql2");
const { createConnection, createPool } = require("mysql2");

const dbConnection = mysql2.createPool({
	user: "evangadi-admin",
	password: "121212",
	host: "localhost",
	database: "evangadi-forum",
	connectionLimit: 10,
});

// dbConnection.execute("select 'test' ", (err, result) => {
// 	if (err) {
// 		console.log(err.message);
// 	} else {
// 		console.log(result);
// 	}
// });

module.exports = dbConnection.promise();
