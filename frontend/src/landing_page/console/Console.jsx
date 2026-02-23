import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Console() {
    return (
        <Container className="mt-5">
            <Row className="align-items-center" style={{ marginTop: "150px", marginBottom: "100px" }}>
               
                <Col md={6}>
                    <img src="/media/images/ConsoleM.png" alt="console" className="img-fluid" />
                </Col>

               
                <Col md={6}>
                    <img
                        src="/media/images/logo.svg"
                        alt="logo"
                        className="mb-3"
                        style={{ filter: "grayscale(100%)", width: "150px" }}
                    />
                    <h2 className="fw-bold text-primary">console</h2>
                    <p className="text-muted">
                        The central dashboard for your Zerodha account. Manage your portfolio, analyze reports, transfer funds,
                        and gain real-time insights, all in one place.
                    </p>
                    <Link to="/login">
                        <Button variant="primary" className="w-20">LOGIN WITH KITE</Button>
                    </Link>

                    <p className="mt-2">
                        Don’t have an account? <Link to="/signup">Open an account</Link>
                    </p>
                </Col>
            </Row>

           
            <Row className="align-items-center mb-5">
                <Col md={6} className="text-start">
                    <h2 style={{ marginBottom: "30px" }}>Track Your Holdings</h2>
                    <p className="text-muted">
                        Get real-time insights into your investments, portfolio allocation, and market trends. With our advanced
                        analytics, you can easily monitor stock performance, review gains/losses, and identify opportunities to
                        rebalance your portfolio. Stay updated with live market movements to make informed investment decisions.
                    </p>
                </Col>
                <Col md={6} className="text-center">
                    <img style={{ height: "350px", width: "600px" }} src="/media/images/console1.webp" alt="Holdings Overview" className="img-fluid" />
                </Col>
            </Row>

          
            <Row className="align-items-center mb-5">
                <Col md={12} className="text-start">
                    <h2 style={{ marginBottom: "30px" }}>Detailed Reports & Analytics</h2>
                    <p className="text-muted">
                        Access in-depth reports on your portfolio, including capital gains, profit & loss statements, tax
                        implications, and performance trends. Our interactive charts and filters allow you to analyze data
                        effectively, helping you strategize better investment plans.
                    </p>
                    <p className="text-muted">
                        In addition, you can customize reports to gain deeper insights into your trades, asset allocation, and historical 
                        performance. With our intuitive analytics, you’ll always have the key data you need at your fingertips.
                    </p>
                </Col>
            </Row>

        
            <Row className="align-items-center" style={{ marginBottom: "100px" }}>
                <Col md={6} className="text-start">
                    <h2 style={{ marginBottom: "30px" }}>Seamless Fund Transfers</h2>
                    <p className="text-muted">
                        Enjoy hassle-free fund transfers between your Zerodha account and linked bank accounts. Our fast and secure
                        transactions ensure instant deposits and withdrawals, giving you complete flexibility to manage your
                        investments efficiently.
                    </p>
                </Col>
                <Col md={6} className="text-center">
                    <img src="/media/images/console3.png" alt="Funds Transfer" className="img-fluid" />
                </Col>
            </Row>
        </Container>
    );
}

export default Console;
