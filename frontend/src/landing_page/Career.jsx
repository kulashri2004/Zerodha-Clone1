import React from "react";


const Career = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center p-5 px-4 mt-5">
  
      <div className="border rounded p-4 w-100 text-center bg-light  " style={{ maxWidth: "600px" }}>
        <p className="fw-semibold fs-5 ">There are no job openings currently.</p>
      </div>

    
      <div className="mt-4 text-muted text-center" style={{ maxWidth: "600px" }}>
        <p>
          Zerodha accepts applications for open roles only through this Careers page. 
          And all official communication with the HR team at Zerodha will be through 
          <a href="mailto:careers@zerodha.com" className="text-decoration-none text-primary"> careers@zerodha.com</a>.
        </p>
      </div>
    </div>
  );
};

export default Career;
