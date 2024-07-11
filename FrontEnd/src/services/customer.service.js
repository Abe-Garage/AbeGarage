import axios from "../utils/axiosConfig";

const api_url = import.meta.env.VITE_API_URL;


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
async function getAllCustomers(token,offset) {
  const headers = {
    "x-access-token": token,
  };
  const data = await axios.get(`${api_url}/api/customers/${offset}`, { headers });

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


const formatDate = (isoString) => {
  const date = new Date(isoString);

  // Extract parts of the date
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  // Format the time
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  // Combine date and time
  const formattedDate = `${day}-${month}-${year}`;
  const formattedTime = `${hours}:${minutes}`;

  return `${formattedDate} | ${formattedTime}`;
};

const totalNofCustomers = async(token)=>{

  const headers = {
    "x-access-token": token,
  };
  const { data }= await axios.get(`${api_url}/api/total_customers`, { headers });
  console.log(data.customers.num)

  return data.customers.num;

}


const searchedCustomers = async(word,token)=>{
      const headers = {
        "x-access-token": token,
      };
      const { data }= await axios.get(`${api_url}/api/searched_customer/${word}`, { headers });
      console.log(data.customers)

      return data.customers;
}



const customerService = {
  createCustomer,
  getAllCustomers,
  updateCustomer,
  singleCustomer,
  formatDate,
  totalNofCustomers,
  searchedCustomers
};

export default customerService;