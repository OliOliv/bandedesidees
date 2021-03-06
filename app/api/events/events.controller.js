const express = require("express");
const router = express.Router();
const eventsService = require("./events.service");
const security = require("../../../middlewares/security");

// routes
router.get("/getlastevent", getLastEvent);
router.get("/getoneevent/:eventName", getOneEvent);
router.post("/postoneevent", security.checkJWT, postOneEvent);
router.get("/getevents", getEvents);
router.put("/updateevent", security.checkJWT, updateEvent);
router.delete("/deleteevent/:eventId", security.checkJWT, deleteEvent);

module.exports = router;

function getLastEvent(req, res) {
  eventsService.getLastEvent((result) => {
    result.success
      ? res.status(201).json(result)
      : res.status(401).json(result);
  });
}

function getEvents(req, res) {
  eventsService.getEvents((result) => {
    result.success
      ? res.status(201).json(result)
      : res.status(401).json(result);
  });
}

function getOneEvent(req, res) {
  eventsService.getOneEvent(req.params.eventName, (result) => {
    result.success
      ? res.status(201).json(result)
      : res.status(401).json(result);
  });
}

function postOneEvent(req, res) {
  eventsService.postOneEvent(req.body, (result) => {
    result.success
      ? res.status(201).json(result)
      : res.status(401).json(result);
  });
}

function updateEvent(req, res) {
  eventsService.updateEvent(req.body, (result) => {
    result.success
      ? res.status(201).json(result)
      : res.status(401).json(result);
  });
}

function deleteEvent(req, res) {
  eventsService.deleteEvent(req.params.eventId, (result) => {
    result.success
      ? res.status(201).json(result)
      : res.status(401).json(result);
  });
}
