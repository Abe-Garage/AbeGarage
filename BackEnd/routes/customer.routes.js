// import the express module
const express = require('express');
// call the router method from express to create routes
const router = express.Router();
// import the customer controller
const customerController = require('../controllers/customer.controller');
// create a route to handle the custpmer request on get
router.get('/customers', customerController.customers);
// export the router
module.exports = router;
