
import axios from "../utils/axiosConfig";


// A function to send post request to create a new employee
async function createEmployee(formData, loggedInEmployeeToken) {
  // define your headers
  const headers = {
    "x-access-token": loggedInEmployeeToken,
  };

  const data = await axios.post("/api/employee", formData, { headers });

  return data;
}

// A function to send get request to get all employees
async function getAllEmployees(token) {
  const headers = {
    "x-access-token": token,
  };

  const data = await axios.get("/api/employees", { headers });

  return data;
}

// A function to employee update request
async function updateEmployee(formData, loggedInEmployeeToken) {
  const headers = {
    "x-access-token": loggedInEmployeeToken,
  };

  const data = await axios.put("/api/employee/update", formData, { headers });

  // console.log(data);

  return data;
}

// a function to get single employee
async function singleEmployee( loggedInEmployeeToken) {
  const headers = {
    "x-access-token": loggedInEmployeeToken,
  };
  // console.log(formData);
  const data = await axios.get("/api/employee/:id", { headers });

  // console.log(data);

  return data;
}
// a function to delete employee
async function deleteEmployee(loggedInEmployeeToken, id) {

  const headers = {
    "x-access-token": loggedInEmployeeToken,
  };

  try {
    const response = await axios.delete(`/api/employee/${id}`, {
      headers
    });

    console.log(response);
    return response.data; // Return the data from the response
  } catch (error) {
    throw error; // Throw an error if something goes wrong
  }
}

const employeeService = {
  createEmployee,
  getAllEmployees,
  updateEmployee,
  singleEmployee,
  deleteEmployee,
};

export default employeeService;
