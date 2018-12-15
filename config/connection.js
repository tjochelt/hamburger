const mysql = require("mysql");
// const env = require("../.env");
const keys = require("../keys.js");
// var password = process.env.MYSQL;
require("dotenv").config();
// console.log(password);
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: process.env.MYSQL,
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
