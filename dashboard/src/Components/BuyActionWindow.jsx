import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [isVisible, setIsVisible] = useState(true); // State to control visibility

  const handleBuyClick = async () => {
    const newOrder = {
      name: uid, 
      qty: stockQuantity,
      price: stockPrice,
      mode: "BUY",
      status: "Pending", 
    };

    try {
      await axios.post("http://localhost:3002/newOrder", newOrder);
      alert("Order placed successfully!");  
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  const onClose = () => {
    setIsVisible(false); // Hide the BuyActionWindow when Cancel is clicked
  };

  if (!isVisible) return null; // Don't render if hidden

  return (
    <div className="buy-window">
      <div className="header">
        <h3>Place Order</h3>
      </div>

      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              step="0.05"
              value={stockPrice}
              onChange={(e) => setStockPrice(e.target.value)}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <Link className="btn btn-primary" onClick={handleBuyClick}>
            Buy
          </Link>
          <Link className="btn btn-primary" onClick={onClose}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
