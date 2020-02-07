'use strict';
var photographydb = {};
var connection = require('../../helpers/connection');

//example for test on localhost = http://localhost:5000/api/events/getLastEvent

photographydb.getPhotographyOfEvent = function(eventName, successCallback, failureCallback) {
	const sqlQuery = `SELECT * FROM photos WHERE soiree_id = ${eventName}`;

	connection.query(sqlQuery, (err, rows, fields, res) => {
		if (err) {
			failureCallback(err);
			return;
		}
		if (rows.length > 0) {
			successCallback(rows);
		} else {
			failureCallback('Photography not found.');
		}
	});
};

module.exports = photographydb;
