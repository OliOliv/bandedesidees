"use strict";
var eventsdb = {};
var connection = require("../../helpers/connection");

//example for test on localhost = http://localhost:5000/api/events/getLastEvent
eventsdb.getLastEvent = function (successCallback, failureCallback) {
  var sqlQuery = "SELECT * FROM soirees ORDER BY nom DESC LIMIT 1";
  connection.query(sqlQuery, function (err, rows, fields, res) {
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
};

eventsdb.getOneEvent = function (eventName, successCallback, failureCallback) {
  const sqlQuery = `SELECT * FROM soirees WHERE nom = ${eventName}`;

  connection.query(sqlQuery, (err, rows, fields, res) => {
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
};

module.exports = eventsdb;
