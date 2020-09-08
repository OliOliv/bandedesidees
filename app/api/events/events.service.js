"use strict";

var db = require("./events.db");

module.exports = {
  getLastEvent,
  getOneEvent,
  postOneEvent,
};

function getLastEvent(callback) {
  db.getLastEvent(
    function (res) {
      return callback({
        success: true,
        message: "Successfully get last event.",
        lastEvent: res,
      });
    },
    function (err) {
      return callback({
        success: false,
        message: "No last event.",
      });
    }
  );
}

function getOneEvent(eventName, callback) {
  db.getOneEvent(
    eventName,
    function (res) {
      return callback({
        success: true,
        message: "Event found !",
        event: res,
      });
    },
    function (err) {
      return callback({
        success: false,
        message: "No event found ! Try again.",
      });
    }
  );
}

function postOneEvent(event, callback) {
  db.postOneEvent(
    event,
    function (res) {
      return callback({
        success: true,
        message: "Evenement créé !",
        event: res,
      });
    },
    function (err) {
      return callback({
        success: false,
        message: "Impossible de créer l'événemnt",
      });
    }
  );
}
