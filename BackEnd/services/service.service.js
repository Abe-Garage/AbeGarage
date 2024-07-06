// Import the query function from the db.config.js file
const connection = require("../config/db.config");

// Create an async function to create a new service in the database
async function createService(common_services) {
  try {
    // Prepare the SQL query
    const sql = `INSERT INTO common_services (service_name, service_description) VALUES (?, ?)`;
    const params = [
      common_services.service_name,
      common_services.service_description,
    ];

    // Execute the query
    const result = await connection.query(sql, params);

    return result;
  } catch (error) {
    // Handle any errors that occur during the query execution
    console.error("Error creating service:", error);
    throw new Error("Could not create service. Please try again later."); // You can customize the error message as needed
  }
}

// get all services
async function getAllServices() {
  try {
    const sql = `SELECT * FROM common_services`;
    const result = await connection.query(sql);
    return result;
  } catch (error) {
    console.error("Error getting services:", error);
    throw new Error("Could not get services. Please try again later.");
  }
}

// Export the function
module.exports = {
  createService,
};
