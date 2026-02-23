import React from "react";

function Brokerage() {
  return (
    <div className="container-fluid px-3 px-md-5">
      <div className="row p-4 mt-4 text-center border-top">
       
        <div className="col-md-8 col-12 p-3 text-md-start text-center">
          <a href="#" style={{ textDecoration: "none" }}>
            <h3 className="fs-5 fw-bold text-primary">Brokerage Calculator</h3>
          </a>
          <p className="small">
            Use our brokerage calculator to estimate charges on trades, including brokerage, taxes, and transaction fees.
          </p>
          <ul className="text-muted small text-start px-md-3" style={{ lineHeight: "1.8" }}>
            <li><strong>Equity Delivery:</strong> ₹0 (No brokerage)</li>
            <li><strong>Equity Intraday:</strong> ₹20 per executed order or 0.03% (whichever is lower)</li>
            <li><strong>Equity Futures:</strong> ₹20 per executed order</li>
            <li><strong>Equity Options:</strong> ₹20 per executed order</li>
            <li><strong>Commodity Futures:</strong> ₹20 per executed order</li>
            <li><strong>Currency Futures:</strong> ₹20 per executed order</li>
            <li><strong>Currency & Commodity Options:</strong> ₹20 per executed order</li>
            <li><strong>Call & Trade Charges:</strong> ₹50 + GST per order</li>
            <li><strong>DP Charges:</strong> ₹13.5 + GST per sell transaction</li>
            <li><strong>AMC:</strong> ₹300 per year (for demat accounts)</li>
          </ul>
        </div>

     
        <div className="col-md-4 col-12 p-3 text-md-start text-center">
          <a href="#" style={{ textDecoration: "none" }}>
            <h3 className="fs-5 fw-bold text-primary">List of Charges</h3>
          </a>
          <ul className="text-muted small text-start px-md-3" style={{ lineHeight: "1.8" }}>
            <li>SEBI Turnover Charges: 0.0001% on turnover</li>
            <li>Exchange Transaction Charges: Varies based on segment</li>
            <li>GST: 18% on brokerage & transaction charges</li>
            <li>STT (Securities Transaction Tax): Applicable on Equity & F&O</li>
            <li>Stamp Duty: As per state government rates</li>
            <li>Payment Gateway Charges: ₹9 per transfer</li>
            <li>Margin Pledge Charges: ₹30 + GST per pledge request</li>
            <li>Penalty for Short Margin: As per exchange regulations</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
