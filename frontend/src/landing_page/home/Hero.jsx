import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


function Hero() {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/signup");
  };

  return (
    <div className="container text-center py-5">
    
    
      <div className="d-flex justify-content-center mt-4">
        <img src="media/images/homeHero.png" alt="Dashboard Preview" className="img-fluid" style={{ maxWidth: "80%" }} />
      </div>

     
      <h1 className="mt-4 ">Invest in everything</h1>
      <p className="text-muted">
        Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
      </p>

    
      <button className="btn btn-primary btn-lg d-block mx-auto mt-3" onClick={handleSignUp}>
        Sign up for free
      </button>
    </div>
  );
}

export default Hero;
