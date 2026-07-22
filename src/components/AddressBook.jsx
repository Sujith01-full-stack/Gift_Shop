import React, { useState } from "react";
import {
  FaHome,
  FaBuilding,
  FaPlus,
  FaEdit,
  FaTrash,
  FaMapMarkerAlt,
  FaTimes,
} from "react-icons/fa";
import "./AddressBook.css";

const AddressBook = () => {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      type: "Home",
      name: "Spider User",
      phone: "+91 8300589035",
      address: "12, Veeyanoor, Salem, Tamil Nadu - 636001",
    },
    {
      id: 2,
      type: "Office",
      name: "Spider User",
      phone: "+91 8300589035",
      address: "Tech Park, Coimbatore, Tamil Nadu - 641001",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    type: "Home",
    name: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const addNew = () => {
    setEditingId(null);

    setForm({
      type: "Home",
      name: "",
      phone: "",
      address: "",
    });

    setShowForm(true);
  };

  const editAddress = (item) => {
    setEditingId(item.id);

    setForm({
      type: item.type,
      name: item.name,
      phone: item.phone,
      address: item.address,
    });

    setShowForm(true);
  };

  const saveAddress = () => {
    if (!form.name || !form.phone || !form.address) {
      alert("Fill all fields");
      return;
    }

    if (editingId) {
      setAddresses(
        addresses.map((item) =>
          item.id === editingId ? { ...item, ...form } : item
        )
      );
    } else {
      setAddresses([
        ...addresses,
        {
          id: Date.now(),
          ...form,
        },
      ]);
    }

    setShowForm(false);
    setEditingId(null);

    setForm({
      type: "Home",
      name: "",
      phone: "",
      address: "",
    });
  };

  const deleteAddress = (id) => {
    if (window.confirm("Delete this address?")) {
      setAddresses(addresses.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="address-book">

      <div className="address-header">

        <h2>
          <FaMapMarkerAlt />
          Address Book
        </h2>

        <button
          className="add-address-btn"
          onClick={addNew}
        >
          <FaPlus />
          Add Address
        </button>

      </div>

      {showForm && (

        <div
          className="modal-overlay"
          onClick={() => setShowForm(false)}
        >

          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="close-modal"
              onClick={() => setShowForm(false)}
            >
              <FaTimes />
            </button>

            <div className="address-form">

              <h3>
                {editingId ? "Edit Address" : "Add Address"}
              </h3>

              <select
                name="type"
                value={form.type}
                onChange={handleChange}
              >
                <option>Home</option>
                <option>Office</option>
              </select>

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
              />

              <textarea
                name="address"
                placeholder="Address"
                value={form.address}
                onChange={handleChange}
              />

              <div className="form-buttons">

                <button onClick={saveAddress}>
                  Save
                </button>

                <button
                  className="cancel-btn"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>

              </div>

            </div>

          </div>

        </div>

      )}

      <div className="address-grid">

        {addresses.map((item) => (

          <div
            className="address-card"
            key={item.id}
          >

            <div className="address-top">

              <div className="address-type">

                {item.type === "Home" ? (
                  <FaHome />
                ) : (
                  <FaBuilding />
                )}

                <span>{item.type}</span>

              </div>

              <div className="address-actions">

                <button
                  className="edit-btn"
                  onClick={() => editAddress(item)}
                >
                  <FaEdit />
                </button>

                <button
                  className="delete-btn"
                  onClick={() => deleteAddress(item.id)}
                >
                  <FaTrash />
                </button>

              </div>

            </div>

            <h3>{item.name}</h3>

            <p>{item.phone}</p>

            <p>{item.address}</p>

          </div>

        ))}

      </div>

    </div>
  );
};

export default AddressBook;