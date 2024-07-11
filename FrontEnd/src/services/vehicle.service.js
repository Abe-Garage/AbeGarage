
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



  const vehicleService = {
    AddVehicle,
 
  };
  
  export default vehicleService;