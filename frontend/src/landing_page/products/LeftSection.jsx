import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
 
}) {
  return (
    <div className="container ">
      <div className="row align-items-center">
      
        <div className="col-lg-6 col-md-6 col-sm-12 text-center">
          <img
            src={imageURL}
            alt="Product"
            className="img-fluid"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>

       
        <div className="col-lg-6 col-md-6 col-sm-12 p-4 mt-md-0">
          <h1>{productName}</h1>
          <p>{productDesription}</p>

         
          <div className="mt-3">
            {/* <a href="https://frontend-elequlc4t-tejashwinis-projects-5dfe6e74.vercel.app/" className="text-decoration-none">
              Try Demo <i className="fa fa-long-arrow-right ms-1"></i>
            </a>
            <a href={learnMore} className="text-decoration-none mx-4">
              Learn More <i className="fa fa-long-arrow-right ms-1"></i>
            </a> */}
          </div>

          {/* App Store Badges */}
          {/* <div className="mt-4">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" className="img-fluid" style={{ maxHeight: "50px" }} />
            </a>
            <a href={appStore} className="ms-3">
              <img src="media/images/appstoreBadge.svg" className="img-fluid" style={{ maxHeight: "50px" }} />
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
