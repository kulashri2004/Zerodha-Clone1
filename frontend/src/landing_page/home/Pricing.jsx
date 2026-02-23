import React from 'react';
import { useNavigate } from 'react-router-dom';

function Pricing() {
    const navigate = useNavigate();
    const handlePricing = () => {
        navigate("/pricing");
    };

    return (  
        <div className="container mt-5">
            <div className="row p-md-3 d-flex align-items-center mt-5">
                
               
                <div className="col-12 col-md-4 text-center text-md-start mb-4 mb-md-0">
                    <h1 className='mb-3 fs-2 text-start p-3'>Unbeatable pricing</h1>
                    <p className='text-start p-3'>
                        We pioneered the concept of discount broking and price transparency in India.
                        Flat fees and no hidden charges.
                    </p>
                    <span className="text-primary d-inline-block mt-3 ms-3" 
                          style={{ cursor: "pointer", textDecoration: "none" }} 
                          onClick={handlePricing}>
                        See pricing <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </span>
                </div>

              
                <div className="col-12 col-md-6 offset-md-2">
                    <div className="row text-center">
                        <div className="col-12 col-md-6 p-3 border">
                            <h1 className='mb-2'>₹0</h1>
                            <p>Free equity delivery<br/>and direct mutual funds</p>
                        </div>
                        <div className="col-12 col-md-6 p-3 border mt-3 mt-md-0">
                            <h1 className='mb-2'>₹20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Pricing;
