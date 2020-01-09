const express = require("express");
const router = express.Router();
const editionsService = require("./editions.service");

// routes
router.get("/getEditions", getEditions);
router.get("/getOneEdition/:editionId", getOneEdition);



module.exports = router;

function getEditions(req, res) {    
    editionsService
        .getEditions(result => {
        result.success ? 
        res.status(201).json(result)
        : res.status(401).json(result);
})}


function getOneEdition(req, res) {
    editionsService.getOneEdition(req.params.editionId, result => {
      result.success
        ? res.status(201).json(result)
        : res.status(401).json(result);
    });
  }
  
