import axios from "../utils/axiosConfig";
const api_url = import.meta.env.VITE_API_URL;


async function AddVehicle(formData, Token) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' ,'x-access-token':Token},
        body: JSON.stringify(formData)
      };
      const response = await fetch(`${api_url}/api/vehicle`, requestOptions);
      console.log(response)
      return response;
  
  }


  async function getVehicleInfoPerCustomer (ID) {
       try {
           const  data = await axios.get(`/api/vehicles/${ID}`);
           console.log( data)
       } catch (error) {
          console.log(error)
       }
    return  data;
}


async function getVehicleInfo (ID,token) {
  try {

    const headers = {
      "x-access-token": token,
    };
      const  {data }= await axios.get(`/api/vehicle/${ID}`,{headers});
      // const [data]=response
      console.log(data)
      let response = data?.data[0]

      return response
  } catch (error) {
     console.log(error.response)
     return error?.response
  }
return  data;
}


// A function to employee update request
async function updateVehicle(formData, Token) {
  const headers = {
    "x-access-token": Token,
  };

  const data = await axios.put("/api/vehicle", formData, { headers });

  // console.log(data);

  return data;
}


async function hasServiceOrder (ID,token) {
  try {

    const headers = {
      "x-access-token": token,
    };
      const { data} = await axios.get(`/api/vehicle_order/${ID}`,{headers});
      
      console.log(data)
      let response = data?.result?.length

      return response
  } catch (error) {
     console.log(error)
  }
return  data;
}


  const vehicleService = {
    AddVehicle,
    getVehicleInfoPerCustomer,
    getVehicleInfo,
    updateVehicle,
    hasServiceOrder
 
  };
  
  export default vehicleService;