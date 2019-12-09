"use strict";
var eventsdb = {};
var connection = require('../helpers/connection')

eventsdb.getLastEvent = function(successCallback, failureCallback) {
  var sqlQuery = "SELECT * FROM soirees ORDER BY idSoiree DESC LIMIT 1";
  connection.query(sqlQuery, function(err, rows, fields, res) {
  
    if (err) {
      
      failureCallback(err);
      return;
    }
    if (rows.length > 0) {
          
      
      successCallback(rows);
    } else {
      failureCallback("event not found.");
    }
  });
}
module.exports = eventsdb;
