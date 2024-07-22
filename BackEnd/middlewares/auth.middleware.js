// Import the dotenv package
require("dotenv").config();
// Import the jsonwebtoken package
const jwt = require("jsonwebtoken");
// A function to verify the token received from the frontend
// Import the employee service
const employeeService = require("../services/employee.service");

// A function to verify the token received from the frontend 
const verifyToken = async (req, res, next) => {
  let token = req.headers["x-access-token"];
  console.log(token)
  if (!token) {
    return res.status(403).send({
      status: "fail",
      message: "No token provided!"
    });
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        status: "fail",
        message: "Unauthorized!",
      });
    }
    // console.log("Here is the decoded token");
    console.log(decoded);
    req.employee_email = decoded.employee_email;
    next();
  });
}


// A function to check if the user is an admin
const isAdmin = async (req, res, next) => {
  // let token = req.headers["x-access-token"];
  console.log(req.employee_email);
  const employee_email = req.employee_email;
  const employee = await employeeService.getEmployeeByEmail(employee_email);
  if (employee[0].company_role_id === 3) {
    next();
  } else {
    return res.status(403).send({
      status: "fail",
      error: "Not an Admin!",
    });
  }
};
// A function to check if the employee is accessing their own profile
const selfProfile = async (req, res, next) => {
  const employeeId = req.params.id; // Assuming the employee ID is in the URL params
  if (parseInt(employeeId) === req.employee_id) {
    next();
  } else {
    return res.status(403).send({
      status: "fail",
      message: "You can only access your own profile!",
    });
  }
};


const authMiddleware = {
  verifyToken,
  isAdmin,
  selfProfile,
};



module.exports = authMiddleware;

