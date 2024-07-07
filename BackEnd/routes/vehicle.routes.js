const express = require("express");
const vehicleController = require("../controllers/vehicle.controller");
const router = express.Router();




router.get('/api/vehicle/:id', vehicleController.singleVehicle)
router.post('/api/vehicle',vehicleController.addVehicle)
router.put('/api/vehicle',vehicleController.updateVehicle)
router.get('/api/vehicles/:customer_id',vehicleController.vehiclePerCustomer)


module.exports = router