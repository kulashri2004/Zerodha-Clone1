import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)", width: "100%" }}>
      <div className="container border-top mt-5 py-4">
        
     
        <div className="text-center text-md-start mb-4">
          <img src="media/images/logo.svg" style={{ width: "150px" }} alt="Logo" />
          <p className="mt-2 text-muted">&copy; 2010 - 2025, Zerodha Broking Ltd. All rights reserved.</p>
        </div>

       
        <div className="row text-center text-md-start">
         
          <div className="col-12 col-md-4 mb-4">
            <h6 className="fw-bold">Company</h6>
            <Link to="/about" className="d-block text-muted" style={{textDecoration:"none"}}>About</Link>
            <Link to="/products" className="d-block text-muted"style={{textDecoration:"none"}}>Products</Link>
            <Link to="/pricing" className="d-block text-muted"style={{textDecoration:"none"}}>Pricing</Link>
            <Link to="/Refer" className="d-block text-muted"style={{textDecoration:"none"}}>Referral programme</Link>
            <Link to="/career" className="d-block text-muted"style={{textDecoration:"none"}}>Careers</Link>
          </div>

         
          <div className="col-12 col-md-4 mb-4">
            <h6 className="fw-bold">Support</h6>
            <Link to="/support" className="d-block text-muted"style={{textDecoration:"none"}}>Support portal</Link>
            <Link to="/pricing" className="d-block text-muted"style={{textDecoration:"none"}}>List of charges</Link>
          </div>

          
          <div className="col-12 col-md-4 mb-4">
            <h6 className="fw-bold">Account</h6>
            <Link to="/signup" className="d-block text-muted"style={{textDecoration:"none"}}>Open an account</Link>
          </div>
        </div>

      
        <div className="mt-4 text-muted" style={{ fontSize: "14px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.: INZ000031633 
            CDSL: Depository services through Zerodha Securities Pvt. Ltd. – SEBI Registration 
            no.: IN-DP-100-2015. Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 
            46025 – SEBI Registration no.: INZ000038238. Registered Address: Zerodha Broking Ltd., 
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, 
            Bengaluru - 560078, Karnataka, India.
          </p>
          <p>
            Investments in securities markets are subject to market risks; read all the related 
            documents carefully before investing.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
