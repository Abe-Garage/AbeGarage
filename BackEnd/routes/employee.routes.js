// import the express module
const express = require("express");

// call the router method from express to create the router
const router = express.Router();

// import the authMiddleware
const {
  verifyToken,
  isAdmin,
} = require("../middlewares/auth.middleware");

// import the employee controller
const employeeController = require("../controllers/employee.controller");


//*  [verifyToken, isAdmin],
// create a route to handle the employee request in post
router.post(
  "/api/employee",
  // [verifyToken, isAdmin],
  employeeController.createEmployee
);

// create a route to handle the get all employee request in get
router.get(
  "/api/employee",
  [verifyToken, isAdmin],
  employeeController.getAllEmployeees
);

// create a route to handle the get single employee request in get
router.get(
  "/api/employee/:id",
  [verifyToken, isAdmin],
  employeeController.getSingleEmployee
);

// create a route to handle the employee request in put
router.put(
  "/api/employee",
  [verifyToken, isAdmin],
  employeeController.updateEmployee
);

// create a route to handle the employee request in delete
router.delete(
  "/api/employee/:employee_id",
  [verifyToken, isAdmin],
  employeeController.deleteEmployee
  );


// export the router
module.exports = router;
