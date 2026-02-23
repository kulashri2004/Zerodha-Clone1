import React from 'react';

function Awards() {
    return (
        <div className="container mt-5 p-3 p-md-5">
            <div className="row align-items-center p-3">

                
                <div className="col-12 col-md-6 text-center text-md-start mb-4 mb-md-0">
                    <img src="media/images/largestBroker.svg" alt="Largest Broker" className="img-fluid" style={{ maxWidth: "90%" }} />
                </div>

              
                <div className="col-12 col-md-6 p-md-5">
                    <h1 className="fs-3 fw-bold mb-3 text-md-start">Largest stock broker</h1>
                    <p className="mb-4 text-muted text-md-start">
                        Zerodha is your gateway to smarter, faster, and more efficient trading.
                        Experience the future of trading today!
                    </p>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <ul className="list-unstyled text-start">
                                <li>✔ Feature and Options</li>
                                <li>✔ Commodity derivatives</li>
                                <li>✔ Currency derivatives</li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul className="list-unstyled text-start">
                                <li>✔ Stocks & IPOs</li>
                                <li>✔ Direct mutual funds</li>
                                <li>✔ Bonds and Govt. Securities</li>
                            </ul>
                        </div>
                    </div>

                  
                    <div className="text-center text-md-start">
                        <img src="media/images/pressLogos.png" alt="Press Logos" className="img-fluid mt-4" style={{ maxWidth: "90%" }} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Awards;
