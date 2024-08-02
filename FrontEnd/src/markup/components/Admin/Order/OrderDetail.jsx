import React, { useState, useEffect } from "react";
import "./orderDetail.css";
import { useParams } from "react-router-dom";
import ordersService from "../../../../services/order.service";
import { useAuth } from "../../../../Context/AuthContext";

const OrderDetail = () => {
  const { id } = useParams(); // Get the order ID from the URL
  console.log(id);
  const [orderData, setOrderData] = useState(null);
  const [order, setOrder] = useState(null);
  const { employee } = useAuth();
  const token = employee?.employee_token;

 
  
  useEffect(() => {
    const fetchOrder = async () => {
      if (!token) {
        console.error("Token is not available");
        return;
      }
      try {
        const fetchedOrder = await ordersService.getOrderById(token, id);
        // console.log(fetchedOrder);
        setOrderData(fetchedOrder);
        setOrder(fetchedOrder[0]);
      } catch (error) {
        console.error("Error fetching order:", error);
      }
    };

    fetchOrder();
  }, [token, id]);

  if (!orderData) {
    return <div>Loading...</div>;
  }

 
  // console.log(orderData);
  return (
    <div className="order-detail-container">
      <div className="order-detail-card">
        {orderData.map((orderData) => (
          <div className="status-box-inline">
            {orderData.order_status === 0 ? (
              <h6 className="status-in-progress">In Progress</h6>
            ) : orderData.order_status === 1 ? (
              <h6 className="status-completed">Completed</h6>
            ) : (
              <h6 className="status-received">Received</h6>
            )}
          </div>
        ))}
        <div className="sec-title style-two order_customer_name">
          <h2>
            {order.customer_first_name} {order.customer_last_name}
          </h2>
          <div className="text">
            You can track the progress of your order using this page. We will
            constantly update this page to let you know how we are progressing.
            As soon as we are done with the order, the status will turn green.
            That means, your car is ready for pickup.
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 service-block-one">
            <div className="inner-box hvr-float-shadow">
              <h5>CUSTOMER</h5>
              <h2>
                {order.customer_first_name}
                {order.customer_last_name}
              </h2>
              <div>Email: {order.customer_email}</div>
              <div>Phone Number: {order.customer_phone_number}</div>
              <div>
                Active Customer: {order.customer?.active ? "Yes" : "No"}
              </div>
            </div>
          </div>

          <div className="col-lg-6 service-block-one">
            <div className="inner-box hvr-float-shadow">
              <h5>CAR IN SERVICE</h5>
              <h2>
                {order.vehicle_model}{" "}
                <span>({order.vehicle_color})</span>
              </h2>
              <div>Vehicle tag: {order.vehicle_tag}</div>
              <div>Vehicle year: {order.vehicle_year}</div>
              <div>Vehicle mileage: {order.vehicle_mileage}</div>
            </div>
          </div>
        </div>

        <div className="order_details">
          <h5>{order.vehicle_model}</h5>
          <h2>Requested Service</h2>
          {orderData?.map((order, index) => (
            <div key={index} className="order_detail_items">
              <div className="requested_service">
                <h2>{order.service_name}</h2>
                <p>{order.service_description}</p>
                <div className="status-box">
                  {order.order_status === 0 ? (
                    <h6 className="status-in-progress">In Progress</h6>
                  ) : order.order_status === 1 ? (
                    <h6 className="status-completed">Completed</h6>
                  ) : (
                    <h6 className="status-received">Received</h6>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
