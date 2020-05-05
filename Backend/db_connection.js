const mysql = require('mysql2');

// create the connection to database
var connection = mysql.createPool({
    connectionLimit: 10,
    host: 'handshake.chf9uwuchcb3.us-east-1.rds.amazonaws.com',
    port: '3306',
    user: 'admin',
    password: 'admin#123',
    database: 'handshake',
    dateStrings: true
});


connection.query("SET FOREIGN_KEY_CHECKS=0", (err, res)=> {
    if(err) console.log("DB connection failed!!!");
    else {
        console.log("DB connection successful!!!");
    } 
});
module.exports = {connection};