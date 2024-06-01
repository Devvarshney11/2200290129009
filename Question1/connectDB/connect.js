const mysql = require("mysql2");

const db = {
  host: "localhost",
  user: "root",
  password: "Devvar@123",
  database: "afford_medical",
  port: "3306",
  connectionLimit: 10,
  connectTimeout: 30000,
  rowsAsArray: false,
  enableKeepAlive: true,
  multipleStatements: true,
};

const connections = mysql.createPool(db);

module.exports = connections;
