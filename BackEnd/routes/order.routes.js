const express = require('express');
const { createOrder,getAllOrders,getOrderById,updateOrder } = require('../controllers/order.controller');
const router = express.Router();

router.post('/api/createOrder', createOrder);

// Get all orders with optional limit, sortby, and filter by completed
router.get('/api/getAllOrders', getAllOrders);
// Get single order by ID
router.get('/api/getOrderById', getOrderById);
// Update an order
router.put('/api/updateOrder',updateOrder);






module.exports = router;
