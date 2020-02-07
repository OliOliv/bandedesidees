'use strict';
var speakersdb = {};
var connection = require('../../helpers/connection');

//example for test on localhost = http://localhost:5000/api/events/getLastEvent

speakersdb.getSpeakersOfEvent = function(eventName, successCallback, failureCallback) {
	const sqlQuery = `SELECT * FROM intervenants, soirees, interventions WHERE intervenants.idIntervenant = interventions.id_intervenant AND interventions.id_soiree = soirees.idSoiree AND soirees.idSoiree = ${eventName}`;

	connection.query(sqlQuery, (err, rows, fields, res) => {
		if (err) {
			failureCallback(err);
			return;
		}
		if (rows.length > 0) {
			successCallback(rows);
		} else {
			failureCallback('Speakers not found.');
		}
	});
};

module.exports = speakersdb;
