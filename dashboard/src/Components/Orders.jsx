import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import WatchList from "./WatchList";
import TopBar from "./TopBar";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  // Fetch orders from backend
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:3002/orders");
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <>
      <TopBar />
      <div className="orders-container" style={{ display: "flex", height: "100vh" }}>
        {/* WatchList Section */}
        <div
          style={{
            width: "33%",
            borderRight: "1px solid #eee",
            height: "100vh",
            overflowY: "auto",
          }}
        >
          <WatchList />
        </div>

        {/* Orders Content Section */}
        <div
          style={{
            width: "67%",
            padding: "20px",
            overflowY: "auto",
            height: "100vh",
          }}
        >
          <h3 className="title mt-5 fw-bold">Orders</h3>

          {/* If there are no orders, show "No Orders" message */}
          {orders.length === 0 ? (
            <div
              className="no-orders"
              style={{
                textAlign: "center",
                padding: "40px",
                backgroundColor: "#fff",
                borderRadius: "20px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                maxWidth: "400px",
                margin: "0 auto",
                marginTop: "100px",
              }}
            >
              <p
                style={{
                  fontSize: "18px",
                  marginBottom: "20px",
                  fontWeight: "500",
                  color: "#333",
                }}
              >
                You haven't placed any orders today
              </p>

              <Link
                to="/"
                className="btn"
                style={{
                  display: "inline-block",
                  padding: "12px 24px",
                  backgroundColor: "#6200ea",
                  color: "#fff",
                  textDecoration: "none",
                  borderRadius: "10px",
                  fontWeight: "600",
                  transition: "background-color 0.3s ease",
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#3700b3")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "#6200ea")}
              >
                Get Started
              </Link>
            </div>
          ) : (
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                marginTop: "20px",
              }}
            >
              <thead>
                <tr
                  style={{
                    backgroundColor: "white",
                    color: "grey",
                    textAlign: "left",
                  }}
                >
                  <th style={{ padding: "10px" }}>Stock</th>
                  <th style={{ padding: "10px" }}>Quantity</th>
                  <th style={{ padding: "10px" }}>Price</th>
                  <th style={{ padding: "10px" }}>Mode</th>
                  
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr
                    key={index}
                    style={{
                      borderBottom: "1px solid #ddd",
                      backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#fff",
                    }}
                  >
                    <td style={{ padding: "10px", color: "#000" }}>{order.name}</td>
      <td style={{ padding: "10px", color: "#000" }}>{order.qty}</td>
      <td style={{ padding: "10px", color: "#000" }}>₹{order.price}</td>
      <td style={{ padding: "10px", color: "#000" }}>{order.mode}</td>
   
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Orders;
