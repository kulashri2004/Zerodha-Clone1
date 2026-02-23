import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function OpenAccount() {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/signup");
  };

  return (
    <div className="container text-center py-5">
    
      <div className="d-flex justify-content-center mt-4">
        <img 
          src="media/images/homeHero.png" 
          alt="heroImage" 
          className="img-fluid" 
          style={{ maxWidth: "80%" }} 
        />
      </div>

   
      <h1 className="mt-4">Open a Zerodha account</h1>
      <p className="text-muted">
        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
      </p>

    
      <button 
        className="btn btn-primary btn-lg d-block mx-auto mt-3" 
        onClick={handleSignUp}
      >
        Sign up Now
      </button>
    </div>
  );
}

export default OpenAccount;
