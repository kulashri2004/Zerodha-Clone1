import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

const TradingQA = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  const [openIndex, setOpenIndex] = useState(null);

  const questions = [
    {
      question: "What is intraday trading?",
      answer: (
        <p>
          Intraday trading, also known as day trading, involves buying and selling stocks within the same trading day.
          Traders aim to take advantage of short-term price movements.
          <br />
          <strong>Key Points:</strong>
          <ul>
            <li>Positions must be closed before the market closes.</li>
            <li>Leverage is often used to increase potential gains.</li>
            <li>Requires technical analysis and quick decision-making.</li>
          </ul>
        </p>
      )
    },
    {
      question: "How do stock options work?",
      answer: (
        <p>
          Stock options are contracts that give traders the right (but not the obligation) to buy or sell a stock at a
          predetermined price before a specific expiration date.
          <br />
          <strong>Key Points:</strong>
          <ul>
            <li>Call options allow buying at a fixed price.</li>
            <li>Put options allow selling at a fixed price.</li>
            <li>Used for hedging and speculation.</li>
          </ul>
        </p>
      )
    },
    {
      question: "What is margin trading?",
      answer: (
        <p>
          Margin trading lets investors borrow funds from their broker to buy more stocks than they could with their
          available cash. While it increases profit potential, it also increases risk.
          <br />
          <strong>Key Points:</strong>
          <ul>
            <li>Requires maintaining a minimum margin balance.</li>
            <li>Interest is charged on borrowed funds.</li>
            <li>Can lead to margin calls if losses exceed limits.</li>
          </ul>
        </p>
      )
    },
    {
      question: "What is a stop-loss order?",
      answer: (
        <p>
          A stop-loss order is a risk management tool used by traders to limit potential losses. It automatically
          triggers a sale when the stock price reaches a predefined level.
          <br />
          <strong>Example:</strong> If you buy a stock at ₹500 and set a stop-loss at ₹480, your stock will be sold
          automatically if the price drops to ₹480.
        </p>
      )
    },
    {
      question: "What is futures trading?",
      answer: (
        <p>
          Futures trading involves contracts where traders agree to buy or sell an asset at a fixed price on a future
          date. These contracts are often used for speculation or hedging.
          <br />
          <strong>Key Points:</strong>
          <ul>
            <li>Futures contracts are standardized and traded on exchanges.</li>
            <li>Traders can profit from both rising and falling markets.</li>
            <li>Futures require a margin deposit to maintain positions.</li>
          </ul>
        </p>
      )
    },
    {
      question: "What is short selling?",
      answer: (
        <p>
          Short selling is a strategy where traders sell borrowed shares, hoping to buy them back at a lower price.
          It's used to profit from falling stock prices.
          <br />
          <strong>Example:</strong> If a stock is at ₹200 and you expect it to fall to ₹180, you can short sell it.
          Later, you buy it back at ₹180 and make a ₹20 profit per share.
        </p>
      )
    },
    {
      question: "What are circuit breakers in the stock market?",
      answer: (
        <p>
          Circuit breakers are measures implemented by stock exchanges to **prevent extreme volatility**. They pause
          trading when the market falls or rises beyond a certain percentage within a short time.
          <br />
          <strong>Levels of Circuit Breakers:</strong>
          <ul>
            <li>Level 1: 10% movement triggers a 15-minute pause.</li>
            <li>Level 2: 15% movement triggers a 30-minute pause.</li>
            <li>Level 3: 20% movement stops trading for the rest of the day.</li>
          </ul>
        </p>
      )
    },
    {
      question: "What is the difference between NSE and BSE?",
      answer: (
        <p>
          **NSE (National Stock Exchange)** and **BSE (Bombay Stock Exchange)** are India's two major stock exchanges.
          <br />
          <strong>Key Differences:</strong>
          <ul>
            <li><strong>NSE:</strong> Larger trading volumes, home to NIFTY 50 index.</li>
            <li><strong>BSE:</strong> Oldest stock exchange in Asia, home to SENSEX index.</li>
            <li>NSE has a faster trade execution system compared to BSE.</li>
          </ul>
        </p>
      )
    },
    {
      question: "What is the difference between investing and trading?",
      answer: (
        <p>
          **Investing** focuses on long-term wealth creation, while **trading** focuses on short-term profits.
          <br />
          <strong>Comparison:</strong>
          <ul>
            <li><strong>Investing:</strong> Involves holding assets for years or decades.</li>
            <li><strong>Trading:</strong> Involves buying and selling assets within days, weeks, or months.</li>
            <li>Investors rely on **fundamental analysis**, traders use **technical analysis**.</li>
          </ul>
        </p>
      )
    }
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container" style={{marginTop:"80px"}}>
      <h2 className="text-center" style={{ marginBottom:"70px"}}>Trading Q&A by Zerodha</h2>

      <div className="list-group">
        {questions.map((qa, index) => (
          <div key={index} className="mb-2">
           
            <button
              className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
              onClick={() => toggleAnswer(index)}
            >
              {qa.question}
              <span>{openIndex === index ? "▲" : "▼"}</span>
            </button>

           
            {openIndex === index && (
              <div className="list-group-item text-muted">{qa.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TradingQA;
