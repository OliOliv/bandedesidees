'use strict'

var db = require('./books.db');

module.exports = {
    getBooksOfEvent
};

function getBooksOfEvent(eventName, callback) {    
    db.getBooksOfEvent(
      eventName,
      function(res) {
        return callback({
          success: true,
          message: 'Books found !',
          books: res
        });
      },
      function(err) {
        return callback({
          success: false,
          message: "No books found ! Try again."
        });
      }
    );
  }