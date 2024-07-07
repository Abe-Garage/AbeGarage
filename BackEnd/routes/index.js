// * to collect the routes

const express = require('express');


// call router method from express
const router = express.Router()

// *  Import the Router files

//  Import Install router
const installRouter = require('./install.routes')

//  Import service router
const serviceRoutes = require('./service.routes')
const vehicleRoutes = require('./vehicle.routes')
const employeeRoute = require('./employee.routes')


// =========================

// * Use the route

// ` add the install router to the main router
router.use( installRouter)

// Add the service routes to the main router
router.use(serviceRoutes);

// Add the vehicle routes to the main router
router.use(vehicleRoutes);
router.use(employeeRoute);




module.exports = router;


