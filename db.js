// Creating connection with mysql
const mysql = require("mysql2/promise")

var connection = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : 'Admin@123',
    database : 'employee_db'
  });

// Export the module connection
module.exports = connection