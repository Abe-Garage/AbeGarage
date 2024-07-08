// * to collect the routes

const express = require('express');


// call router method from express
const router = express.Router()

// *  Import the Router files

//  Import Install router
const installRouter = require('./install.routes')
// Import the login routes 
const loginRoutes = require("./login.routes");
//  Import service router
const serviceRoutes = require('./service.routes')
const customerRoutes = require('./customer.routes')
const vehicleRoutes = require('./vehicle.routes')
const employeeRoutes = require('./employee.routes')
const OrderRoutes =require('./order.routes')



// =========================

// * Use the route

// ` add the install router to the main router
router.use( installRouter)

// Add the service routes to the main router
router.use(serviceRoutes);
// Add the login routes to the main router
router.use(loginRoutes);
// add the customer routes to the main router
router.use(customerRoutes);
// add the vehicle routes to the main router
router.use(OrderRoutes);

// Add the vehicle routes to the main router
router.use(vehicleRoutes);
router.use(employeeRoutes);




module.exports = router;


