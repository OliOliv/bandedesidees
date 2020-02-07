'use strict';

var db = require('./photography.db');

module.exports = {
	getPhotographyOfEvent
};

function getPhotographyOfEvent(eventName, callback) {
	db.getPhotographyOfEvent(
		eventName,
		function(res) {
			return callback({
				success: true,
				message: 'photography founded !',
				photography: res
			});
		},
		function(err) {
			return callback({
				success: false,
				photography: 'No photography found ! Try again.'
			});
		}
	);
}
