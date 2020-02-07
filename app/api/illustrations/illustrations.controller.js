const express = require('express');
const router = express.Router();
const illustrationsService = require('./illustrations.service');

// routes
router.get('/getillustrationsofevent/:eventName', getIllustrationsOfEvent);

module.exports = router;

function getIllustrationsOfEvent(req, res) {
	illustrationsService.getIllustrationsOfEvent(req.params.eventName, (result) => {
		result.success ? res.status(201).json(result) : res.status(401).json(result);
	});
}
