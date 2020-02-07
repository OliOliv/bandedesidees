'use strict'

var db = require('./events.db');

module.exports = {
    getLastEvent,
    getOneEvent
};


function getLastEvent(callback) {
        // Attempt to save the user
        db.getLastEvent(function (res) {
            return callback({ 
              success: true,
               message: 'Successfully get last event.',
                lastEvent: res });
            
        }, function (err) {
            return callback({
               success: false,
               message: 'No last event.' });
        });
}

function getOneEvent(eventName, callback) {    
    db.getOneEvent(
      eventName,
      function(res) {
        return callback({
          success: true,
          message: 'Event found !',
          event: res
        });
      },
      function(err) {
        return callback({
          success: false,
          message: "No event found ! Try again."
        });
      }
    );
  }