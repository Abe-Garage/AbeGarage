
import axios from "../utils/axiosConfig";

const api_url = import.meta.env.VITE_API_URL;

const ordersService = {
  getAllOrders: async (token) => {
    try {
      const response = await axios.get(`${api_url}/api/orders`, {
        headers: {
          "x-access-token": token,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching orders:", error);
      throw error;
    }
  },
};

export default ordersService;