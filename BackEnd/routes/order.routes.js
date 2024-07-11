const express = require("express");
const router = express.Router();
const orderController = require("../controllers/order.controller");

// Route to create a new order
router.post("/order", orderController.createOrder);

// Route to get all orders
router.get("/orders", orderController.getAllOrders);

// Route to get an order by ID
router.get("/order/:id", orderController.getOrderById);

// Route to update an order
router.put("/order/:id", orderController.updateOrder);

module.exports = router;
