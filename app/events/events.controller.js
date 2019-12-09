const express = require("express");
const router = express.Router();
const eventsService = require("./events.service");

// routes
router.get("/getlastevent", getLastEvent);


module.exports = router;

function getLastEvent(req, res) {    
    eventsService
        .getLastEvent(result => {
        result.success ? res.status(201).json(result) : res.status(401).json(result);
})}
