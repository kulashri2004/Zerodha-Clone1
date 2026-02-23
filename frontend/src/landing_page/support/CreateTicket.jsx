import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import { FaUserCircle, FaChartBar, FaWallet, FaGlobe } from "react-icons/fa";
import { BsBoxArrowInDownRight } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";

const categories = [
  {
    title: "Account Opening",
    icon: <FaPlusCircle className="me-2" />,
    links: [
      "Resident individual",
      "Minor",
      "Non Resident Indian (NRI)",
      "Company, Partnership, HUF and LLP",
      "Glossary",
    ],
  },
  {
    title: "Your Zerodha Account",
    icon: <FaUserCircle className="me-2" />,
    links: [
      "Your Profile",
      "Account modification",
      "Client Master Report (CMR) and Depository Participant (DP)",
      "Nomination",
      "Transfer and conversion of securities",
    ],
  },
  {
    title: "Kite",
    icon: <FaChartBar className="me-2" />,
    links: [
      "IPO",
      "Trading FAQs",
      "Margin Trading Facility (MTF) and Margins",
      "Charts and orders",
      "Alerts and Nudges",
      "General",
    ],
  },
  {
    title: "Funds",
    icon: <FaWallet className="me-2" />,
    links: ["Add money", "Withdraw money", "Add bank accounts", "eMandates"],
  },
  {
    title: "Console",
    icon: <BsBoxArrowInDownRight className="me-2" />,
    links: [
      "Portfolio",
      "Corporate actions",
      "Funds statement",
      "Reports",
      "Profile",
      "Segments",
    ],
  },
  {
    title: "Coin",
    icon: <FaGlobe className="me-2" />,
    links: [
      "Understanding mutual funds and Coin",
      "Coin app",
      "Coin web",
      "Transactions and reports",
      "National Pension Scheme (NPS)",
    ],
  },
];

const CreateTicket = () => {
  return (
    <div className="container">
      <div className="row mt-5 mb-5">
        <h1 className="text-muted text-start fs-5 p-3">To create a ticket, select a relevant topic</h1>

       
        {categories.map((category, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-sm-12 p-4">
            <h4 className="fw-bold">
              {category.icon}
              {category.title}
            </h4>
            {category.links.map((link, idx) => (
              <div key={idx}>
                <a
                  href="#"
                  className="text-decoration-none d-block text-primary"
                  style={{ lineHeight: "2" }}
                >
                  {link}
                </a>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateTicket;
