"use strict";
var mysql = require("mysql");
var config = require("../../config/main");
var connection = {};

var connection = mysql.createConnection({
    host: config.database_host,
    user: config.database_user,
    password: config.database_password,
    database: config.database_name
  });
  
  //Connecting to database
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
  
    console.log("connected as id " + connection.threadId);
  });

  module.exports = connection;