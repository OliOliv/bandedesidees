"use strict";

var db = require("./events.db");

module.exports = {
  getLastEvent,
  getOneEvent,
  postOneEvent,
  getEvents,
  updateEvent,
  deleteEvent,
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

function getEvents(callback) {
  db.getEvents(
    function (res) {
      return callback({
        success: true,
        message: "Successfully get all events.",
        allEvents: res,
      });
    },
    function (err) {
      return callback({
        success: false,
        message: "No events.",
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

function updateEvent(event, callback) {
  db.updateEvent(
    event,
    function (res) {
      return callback({
        success: true,
        message: "Evenement modifié !",
        event: res,
      });
    },
    function (err) {
      return callback({
        success: false,
        message: "Impossible de modifier l'événemnt",
      });
    }
  );
}

function deleteEvent(event, callback) {
  console.log("service", event);
  db.deleteEvent(
    event,
    function (res) {
      return callback({
        success: true,
        message: "Soirée supprimée !",
        event: res,
      });
    },
    function (err) {
      return callback({
        success: false,
        message: "Impossible de supprimer cette soirée.",
      });
    }
  );
}
