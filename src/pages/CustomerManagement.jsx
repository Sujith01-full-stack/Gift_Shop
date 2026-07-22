import React, { useState, useEffect } from "react";
import {
  FaUsers,
  FaSearch,
  FaTrash,
  FaEye,
  FaUserPlus,
} from "react-icons/fa";
import "./CustomerManagement.css";

const CustomerManagement = () => {
  const [search, setSearch] = useState("");

 const [customers, setCustomers] = useState([]);

useEffect(() => {
  const savedCustomers =
    JSON.parse(localStorage.getItem("customers")) || [];

  setCustomers(savedCustomers);
}, []);



  const [showForm, setShowForm] = useState(false);

  const [newCustomer, setNewCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
  });

  const addCustomer = () => {
  if (
    !newCustomer.name ||
    !newCustomer.email ||
    !newCustomer.phone ||
    !newCustomer.city
  ) {
    alert("Please fill all fields");
    return;
  }

  const customer = {
    id: Date.now(),
    ...newCustomer,
    orders: 0,
  };

  const updatedCustomers = [...customers, customer];

  setCustomers(updatedCustomers);

  localStorage.setItem(
    "customers",
    JSON.stringify(updatedCustomers)
  );

  setNewCustomer({
    name: "",
    email: "",
    phone: "",
    city: "",
  });

  setShowForm(false);
};

  const deleteCustomer = (id) => {
  if (window.confirm("Delete Customer?")) {

    const updatedCustomers = customers.filter(
      (c) => c.id !== id
    );

    setCustomers(updatedCustomers);

    localStorage.setItem(
      "customers",
      JSON.stringify(updatedCustomers)
    );
  }
};

  const filtered = customers.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.city.toLowerCase().includes(search.toLowerCase())
  );

  const viewCustomer = (customer) => {

  const orders =
    JSON.parse(localStorage.getItem("orders")) || [];

  const customerOrders = orders.filter(
    (order) =>
      order.customer?.email === customer.email
  );

  let details = `
Customer Details

ID : ${customer.id}

Name : ${customer.name}

Email : ${customer.email}

Phone : ${customer.phone}

City : ${customer.city}

Total Orders : ${customerOrders.length}

--------------------------------
`;

  if (customerOrders.length > 0) {

    customerOrders.forEach((order) => {
      details += `

Order ID : ${order.id}
Product : ${order.product}
Quantity : ${order.quantity}
Price : ₹${order.price}
Status : ${order.status}
Date : ${order.date}

--------------------------------`;
    });

  } else {

    details += "\nNo Orders Found";

  }

  alert(details);
};

  return (
    <div className="customer-management">

      <div className="customer-header">

        <h2>
          <FaUsers /> Customer Management
        </h2>

        <button
          className="add-customer-btn"
          onClick={() => setShowForm(!showForm)}
        >
          <FaUserPlus /> Add Customer
        </button>

      </div>

      {showForm && (
        <div className="customer-form">

          <input
            type="text"
            placeholder="Customer Name"
            value={newCustomer.name}
            onChange={(e) =>
              setNewCustomer({
                ...newCustomer,
                name: e.target.value,
              })
            }
          />

          <input
            type="email"
            placeholder="Email"
            value={newCustomer.email}
            onChange={(e) =>
              setNewCustomer({
                ...newCustomer,
                email: e.target.value,
              })
            }
          />

          <input
            type="text"
            placeholder="Phone"
            value={newCustomer.phone}
            onChange={(e) =>
              setNewCustomer({
                ...newCustomer,
                phone: e.target.value,
              })
            }
          />

          <input
            type="text"
            placeholder="City"
            value={newCustomer.city}
            onChange={(e) =>
              setNewCustomer({
                ...newCustomer,
                city: e.target.value,
              })
            }
          />

          <button onClick={addCustomer}>
            Save Customer
          </button>

        </div>
      )}

      <div className="customer-search">

        <FaSearch />

        <input
          type="text"
          placeholder="Search Customer..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      <div className="customer-table">

        <table>

          <thead>

            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>City</th>
              <th>Orders</th>
              <th>Action</th>
            </tr>

          </thead>

          <tbody>

            {filtered.length > 0 ? (
              filtered.map((customer) => (
                <tr key={customer.id}>

                  <td>#{customer.id}</td>

                  <td>{customer.name}</td>

                  <td>{customer.email}</td>

                  <td>{customer.phone}</td>

                  <td>{customer.city}</td>

                  <td>{customer.orders}</td>

                  <td>

                    <button
                      className="view-btn"
                      onClick={() => viewCustomer(customer)}
                    >
                      <FaEye />
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() => deleteCustomer(customer.id)}
                    >
                      <FaTrash />
                    </button>

                  </td>

                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" style={{ textAlign: "center" }}>
                  No Customers Found
                </td>
              </tr>
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default CustomerManagement;