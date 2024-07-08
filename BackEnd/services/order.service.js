const conn = require('../config/db.config');
const crypto = require("crypto");

// async function checkOrderExists(customer_id) {
//   const query = "SELECT * FROM customer_info WHERE customer_id = ?";
//   const [result] = await conn.query(query, [customer_id]);
//   return result.length > 0;
// }

async function checkCustomerExists(customer_id) {
  const query = "SELECT * FROM customer_identifier WHERE customer_id = ?";
  const [result] = await conn.query(query, [customer_id]);
  console.log(result);
  return result
}

async function checkVehicle(vehicle_id) {
  const query = "SELECT * FROM customer_vehicle_info WHERE vehicle_id = ?";
  const [result] = await conn.query(query, [vehicle_id]);
  return result
}

async function checkEmployee(employee_id) {
  const query = "SELECT * FROM employee WHERE employee_id = ?";
  const [result] = await conn.query(query, [employee_id]);
  return result
}
async function checkService(service_id) {
  const query = "SELECT * FROM common_services WHERE service_id = ?";
  const [result] = await conn.query(query, [service_id]);
  return result
}

async function createOrders(orderData) {
  try {
    const { 
      vehicle_id,
      active_order,
      customer_id, 
      employee_id, 
      order_status,
      order_total_price,
      estimated_completion_date,
      completion_date,
      additional_request,
      additional_requests_completed,
      service_id,
      service_completed
    } = orderData;
    
    const order_hash = crypto.randomUUID();

    // Check if the customer exists
    const customerExists = await checkCustomerExists(customer_id);
    if (!customerExists) {
      throw new Error(`Customer with ID ${customer_id} does not exist`);
    }

    // Check if the vehicle exists
    const vehicleExists = await checkVehicle(vehicle_id);
    if (!vehicleExists) {
      throw new Error(`Vehicle with ID ${vehicle_id} does not exist`);
    }

    // Create order
    const orderQuery = 'INSERT INTO orders (employee_id, customer_id, vehicle_id, active_order, order_hash) VALUES (?, ?, ?, ?, ?)';
    const orderResult = await conn.query(orderQuery, [employee_id, customer_id, vehicle_id, active_order, order_hash]);

    console.log("Order Result:", orderResult);

    if (!orderResult || !orderResult.insertId) {
      throw new Error('Failed to create order');
    }

    const order_id = orderResult.insertId;

    // Create order info
    const orderInfoQuery = `
      INSERT INTO order_info (
        order_id, 
        order_total_price, 
        estimated_completion_date, 
        completion_date,
        additional_request,
        additional_requests_completed
      ) VALUES (?, ?, ?, ?, ?, ?)`;
    const orderInfoResult = await conn.query(orderInfoQuery, [
      order_id,
      order_total_price,
      estimated_completion_date,
      completion_date || null,
      additional_request || null,
      additional_requests_completed || 0
    ]);

    console.log("Order Info Result:", orderInfoResult);

    if (!orderInfoResult) {
      throw new Error('Failed to create order info');
    }

    // Create order service
    const orderServiceQuery = `
      INSERT INTO order_services (
        order_id,
        service_id,
        service_completed
      ) VALUES (?, ?, ?)`;
    const orderServiceResult = await conn.query(orderServiceQuery, [order_id, service_id, service_completed]);

    console.log("Order Service Result:", orderServiceResult);

    if (!orderServiceResult) {
      throw new Error('Failed to create order service');
    }

    // Create order status
    const orderStatusQuery = `
      INSERT INTO order_status (
        order_id,
        order_status
      ) VALUES (?, ?)`;
    const orderStatusResult = await conn.query(orderStatusQuery, [order_id, order_status]);

    console.log("Order Status Result:", orderStatusResult);

    if (!orderStatusResult) {
      throw new Error('Failed to create order status');
    }

    return { message: "Order and related records created successfully", order_id };
  } catch (err) {
    console.error(err);
    throw err;
  }
}

module.exports = { createOrders, checkVehicle, checkEmployee,checkService };
