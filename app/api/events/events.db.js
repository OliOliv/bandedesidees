"use strict";
var eventsdb = {};
var connection = require("../../helpers/connection");

//example for test on localhost = http://localhost:5000/api/events/getLastEvent

eventsdb.getEvents = function (successCallback, failureCallback) {
  const sqlQuery = "SELECT * FROM soirees ORDER BY nom DESC";
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
  const sqlQuery = `SELECT * FROM soirees WHERE nom = ?`;

  connection.query(sqlQuery, [eventName], (err, rows, fields, res) => {
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

eventsdb.postOneEvent = function (event, successCallback, failureCallback) {
  const sqlQuery =
    "INSERT INTO soirees SET idSoiree = ?, date_soiree = ?, nom = ?, description = ?, image = ?, lieu = ?, heure = ? ";

  connection.query(
    sqlQuery,
    [
      null,
      event.date,
      event.nom,
      event.description,
      event.image,
      event.lieu,
      event.heure,
    ],
    function (err, rows, fields, res) {
      if (err) {
        failureCallback(err);
        return;
      }
      successCallback();
    }
  );
};

eventsdb.updateEvent = (data, successCallback, failureCallback) => {
  const sql =
    "UPDATE soirees SET nom = ?, description = ?, image = ?, lieu = ?, heure = ? WHERE idSoiree = ?";
  const payload = [
    data.nom,
    data.description,
    data.image,
    data.lieu,
    data.heure,
    data.idSoiree,
  ];

  connection.query(sql, payload, function (err, rows, fields, res) {
    if (err) {
      failureCallback(err);
      return;
    }
    successCallback();
  });
};

eventsdb.deleteEvent = function (idSoiree, successCallback, failureCallback) {
  const sqlQuery = "DELETE FROM soirees WHERE idSoiree = ?";

  connection.query(sqlQuery, [idSoiree], (err, rows, fields, res) => {
    if (err) {
      failureCallback(err);
      return;
    }
    successCallback();
  });
};
module.exports = eventsdb;
