const express = require("express");
const router = express.Router();
const eventsService = require("./events.service");

// routes
router.get("/getlastevent", getLastEvent);
router.get("/getoneevent/:eventName", getOneEvent);
router.post("/postoneevent", postOneEvent);

module.exports = router;

function getLastEvent(req, res) {
  eventsService.getLastEvent((result) => {
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
