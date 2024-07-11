const express = require("express");
const orderController = require("../controllers/order.controller");
const router = express.Router();

// Route to create a new order
router.post("api/orders", orderController.createOrder);

// Route to get all orders
router.get("api/orders", orderController.getAllOrders);

// Route to get an order by ID
router.get("api/order/:id", orderController.getOrderById);

// Route to update an order
router.put("api/order/:id", orderController.updateOrder);

module.exports = router;
