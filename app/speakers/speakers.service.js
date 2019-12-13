'use strict'

var db = require('./speakers.db');

module.exports = {
  getSpeakersOfEvent
};



function getSpeakersOfEvent(eventName, callback) {    
    db.getSpeakersOfEvent(
      eventName,
      function(res) {
        return callback({
          success: true,
          message: 'Speakers founded !',
         speakers: res
        });
      },
      function(err) {
        return callback({
          success: false,
          speaker: "No speaker found ! Try again."
        });
      }
    );
  }