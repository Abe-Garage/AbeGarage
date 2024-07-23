import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import orderService from '../../../../services/order.service';
import serviceService from "../../../../services/service.service";
import { useAuth } from '../../../../Context/AuthContext';

function UpdateOrder() {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const { employee } = useAuth();
  const token = employee?.employee_token;

  const [orderData, setOrderData] = useState({
    order_id: orderId,
    order_description: '',
    estimated_completion_date: '',
    completion_date: '',
    order_status: '',
    order_services: []
  });
// console.log(orderId)
  const [availableServices, setAvailableServices] = useState([]);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const fetchedOrder = await orderService.getOrderById(token, orderId);
        setOrderData({
          ...fetchedOrder,
          order_services: fetchedOrder.order_services || []
        });
      } catch (error) {
        console.error("Error fetching order:", error);
      }
    };

    const fetchServices = async () => {
      try {
        const fetchedServices = await serviceService.getServiceList(token);
        console.log(fetchedServices.data)
        setAvailableServices(fetchedServices.data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchOrder();
    fetchServices();
  }, [orderId, token]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleServiceChange = (serviceId, checked) => {
    setOrderData((prevState) => {
      const updatedServices = checked
        ? [...prevState.order_services, { service_id: serviceId, service_completed: false }]
        : prevState.order_services.filter((service) => service.service_id !== serviceId);
      return {
        ...prevState,
        order_services: updatedServices,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await orderService.updateOrder(orderData, token);
      alert("Order Update page successfuly!")
      navigate("/admin/orders");
    } catch (error) {
      console.error("Error updating order:", error);
    }
  };

  return (
    <section className="update-order-section">
      <div className="mx-4">
        <div className="update-order-title mb-4">
          <h2>Update Order</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="order_description">Order Description</label>
            <input
              type="text"
              id="order_description"
              name="order_description"
              value={orderData.order_description}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="estimated_completion_date">Estimated Completion Date</label>
            <input
              type="date"
              id="estimated_completion_date"
              name="estimated_completion_date"
              value={orderData.estimated_completion_date}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="completion_date">Completion Date</label>
            <input
              type="date"
              id="completion_date"
              name="completion_date"
              value={orderData.completion_date}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Order Services</label>
            {availableServices.map((service) => (
              <div key={service.service_id} className="form-check">
                <input
                  type="checkbox"
                  id={`service-${service.service_id}`}
                  className="form-check-input"
                  checked={orderData.order_services.some(
                    (os) => os.service_id === service.service_id
                  )}
                  onChange={(e) =>
                    handleServiceChange(service.service_id, e.target.checked)
                  }
                />
                <label
                  htmlFor={`service-${service.service_id}`}
                  className="form-check-label"
                >
                  {service.service_name}
                </label>
              </div>
            ))}
          </div>
          <div className="form-group">
            <label htmlFor="order_status">Order Status</label>
            <select
              id="order_status"
              name="order_status"
              value={orderData.order_status}
              onChange={handleInputChange}
              className="form-control"
              required
            >
              <option value="">Select Status</option>
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Update Order
          </button>
        </form>
      </div>
    </section>
  );
}

export default UpdateOrder;
