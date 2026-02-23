import React, { useState, useEffect } from "react";
import TopBar from "./TopBar";
import WatchList from "./WatchList";
import { getStockData } from "../api/api"; // Import API function
import { VerticalGraph } from "./VerticalGraph";
import axios from "axios";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const [liveStockData, setLiveStockData] = useState({}); // Store live stock prices

  // Fetch holdings from local API
  useEffect(() => {
    axios.get("http://localhost:3001/allHoldings").then((res) => {
      setAllHoldings(res.data);
    });
  }, []);

  // Fetch live stock prices every 10 seconds
  useEffect(() => {
    const fetchLivePrices = async () => {
      const updatedStockData = {};
      for (const stock of allHoldings) {
        const stockData = await getStockData(stock.name);
        if (stockData) {
          updatedStockData[stock.name] = stockData.c; // Store current price
        }
      }
      setLiveStockData(updatedStockData);
    };

    fetchLivePrices(); // Fetch on first load
    const interval = setInterval(fetchLivePrices, 10000); // Fetch every 10s

    return () => clearInterval(interval); // Cleanup on unmount
  }, [allHoldings]);

  return (
    <>
      <TopBar />
      <div className="holdings-container" style={{ display: "flex", height: "100vh" }}>
        <div style={{ width: "33%", borderRight: "1px solid #eee", height: "100vh", overflowY: "auto" }}>
          <WatchList />
        </div>
        <div style={{ width: "67%", padding: "20px", overflowY: "auto", height: "100vh",marginTop:"50px" }}>
          <h3 className="title">Holdings ({allHoldings.length})</h3>

          <div className="order-table">
            <table>
              <thead>
                <tr>
                  <th>Instrument</th>
                  <th>Qty.</th>
                  <th>Avg. cost</th>
                  <th>Live Price</th>
                  <th>Cur. val</th>
                  <th>P&L</th>
                  <th>Net chg.</th>
                  <th>Day chg.</th>
                </tr>
              </thead>

              <tbody>
                {allHoldings.map((stock, index) => {
                  const livePrice = liveStockData[stock.name] || stock.price; // Use live price if available
                  const curValue = livePrice * stock.qty;
                  const isProfit = curValue - stock.avg * stock.qty >= 0.0;
                  const profClass = isProfit ? "profit" : "loss";

                  return (
                    <tr key={index}>
                      <td>{stock.name}</td>
                      <td>{stock.qty}</td>
                      <td>{stock.avg.toFixed(2)}</td>
                      <td>{livePrice.toFixed(2)}</td>
                      <td>{curValue.toFixed(2)}</td>
                      <td className={profClass}>
                        {(curValue - stock.avg * stock.qty).toFixed(2)}
                      </td>
                      <td className={profClass}>{stock.net}</td>
                      <td className={profClass}>{stock.day}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <VerticalGraph data={{ labels: allHoldings.map(s => s.name), datasets: [{ label: "Live Price", data: allHoldings.map(s => liveStockData[s.name] || s.price), backgroundColor: "rgba(255, 99, 132, 0.5)" }] }} />
        </div>
      </div>
    </>
  );
};

export default Holdings;
