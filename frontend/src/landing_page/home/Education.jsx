import React from 'react';
import { Link } from "react-router-dom";

function Education() {
    return (
        <div className="container mt-5">
            <div className="row d-flex align-items-center flex-column flex-md-row">
                
              
                <div className="col-12 col-md-6 text-center text-md-start">
                    <img 
                        src="media/images/education.svg" 
                        alt="Education" 
                        className="img-fluid" 
                        style={{ width: "70%", marginTop: "-30px" }} 
                    />
                </div>
                
              
                <div className="col-12 col-md-6 text-center text-md-start mt-4 mt-md-0">
                    <h1 className='mb-3 fs-2 text-start p-3'>Free and open market education</h1>
                    <p className='text-start p-3'>
                        Varsity, the largest online stock market education book in the world covering everything from 
                        the basics to advanced trading.
                    </p>
                    <Link to="/varsity" className="text-primary ms-3" style={{ textDecoration: "none", display: "inline-block", marginBottom: "10px" }}>
                        Varsity <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </Link>

                    <p className='mt-4 text-start p-3'>TradingQ&A, the most active trading and investment community in India for all your market-related queries.</p>
                    <Link to="/tradingQA" className="text-primary ms-3" style={{ textDecoration: "none", display: "inline-block" }}>
                        TradingQ&A <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Education;
