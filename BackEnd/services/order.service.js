const conn = require("../config/db.config");
const crypto = require("crypto");

async function checkCustomerExists(customer_id) {
  const query = "SELECT * FROM customer_identifier WHERE customer_id = ?";
  const [result] = await conn.query(query, [customer_id]);
  console.log(`Query result for customer_id ${customer_id}:`, result);
  return Array.isArray(result) && result.length > 0;
}

async function checkVehicle(vehicle_id) {
  const query = "SELECT * FROM customer_vehicle_info WHERE vehicle_id = ?";
  const [result] = await conn.query(query, [vehicle_id]);
  return Array.isArray(result) && result.length > 0;
}

async function checkEmployee(employee_id) {
  const query = "SELECT * FROM employee WHERE employee_id = ?";
  const [result] = await conn.query(query, [employee_id]);
  return Array.isArray(result) && result.length > 0;
}

async function checkService(service_id) {
  const query = "SELECT * FROM common_services WHERE service_id = ?";
  const [result] = await conn.query(query, [service_id]);
  return Array.isArray(result) && result.length > 0;
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
      completion_date,
      additional_request,
      additional_requests_completed,
     
      order_services,
      estimated_completion_date
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
    // Check if employee exists
    const employeeExists = await checkEmployee(employee_id);
    if (!employeeExists) {
      throw new Error(`Employee with ID ${employee_id} does not exist`);
    }

    // Create order
    const orderQuery = `
      INSERT INTO orders (
        employee_id, customer_id, vehicle_id, active_order, order_hash
      ) VALUES (?, ?, ?, ?, ?)
    `;
    const orderResult = await conn.query(orderQuery, [
      employee_id,
      customer_id,
      vehicle_id,
      active_order,
      order_hash,
    ]);

    if (!orderResult || !orderResult.insertId) {
      throw new Error("Failed to create order");
    }
    console.log("Order Result:", orderResult);

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
      estimated_completion_date || null,
      completion_date || null,
      additional_request || null,
      additional_requests_completed || 0,
    ]);

    console.log("Order Info Result:", orderInfoResult);

    if (!orderInfoResult) {
      throw new Error("Failed to create order info");
    }

    // Create order services
    const orderServiceQuery = `
      INSERT INTO order_services (
        order_id,
        service_id,
        service_completed
      ) VALUES (?, ?, ?)`;
    for (const service of order_services) {
      const serviceCompletedValue = service.service_completed ? 1 : 0;
      const [orderServiceResult] = await conn.query(orderServiceQuery, [
        order_id,
        service.service_id,
        serviceCompletedValue,
      ]);
      if (!orderServiceResult) {
        throw new Error("Failed to create order service");
      }
    }

    // Create order status
    const orderStatusQuery = `
      INSERT INTO order_status (
        order_id,
        order_status
      ) VALUES (?, ?)`;
    const orderStatusResult = await conn.query(orderStatusQuery, [
      order_id,
      order_status,
    ]);

    console.log("Order Status Result:", orderStatusResult);

    if (!orderStatusResult) {
      throw new Error("Failed to create order status");
    }

    return {
      message: "Order and related records created successfully",
      order_id,
    };
  } catch (err) {
    console.error(err);
    throw err;
  }
}

async function getAllOrders({ limit, sortby, completed }) {
  try {
    let query = "SELECT * FROM orders";
    let queryParams = [];

    if (completed !== undefined) {
      query += " WHERE order_completed = ?";
      queryParams.push(completed);
    }

    if (sortby) {
      query += ` ORDER BY ${sortby}`;
    }

    if (limit) {
      query += " LIMIT ?";
      queryParams.push(parseInt(limit));
    }

    const [orders] = await conn.query(query, queryParams);
    return orders;
  } catch (error) {
    throw new Error(error);
  }
}

async function getOrderById(id) {
  try {
    const query = "SELECT * FROM orders WHERE order_id = ?";
    const [order] = await conn.query(query, [id]);
    return order[0];
  } catch (error) {
    throw new Error(error);
  }
}

// Existing createOrders function

async function updateOrder(id, orderData) {
  try {
    const { estimated_completion_date, completion_date, order_completed } =
      orderData;

    const query = `
      UPDATE orders
      SET estimated_completion_date = ?, completion_date = ?, order_completed = ?
      WHERE order_id = ?
    `;

    const [result] = await conn.query(query, [id]);

    if (result.affectedRows === 0) {
      throw new Error(`Order with ID ${id} not found`);
    }

    // Update order info
    const orderInfoQuery = `
    UPDATE order_info
    SET estimated_completion_date = ?, 
        completion_date = ?,
        order_completed = ?
    WHERE order_id = ?
  `;

    await conn.query(orderInfoQuery, [
      estimated_completion_date,
      completion_date,
      order_completed,
      id,
    ]);
    return { message: "Order updated successfully" };
  } catch (error) {
    throw new Error(error);
  }
}
module.exports = {
  createOrders,
  checkVehicle,
  checkCustomerExists,
  checkEmployee,
  checkService,
  getAllOrders,
  getOrderById,
  updateOrder,
};
