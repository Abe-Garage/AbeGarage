const express = require("express");
const router = express.Router();
const serviceController = require("../controllers/service.controller");

// POST request to add a service
router.post("/api/service", serviceController.createService);
router.put('/api/service/:service_id', serviceController.updateService);
// router.delete('/api/service/:service_id', serviceController.deleteService);
// router.get('/api/service/:service_id', serviceController.getService);
router.get('/api/services', serviceController.getAllServices);

module.exports = router;
