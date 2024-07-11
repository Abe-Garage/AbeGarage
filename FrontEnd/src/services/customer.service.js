import axios from "../utils/axiosConfig";
// A function to send post request to create a new customer
async function createCustomer(formData, loggedInCustomerToken) {
  // define your headers
  const headers = {
    "x-access-token": loggedInCustomerToken,
  };

  const data = await axios.post("/api/customer", formData, { headers });

  return data;
}

// A function to send get request to get all customers
async function getAllCustomers(token) {
  const headers = {
    "x-access-token": token,
  };

  const data = await axios.get("/api/customers", { headers });

  return data;
}

// afunction to customer update request
async function updateCustomer(formData, loggedInCustomerToken) {
  const headers = {
    "x-access-token": loggedInCustomerToken,
  };

  const data = await axios.put("/api/customer/update", formData, { headers });

  // console.log(data);

  return data;
}
// a funtion to get single customer
async function singleCustomer(formData, loggedInCustomerToken) {
  const headers = {
    "x-access-token": loggedInCustomerToken,
  };
  // console.log(formData);
  const data = await axios.get(`/api/customer/single/${formData}`, { headers });

  // console.log(data);

  return data;
}
const customerService = {
  createCustomer,
  getAllCustomers,
  updateCustomer,
  singleCustomer,
};

export default customerService;