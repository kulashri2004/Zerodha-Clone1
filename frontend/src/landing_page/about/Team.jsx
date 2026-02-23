import React from "react";
import { Link } from "react-router-dom";

function Team() {
  return (
    <div className="container">
      <div className="row p-4 border-top">
        <h1 className="text-center">People</h1>
      </div>

      <div
        className="row p-3 text-muted d-flex flex-column align-items-center"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
       
        <div className="col-12 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            style={{ borderRadius: "50%", width: "150px", display: "block", margin: "0 auto" }}
            alt="Nithin Kamath"
          />
          <h4 className="mt-3">Nithin Kamath</h4>
          <h6>Founder, CEO</h6>
        </div>

       
        <div className="col-lg-6 col-md-8 col-sm-10 text-center mt-3">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade-long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a href="">Homepage</a> / <Link to="/tradingQA">TradingQA</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
