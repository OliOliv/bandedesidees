const express = require("express");
const router = express.Router();
const speakersService = require("./speakers.service");

// routes
router.get("/getspeakersofevent/:eventName", getSpeakersOfEvent);



module.exports = router;

function getSpeakersOfEvent(req, res) {
    speakersService.getSpeakersOfEvent(req.params.eventName, result => {
      result.success
        ? res.status(201).json(result)
        : res.status(401).json(result);
    });
  }
  
