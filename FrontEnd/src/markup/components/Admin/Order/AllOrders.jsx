import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { PiArrowSquareOutBold } from "react-icons/pi";

function AllOrders() {

  // States
  const [orders, setOrders] = useState([]);

  // useEffect
  useEffect(() => {
    // Mock data fetching
    const mockOrders = [
      {
        order_id: 1,
        customer_first_name: "John",
        customer_last_name: "Doe",
        customer_email: "john.doe@gmail.com",
        customer_phone_number: "123-456-7890",
        vehicle_make: "Toyota",
        vehicle_model: "Corolla",
        vehicle_year: "2020",
        vehicle_tag: "ABC123",
        order_date: "2023-06-01",
        employee_first_name: "Jane",
        employee_last_name: "Smith",
        order_status: 0,
      },

      {
        order_id: 2,
        customer_first_name: "Jane",
        customer_last_name: "Doe",
        customer_email: "jane.doe@gmail.com",
        customer_phone_number: "123-456-7890",
        vehicle_make: "Honda",
        vehicle_model: "Civic",
        vehicle_year: "2021",
        vehicle_tag: "DEF456",
        order_date: "2023-06-02",
        employee_first_name: "John",
        employee_last_name: "Doe",
        order_status: 1,
      },

    ];
    setOrders(mockOrders);
  }, []);

  // Functions
  const formatCustomerAddedDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  const handleClick = (order) => {
    console.log("Order clicked:", order);
  };

  return (
    <section className="contact-section">
      <div className="mx-4">
        <div className="contact-title mb-1">
          <h2>Orders</h2>
        </div>
        <table className="table table-striped table-hover border">
          <thead>
            <tr>
              <th scope="col" className="border">
                Order Id
              </th>
              <th scope="col" className="border">
                Customer
              </th>
              <th scope="col" className="border">
                Vehicle
              </th>
              <th scope="col" className="border">
                Order Date
              </th>
              <th scope="col" className="border">
                Received By
              </th>
              <th scope="col" className="border">
                Order Status
              </th>
              <th scope="col" className="border">
                View/Edit
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.order_id}>
                <td className="border">
                  <h6 className="py-0 my-0 mx-3 font-weight-bold">
                    {order.order_id}
                  </h6>
                </td>
                <td className="border p-3">
                  <h5 className="py-0 my-0 font-weight-bold">
                    {order.customer_first_name} {order.customer_last_name}
                  </h5>
                  <h6 className="py-1 my-0 text-muted">
                    {order.customer_email.split("@")[0] + "@..."}
                  </h6>
                  <h6 className="py-0 my-0 text-muted">
                    {order.customer_phone_number}
                  </h6>
                </td>
                <td className="border">
                  <h5 className="py-0 my-0 font-weight-bold">
                    {order.vehicle_make} {order.vehicle_model}
                  </h5>
                  <h6 className="py-1 my-0 text-muted">{order.vehicle_year}</h6>
                  <h6 className="py-0 my-0 text-muted">{order.vehicle_tag}</h6>
                </td>
                <td className="border">
                  {formatCustomerAddedDate(order.order_date)}
                </td>
                <td className="border">
                  {order.employee_first_name}{" "}
                  {order.employee_last_name.charAt(0)}
                </td>
                <td className="border py-4">
                  {order.order_status === 0 ? (
                    <h6 className="text-center rounded-pill bg-warning font-weight-bold">
                      In Progress
                    </h6>
                  ) : order.order_status === 1 ? (
                    <h6 className="text-white rounded-pill text-center bg-success font-weight-bold">
                      Completed
                    </h6>
                  ) : (
                    <h6 className="rounded-pill text-white m-auto text-center bg-secondary font-weight-bold">
                      Received
                    </h6>
                  )}
                </td>
                <td className="border">
                  <Link to="/admin/all-orders/order-update">
                    <FaEdit
                      className="mx-2 scale-on-hover cursor-pointer"
                      onClick={() => handleClick(order)}
                    />
                  </Link>
                  <Link to="/admin/all-orders/order-detail">
                    <PiArrowSquareOutBold
                      className="mx-1 fw-bold scale-on-hover cursor-pointer"
                      onClick={() => handleClick(order)}
                    />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default AllOrders;
