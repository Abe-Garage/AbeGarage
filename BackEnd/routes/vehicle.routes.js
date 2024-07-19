const express = require("express");
const vehicleController = require("../controllers/vehicle.controller");
const router = express.Router();

// import the authMiddleware
const {
    verifyToken,
    isAdmin,
  } = require("../middlewares/auth.middleware");

router.get('/api/vehicle/:id',[verifyToken, isAdmin], vehicleController.singleVehicle)
router.post('/api/vehicle',[verifyToken, isAdmin],vehicleController.addVehicle)
router.put('/api/vehicle',[verifyToken, isAdmin],vehicleController.updateVehicle)
router.get('/api/vehicles/:customer_id',[verifyToken, isAdmin],vehicleController.vehiclePerCustomer)

//router.delete('/api/deleteVehicle/:vehicle_id', vehicleController.deleteVehicle);

router.get('/api/vehicle_order/:vehicle_id',[verifyToken, isAdmin],vehicleController.hasServiceOrder)


module.exports = router