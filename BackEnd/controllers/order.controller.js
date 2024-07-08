const orderService = require('../services/order.service');

async function createOrder(req, res) {
  try {
    const orderData = req.body;

    // Validate the presence of required fields in the request body
    const requiredFields = [
      'customer_id',
      'employee_id',
      
      'order_status',
      'order_total_price',
      'estimated_completion_date',
      'service_id',
      'service_completed'
    ];

    for (const field of requiredFields) {
      if (orderData[field] === undefined) {
        return res.status(400).json({ error: `Field ${field} is required` });
      }
    }

    // Pass the validated data to the service
    const result = await orderService.createOrders(orderData);
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while creating the order' });
  }
}

module.exports = { createOrder };
