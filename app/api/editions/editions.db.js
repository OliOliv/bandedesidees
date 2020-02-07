'use strict';
var editionsdb = {};
var connection = require('../../helpers/connection');

//example for test on localhost = http://localhost:5000/api/events/getLastEvent
editionsdb.getEditions = function(successCallback, failureCallback) {
	var sqlQuery = 'SELECT * FROM editeurs ORDER BY nom ASC';
	connection.query(sqlQuery, function(err, rows, fields, res) {
		if (err) {
			failureCallback(err);
			return;
		}
		if (rows.length > 0) {
			successCallback(rows);
		} else {
			failureCallback('editions not found.');
		}
	});
};

editionsdb.getOneEdition = function(editionId, successCallback, failureCallback) {
	const sqlQuery = `SELECT * FROM editeurs WHERE idEditeur = ${editionId}`;

	connection.query(sqlQuery, (err, rows, fields, res) => {
		if (err) {
			failureCallback(err);
			return;
		}
		if (rows.length > 0) {
			successCallback(rows);
		} else {
			failureCallback('event not found.');
		}
	});
};

module.exports = editionsdb;
