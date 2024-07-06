const express = require("express");
const router = express.Router();
const serviceController = require("../controllers/service.controller");

// POST request to add a service
router.post("/api/add-service", serviceController.createService);



module.exports = router;
