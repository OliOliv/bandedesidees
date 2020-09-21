"use strict";
var booksdb = {};
var connection = require("../../helpers/connection");

booksdb.getBooksOfEvent = function (
  eventName,
  successCallback,
  failureCallback
) {
  const sqlQuery = `SELECT * FROM livres, editeurs WHERE livres.edition = editeurs.idEditeur AND livres.soiree_id = ${eventName}`;

  connection.query(sqlQuery, (err, rows, fields, res) => {
    if (err) {
      failureCallback(err);
      return;
    }
    if (rows.length > 0) {
      successCallback(rows);
    } else {
      failureCallback("Books not found.");
    }
  });
};

module.exports = booksdb;
