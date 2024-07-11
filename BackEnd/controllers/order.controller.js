const orderService = require("../services/order.service");

async function createOrder(req, res) {
  try {
    const orderData = req.body;

    // Validate the presence of required fields in the request body
    const requiredFields = [
      'customer_id',
      'employee_id',
      'vehicle_id',
      // 'order_description',
      // 'estimated_completion_date',
      'order_services'
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
    res
      .status(500)
      .json({ error: "An error occurred while creating the order" });
  }
}
// Get all orders
async function getAllOrders(req, res) {
  try {
    const { limit, sortby, completed } = req.query;
    const orders = await orderService.getAllOrders({
      limit,
      sortby,
      completed,
    });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Get single order by ID
async function getOrderById(req, res) {
  try {
    const { id } = req.params;
    const order = await orderService.getOrderById(id);
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while retrieving the order'  });
  }
}

// Update an order
async function updateOrder(req, res) {
  try {
    const { id } = req.params;
    const orderData = req.body;

    const result = await orderService.updateOrder(id, orderData);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating the order' });
  }
}

module.exports = { createOrder, getAllOrders, getOrderById, updateOrder };
