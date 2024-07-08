// import Customer services

const {
  checkIfCustomerExists,
  createCustomer,
  getCustomerByEmail,
  getSingleCustomer,
  getAllCustomers,
  updateCustomer,
  deleteCustomer,
} = require("../services/customer.service");

// Create Customer controller
async function createCustomerController(req, res, next) {
  const { customer_email } = req.body;

  try {
    const customerExists = await checkIfCustomerExists(customer_email);

    if (customerExists) {
      return res.status(400).json({
        msg: "This email address is already associated with another customer!",
      });
    }

    const customerData = req.body;
    const customer = await createCustomer(customerData);

    if (!customer) {
      return res.status(400).json({
        error: "Failed to add the customer!",
      });
    }

    return res.status(200).json({
      status: "Customer added successfully!",
      customer,
    });
  } catch (error) {
    return res.status(400).json({
      error: "Something went wrong!",
    });
  }
}

// Get all Customers controller
async function getAllCustomersController(req, res, next) {
  try {
    const customers = await getAllCustomers();

    if (!customers) {
      return res.status(400).json({
        error: "Failed to get all customers!",
      });
    }

    return res.status(200).json({
      status: "Customers retrieved successfully!",
      customers,
    });
  } catch (error) {
    return res.status(400).json({
      error: "Something went wrong!",
    });
  }
}

// Get single Customer controller
async function getSingleCustomerController(req, res, next) {
  const customer_id = req.params.id;

  try {
    const singleCustomer = await getSingleCustomer(customer_id);

    if (!singleCustomer) {
      return res.status(400).json({
        error: "Failed to get customer!",
      });
    }

    return res.status(200).json({
      status: "Customer retrieved successfully!",
      customer: singleCustomer,
    });
  } catch (error) {
    return res.status(400).json({
      error: "Something went wrong!",
    });
  }
}

// Update Customer controller
async function updateCustomerController(req, res, next) {
  try {
    const updateResult = await updateCustomer(req.body);

    if (!updateResult) {
      return res.status(400).json({
        error: "Failed to update customer!",
      });
    }

    return res.status(200).json({
      status: "Customer successfully updated!",
      updateResult,
    });
  } catch (error) {
    return res.status(400).json({
      error: "Something went wrong!",
    });
  }
}

// Delete Customer controller
async function deleteCustomerController(req, res, next) {
  const { customer_id } = req.body;

  try {
    const deleteResult = await deleteCustomer(customer_id);

    if (!deleteResult) {
      return res.status(400).json({
        error: "Delete incomplete!",
      });
    }

    return res.status(200).json({
      status: "Customer successfully deleted!",
    });
  } catch (error) {
    return res.status(400).json({
      error: "Something went wrong!",
    });
  }
}

module.exports = {
  createCustomerController,
  getAllCustomersController,
  getSingleCustomerController,
  updateCustomerController,
  deleteCustomerController,
};
