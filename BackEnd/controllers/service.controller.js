const serviceService = require("../services/service.service");

async function createService(req, res, next) {
  try {
    const serviceData = req.body; // Extract service data from request body
    console.log("Received service data:", serviceData); // Log the received data
    const service = await serviceService.createService(serviceData); // Call service layer function
    if (!service) {
      return res.status(400).json({
        error: "Failed to add the service!",
      });
    }
    res.status(200).json({
      status: "Service added successfully",
      service: service, // Include the created service data
      serviceData: serviceData
    });
  } catch (error) {
    console.error(error); // Log the actual error object for debugging
    res.status(500).json({
      error: "Something went wrong!",
    });
  }
}

module.exports = {
  createService,
};