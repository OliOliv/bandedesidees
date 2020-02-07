'use strict';

var db = require('./illustrations.db');

module.exports = {
	getIllustrationsOfEvent
};

function getIllustrationsOfEvent(eventName, callback) {
	db.getIllustrationsOfEvent(
		eventName,
		function(res) {
			return callback({
				success: true,
				message: 'illustrations founded !',
				illustrations: res
			});
		},
		function(err) {
			return callback({
				success: false,
				illustrations: 'No illustrations found ! Try again.'
			});
		}
	);
}
