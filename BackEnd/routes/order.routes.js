const express = require('express');
const { createOrder } = require('../controllers/order.controller');
const router = express.Router();

router.post('/api/createOrder', createOrder);

module.exports = router;
