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


  async function getVehicleInfo (ID) {
    const  data = await axios.get(`${api_url}/api/vehicles/${ID}`);
    console.log( data)
    return  data;
}




  const vehicleService = {
    AddVehicle,
    getVehicleInfo
 
  };
  
  export default vehicleService;