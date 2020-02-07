'use strict';
var illustrationsdb = {};
var connection = require('../../helpers/connection');

//example for test on localhost = http://localhost:5000/api/events/getLastEvent

illustrationsdb.getIllustrationsOfEvent = function(eventName, successCallback, failureCallback) {
	const sqlQuery = `SELECT * FROM croquis WHERE soiree_id = ${eventName}`;

	connection.query(sqlQuery, (err, rows, fields, res) => {
		if (err) {
			failureCallback(err);
			return;
		}
		if (rows.length > 0) {
			successCallback(rows);
		} else {
			failureCallback('Illustrations not found.');
		}
	});
};

module.exports = illustrationsdb;
