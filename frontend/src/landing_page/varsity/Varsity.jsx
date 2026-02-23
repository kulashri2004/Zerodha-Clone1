import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Varsity = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedArticle, setSelectedArticle] = useState(null);

  const articles = [
    {
      title: "Stock Market Basics",
      description: "Learn the fundamentals of stock markets, exchanges, and trading.",
      image: "/media/images/stock1.webp",
      content: (
        <div>
          <h5>Stock Market Basics</h5>
          <p>
            The stock market is a marketplace where investors buy and sell shares of publicly traded companies.
            Understanding the basics of stocks, exchanges, and market trends is essential for any investor.
          </p>
          <ul>
            <li>What is the stock market?</li>
            <li>How do stock exchanges work?</li>
            <li>Introduction to investing</li>
          </ul>
        </div>
      )
    },
    {
      title: "Technical Analysis",
      description: "A detailed guide to reading stock charts and predicting trends.",
      image: "/media/images/stock2.jpg",
      content: (
        <div>
          <h5>Technical Analysis</h5>
          <p>
            Technical analysis involves studying historical price data, charts, and indicators to predict future stock movements.
          </p>
          <ul>
            <li>Support and resistance levels</li>
            <li>Moving averages</li>
            <li>Candlestick patterns</li>
          </ul>
        </div>
      )
    },
    {
      title: "Fundamental Analysis",
      description: "Understand financial statements, ratios, and company valuations.",
      image: "/media/images/stock3.jpg",
      content: (
        <div>
          <h5>Fundamental Analysis</h5>
          <p>
            Fundamental analysis involves evaluating a company's financial health, including its balance sheet, income statement, and key ratios.
          </p>
          <ul>
            <li>Reading financial statements</li>
            <li>Understanding P/E ratios</li>
            <li>Company valuation techniques</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <div className="container p-5">
      <h2 className="text-center mb-5 fw-bold mt-5 ">Explore Varsity</h2>

   
      <div className="row g-4">
        {articles.map((article, index) => (
          <div key={index} className="col-lg-4 col-md-6">
            <div className="card shadow-sm border-0">
              <img src={article.image} className="card-img-top" alt={article.title} />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">{article.title}</h5>
                <p className="card-text text-muted">{article.description}</p>
                <Button variant="primary" size="sm" onClick={() => setSelectedArticle(article)}>
                  Read More →
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

    
      {selectedArticle && (
        <Modal show={true} onHide={() => setSelectedArticle(null)} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedArticle.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{selectedArticle.content}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setSelectedArticle(null)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default Varsity;
