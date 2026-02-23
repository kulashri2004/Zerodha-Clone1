import React, { useEffect } from "react";

function Refer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container text-center p-4 mt-5">
     
      <h1
        className="mb-4 pb-2 border-bottom mt-5"
        style={{
          color: "#424242",
          whiteSpace: "nowrap",
          fontSize: "28px", 
        }}
      >
        Referral Programme
      </h1>

   
      <div className="row align-items-center justify-content-center p-3">
       
        <div className="col-lg-6 d-flex justify-content-center mb-3">
          <img
            src="media/images/reward.svg"
            alt="Reward Box"
            className="img-fluid"
            style={{ maxWidth: "180px" }}
          />
        </div>

     
        <div className="col-lg-6 d-flex flex-column align-items-center text-center text-lg-start">
          <h3 className="fw-bold mb-3" style={{ fontSize: "22px" }}>
            Refer your friends to earn 300 reward points!
          </h3>
          <p className="text-muted" style={{ maxWidth: "400px" }}>
            Redeem your reward points to gain access to various tools and
            platforms in the Zerodha Universe.{" "}
            <a href="#" className="text-primary">
              Read more.
            </a>
          </p>
          <button className="btn btn-primary px-4 py-2">My Rewards</button>
        </div>
      </div>
    </div>
  );
}

export default Refer;
