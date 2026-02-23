import React from 'react';
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

function Stats() {
    const navigate = useNavigate();

    const handleProduct = () => {
        navigate("/products");  
    };

    return (
        <div className="container mt-5 p-3 ms-md-5 text-start">
            <div className="row p-3 align-items-center">
                
               
                <div className="col-12 col-md-6">
                    <h1 className="fs-3 fw-bold mb-4 text-md-start ms-md-5 text-start">
                        Trust with confidence
                    </h1>
                    <h2 className="fs-4 text-md-start ms-md-5 mt-4">Customer-first always</h2>
                    <p className="text-muted text-md-start ms-md-5">
                        That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments
                        and contribute to 15% of daily retail exchange volumes in India.
                    </p>
                    <h2 className="fs-4 text-md-start ms-md-5">No spam or gimmicks</h2>
                    <p className="text-muted text-md-start ms-md-5">
                        No gimmicks, spam, "gamification", or annoying push notifications. High-quality apps that
                        you use at your pace, the way you like.
                    </p>
                    <h2 className="fs-4 text-md-start ms-md-5">The Zerodha universe</h2>
                    <p className="text-muted text-md-start ms-md-5">
                        Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you
                        tailored services specific to your needs.
                    </p>
                    <h2 className="fs-4 text-md-start ms-md-5">Do better with money</h2>
                    <p className="text-muted text-md-start ms-md-5">
                        With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but
                        actively help you do better with your money.
                    </p>
                </div>

               
                <div className="col-12 col-md-6 text-center">
                    <img src="media/images/ecosystem.png" alt="ecosystem" className="img-fluid mb-3 ms-md-5" style={{ maxWidth: "90%" }} />
                    
                    
                    <div className="d-flex align-items-center gap-4 flex-wrap justify-content-center justify-content-md-start">
                        <span 
                            className="text-primary ms-5" 
                            style={{ cursor: "pointer", textDecoration: "none", whiteSpace: "nowrap" }} 
                            onClick={handleProduct}
                        >
                            Explore our products <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </span>

                        <a 
                            href="http://localhost:5174" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-primary" 
                            style={{ textDecoration: "none", whiteSpace: "nowrap" }}
                        >
                            Try Kite demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;
