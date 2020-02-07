const express = require('express');
const router = express.Router();
const photographyService = require('./photography.service');

// routes
router.get('/getphotographyofevent/:eventName', getPhotographyOfEvent);

module.exports = router;

function getPhotographyOfEvent(req, res) {
	photographyService.getPhotographyOfEvent(req.params.eventName, (result) => {
		result.success ? res.status(201).json(result) : res.status(401).json(result);
	});
}
