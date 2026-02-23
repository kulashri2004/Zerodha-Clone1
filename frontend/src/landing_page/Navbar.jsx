import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
    const location = useLocation(); 

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 992);
            if (window.innerWidth >= 992) {
                setIsMenuOpen(false); 
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top border-bottom">
            <div className="container">
                {/* Logo */}
                <Link className="navbar-brand" to="/" onClick={closeMenu}>
                    <img src="media/images/logo.svg" alt="Logo" className="img-fluid" style={{ width: "140px" }} />
                </Link>

               
                {!isMobile && (
                    <div className="collapse navbar-collapse justify-content-end">
                        <ul className="navbar-nav">
                            {["signup", "about", "products", "pricing", "support"].map((route) => (
                                <li className="nav-item" key={route}>
                                    <Link 
                                        className={`nav-link ${location.pathname === `/${route}` ? "text-primary " : ""}`} 
                                        to={`/${route}`}
                                    >
                                        {route.charAt(0).toUpperCase() + route.slice(1)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

              
                <button className="btn border-0" onClick={toggleMenu}>
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>

           
            {isMenuOpen && (
                <div className="container-fluid position-absolute bg-white shadow p-4" style={{ top: "60px", width: "100%", zIndex: "1000" }}>
                    <div className="row">
                      
                        {isMobile && (
                            <div className="col-12 mb-3">
                                <ul className="list-unstyled text-center">
                                    {["signup", "about", "products", "pricing", "support"].map((route) => (
                                        <li key={route}>
                                            <Link 
                                                className={`dropdown-item ${location.pathname === `/${route}` ? "text-primary fw-bold" : ""}`} 
                                                to={`/${route}`} 
                                                onClick={closeMenu}
                                            >
                                                {route.charAt(0).toUpperCase() + route.slice(1)}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        
                        <div className="col-md-6 p-3">
                            <h6 className="fw-bold">Trading Platforms</h6>
                            <ul className="list-unstyled">
                                <li className="d-flex align-items-center gap-2">
                                    <img src="/media/images/logo.png" alt="Kite" width="20" />
                                    <a href="http://localhost:5174" className="dropdown-item" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                                        Kite - Trading
                                    </a>
                                </li>
                                <li className="d-flex align-items-center gap-2">
                                    <img src="media/images/console.svg" alt="Console" width="20" />
                                    <Link 
                                        to="/console" 
                                        className={`dropdown-item ${location.pathname === "/console" ? "text-primary fw-bold" : ""}`} 
                                        onClick={closeMenu}
                                    >
                                        Console
                                    </Link>
                                </li>
                            </ul>
                        </div>

                      
                        <div className="col-md-6 p-3">
                            <h6 className="fw-bold">Education</h6>
                            <ul className="list-unstyled">
                                <li className="d-flex align-items-center gap-2">
                                    <img src="media/images/var.png" alt="Varsity" width="20" />
                                    <Link 
                                        to="/varsity" 
                                        className={`dropdown-item ${location.pathname === "/varsity" ? "text-primary fw-bold" : ""}`} 
                                        onClick={closeMenu}
                                    >
                                        Varsity
                                    </Link>
                                </li>
                                <li className="d-flex align-items-center gap-2">
                                    <img src="media/images/trad.png" alt="Trading Q&A" width="20" />
                                    <Link 
                                        to="/tradingQA" 
                                        className={`dropdown-item ${location.pathname === "/tradingQA" ? "text-primary fw-bold" : ""}`} 
                                        onClick={closeMenu}
                                    >
                                        Trading Q&A
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
