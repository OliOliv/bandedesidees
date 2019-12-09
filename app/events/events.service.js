'use strict'

var config = require('../../config/main');
var db = require('./events.db');

module.exports = {
    getLastEvent,
};


function getLastEvent(callback) {
        // Attempt to save the user
        db.getLastEvent(function (res) {
               
            return callback({ success: true, message: 'Successfully get las event.', events: res });
        }, function (err) {
            return callback({ success: false, message: 'No last event.' });
        });
}

