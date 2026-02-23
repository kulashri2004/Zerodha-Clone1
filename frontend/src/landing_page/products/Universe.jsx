import React from 'react';
import { useNavigate } from 'react-router-dom';

function Universe() {
    const navigate = useNavigate();

    const handleSignUp = () => {
        navigate("/signup");
    };

    return (
        <div className="container mt-5">
            <div className="text-center">
                <h1>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
            </div>

            <div className="row text-center">
             
                {[
                    { img: "media/images/zerodhaFundhouse.png", text: "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",style: { width: "50%" }},
                    { img: "media/images/streakLogo.png", text: "Systematic trading platform that allows you to create and backtest strategies without coding.", style: { width: "50%" } },
                    { img: "media/images/dittoLogo.png", text: "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.", style: { width: "40%" } },
                    { img: "media/images/smallcaseLogo.png", text: "Our asset management venture that is creating simple and transparent index funds to help you save for your goals." },
                    { img: "media/images/goldenpiLogo.png", text: "Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs." },
                    { img: "media/images/sensibullLogo.svg", text: "Our asset management venture that is creating simple and transparent index funds to help you save for your goals." }
                ].map((item, index) => (
                    <div key={index} className="col-12 col-md-6 col-lg-4 p-3 mt-3">
                        <img src={item.img} className="img-fluid" style={item.style} alt="Partner Logo" />
                        <p className="text-small text-muted">{item.text}</p>
                    </div>
                ))}
            </div>

         
            <button 
                className="btn btn-primary btn-lg d-block mx-auto mt-3" 
                onClick={handleSignUp} 
                style={{ width: "80%", maxWidth: "300px" }} 
            >
                Sign up for free
            </button>
        </div>
    );
}

export default Universe;
