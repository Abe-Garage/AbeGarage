// import the customer service to handle communication with the database
const customerService = require("../services/customer.service");

async function customers(req, res, next) {
  // call the customer service to create the database tables
  const customerMessage = await customerService.customers();

  // check if the customer was successfully created or not and send a response to the client
  if (customerMessage.status === 200) {
    res.status(200).json({
      message: customerMessage,
    });
  } else {
    res.status(500).json({
      message: customerMessage,
    });
  }
}
// export the customers function
module.exports = {
  customers,
};