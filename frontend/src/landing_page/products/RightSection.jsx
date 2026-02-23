import React from "react";

function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    <div className="container ">
      <div className="row align-items-center">

        <div className="col-12 col-md-6 order-md-2 text-center mt-3">
          <img src={imageURL} className="img-fluid" alt="Product" />
        </div>
      
        <div className="col-12 col-md-6 p-5 mt-4 mt-md-5">
          <h1>{productName}</h1>
          <p>{productDesription}</p>
          <div>
            {/* <a href={learnMore} className="text-decoration-none">
              Learn More <i className="fa fa-long-arrow-right ms-1"></i>
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
