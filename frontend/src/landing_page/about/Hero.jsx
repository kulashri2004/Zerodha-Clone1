import React from 'react';

function Hero() {
    return ( 
        <div className="container px-4 py-5 mt-5">
           
            <div className="row justify-content-center text-center">
                <div className="col-lg-8 col-md-10">
                    <h1 className="fs-2">
                        We pioneered the discount broking model in India. 
                        Now, we are breaking ground with our technology.
                    </h1>
                </div>
            </div>

          
            <div className="row mt-5 border-top py-5 text-muted">
                <div className="col-lg-6 col-md-12 px-md-4 px-3 text-md-start text-start text-justify">
                    <p className="text-justify">
                        We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers 
                        that traders and investors face in India in terms of cost, support, and technology. We named the 
                        company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.
                    </p>
                    <p className="text-justify">
                        Today, our disruptive pricing models and in-house technology have made us the biggest stock 
                        broker in India.
                    </p>
                    <p className="text-justify">
                        Over 1+ Crore clients place millions of orders every day through our powerful ecosystem of 
                        investment platforms, contributing over 15% of all Indian retail trading volumes.
                    </p>
                </div>
                <div className="col-lg-6 col-md-12 px-md-4 px-3 text-md-start text-start text-justify">
                    <p className="text-justify">
                        In addition, we run a number of popular open online educational and community initiatives to 
                        empower retail traders and investors.
                    </p>
                    <p className="text-justify">
                        <a href="#" className="text-decoration-none">Rainmatter</a>, our fintech fund and incubator, has 
                        invested in several fintech startups with the goal of growing the Indian capital markets.
                    </p>
                    <p className="text-justify">
                        And yet, we are always up to something new every day. Catch up on the latest updates on our 
                        blog or see what the media is saying about us.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Hero;
