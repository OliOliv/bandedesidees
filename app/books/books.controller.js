const express = require("express");
const router = express.Router();
const booksService = require("./books.service");

// routes
router.get("/getBooksOfEvent/:eventName", getBooksOfEvent);

module.exports = router;

function getBooksOfEvent(req, res) {
    booksService.getBooksOfEvent(req.params.eventName, result => {
 
      result.success
        ? res.status(201).json(result)
        : res.status(401).json(result);
    });
  }
  
