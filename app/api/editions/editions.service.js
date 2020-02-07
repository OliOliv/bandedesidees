'use strict'

var db = require('./editions.db');

module.exports = {
    getEditions,
    getOneEdition
};

function getEditions(callback) {
  db.getEditions(function (res) {
      return callback({ 
        success: true,
         message: 'Successfully all editions.',
          lastEvent: res });
      
  }, function (err) {
      return callback({
         success: false,
         message: 'No editions.' });
  });
}

function getOneEdition(editionId, callback) {    
    db.getOneedition(
      editionId,
      function(res) {
        return callback({
          success: true,
          message: 'Edition found !',
          edition: res
        });
      },
      function(err) {
        return callback({
          success: false,
          message: "No edition found ! Try again."
        });
      }
    );



  }