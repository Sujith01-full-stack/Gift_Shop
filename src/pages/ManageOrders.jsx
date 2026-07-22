import React, { useState } from "react";
import "./ManageOrders.css";
import {
  FaEye,
  FaEdit,
  FaTrash,
  FaSearch,
} from "react-icons/fa";

const ManageOrders = () => {

  const [orders, setOrders] = useState([
    {
      id: "#1001",
      customer: "Rahul",
      product: "Customized Photo Frame",
      amount: 699,
      payment: "UPI",
      status: "Delivered",
      date: "05/07/2026",
      delivery: 50,
    },
    {
      id: "#1002",
      customer: "Priya",
      product: "Magic Mug",
      amount: 399,
      payment: "Cash on Delivery",
      status: "Pending",
      date: "04/07/2026",
      delivery: 50,
    },
    {
      id: "#1003",
      customer: "Arun",
      product: "Photo Keychain",
      amount: 249,
      payment: "Credit Card",
      status: "Shipped",
      date: "03/07/2026",
      delivery: 50,
    },
    {
      id: "#1004",
      customer: "Karthik",
      product: "LED Frame",
      amount: 899,
      payment: "UPI",
      status: "Processing",
      date: "02/07/2026",
      delivery: 50,
    },
  ]);

  const [search, setSearch] = useState("");

  // Delete
  const deleteOrder = (id) => {
    if (window.confirm("Delete this Order?")) {
      setOrders(orders.filter((order) => order.id !== id));
    }
  };

  // View
  const viewOrder = (order) => {
    alert(`
Order ID : ${order.id}

Customer : ${order.customer}

Product : ${order.product}

Amount : ₹${order.amount}

Delivery : ₹${order.delivery}

Total : ₹${order.amount + order.delivery}

Payment : ${order.payment}

Status : ${order.status}

Date : ${order.date}

Estimated Delivery : 3 - 5 Days
    `);
  };

  // Edit Status
  const editOrder = (id) => {

    const status = prompt(
      "Enter Status:\nPending\nProcessing\nShipped\nDelivered\nCancelled"
    );

    if (!status) return;

    setOrders(
      orders.map((order) =>
        order.id === id
          ? { ...order, status }
          : order
      )
    );
  };

  // Search
  const filteredOrders = orders.filter(
    (order) =>
      order.customer
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      order.id
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      order.product
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div className="manage-orders">

      <div className="orders-header">

        <h1>
          Manage <span>Orders</span>
        </h1>

        <div className="search-box">
          <FaSearch />

          <input
            type="text"
            placeholder="Search Order..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />
        </div>

      </div>

      <div className="table-container">

        <table>

          <thead>

            <tr>

              <th>Order ID</th>

              <th>Customer</th>

              <th>Product</th>

              <th>Amount</th>

              <th>Payment</th>

              <th>Status</th>

              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {filteredOrders.map((order) => (

              <tr key={order.id}>

                <td>{order.id}</td>

                <td>{order.customer}</td>

                <td>{order.product}</td>

                <td>₹{order.amount}</td>

                <td>{order.payment}</td>

                <td>

                  <span
                    className={`status ${order.status.toLowerCase()}`}
                  >
                    {order.status}
                  </span>

                </td>

                <td>

                  <div className="action-buttons">

                    <button
                      className="view-btn"
                      onClick={() =>
                        viewOrder(order)
                      }
                    >
                      <FaEye />
                    </button>

                    <button
                      className="edit-btn"
                      onClick={() =>
                        editOrder(order.id)
                      }
                    >
                      <FaEdit />
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() =>
                        deleteOrder(order.id)
                      }
                    >
                      <FaTrash />
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default ManageOrders;