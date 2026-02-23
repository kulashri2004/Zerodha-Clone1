import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

const Hero = () => {
  return (
    <section className="container-fluid p-4" style={{ backgroundColor: "rgb(56,126,209)", color: "white" }}>
    
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h4 className="fw-bold">Support Portal</h4>
        <a href="#" className="text-white text-decoration-none">Track tickets</a>
      </div>

      
      <div className="mt-3">
        <div className="input-group w-50">
          <input
            type="text"
            className="form-control"
            placeholder="Eg: how do i activate F&O, why is my order getting rejected ..."
            style={{ borderRadius: "5px", height: "45px" }}
          />
        
        </div>
      </div>

      <div className="mt-3">
        <div className="d-flex flex-wrap">
          <a href="#" className="text-white me-3 text-decoration-none border-bottom">Track account opening</a>
          <a href="#" className="text-white me-3 text-decoration-none border-bottom">Track segment activation</a>
          <a href="#" className="text-white text-decoration-none border-bottom">Intraday margins</a>
        </div>
        <a href="#" className=" text-white mt-2 text-decoration-none border-bottom">Kite user manual</a>
      </div>

     
      <div className="mt-4">
        <h5 className="fw-bold">Featured</h5>
        <ol className="ps-3">
          <li><a href="#" className="text-white text-decoration-none border-bottom">Latest Intraday leverages and Square-off timings</a></li>
          <li><a href="#" className="text-white text-decoration-none border-bottom">Surveillance measure on scrips - February 2025</a></li>
        </ol>
      </div>
    </section>
  );
};

export default Hero;
