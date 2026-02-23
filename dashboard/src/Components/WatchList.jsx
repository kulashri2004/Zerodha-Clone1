import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import { Tooltip, Grow } from "@mui/material";
import { getStockData } from "../api/api"; // Ensure import
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";
import { watchlist } from "../data/data";
import { DoughnutChart } from "./DoughnoutChart";

const WatchList = () => {
  const [liveStockData, setLiveStockData] = useState({});

  useEffect(() => {
    const fetchLivePrices = async () => {
      try {
        const updatedStockData = {};
        await Promise.all(
          watchlist.map(async (stock) => {
            const stockData = await getStockData(stock.name); // API call
            if (stockData) {
              updatedStockData[stock.name] = stockData.c; // Store live price
            }
          })
        );
        setLiveStockData(updatedStockData);
      } catch (error) {
        console.error("Error fetching stock prices:", error);
      }
    };

    fetchLivePrices(); // Fetch on mount
    const interval = setInterval(fetchLivePrices, 10000); // Fetch every 10s

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input style={{marginTop:"50px"}}
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => (
          <WatchListItem stock={stock} livePrice={liveStockData[stock.name]} key={index} />
        ))}
      </ul>

      <DoughnutChart
        data={{
          labels: watchlist.map((stock) => stock.name),
          datasets: [
            {
              label: "Price",
              data: watchlist.map((stock) => liveStockData[stock.name] || stock.price),
            
              backgroundColor: [
                "rgba(255, 99, 132, 0.5)",
                "rgba(54, 162, 235, 0.5)",
                "rgba(255, 206, 86, 0.5)",
                "rgba(75, 192, 192, 0.5)",
                "rgba(153, 102, 255, 0.5)",
                "rgba(255, 159, 64, 0.5)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
          ],
        }}
      />
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock, livePrice }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  return (
    <li onMouseEnter={() => setShowWatchlistActions(true)} onMouseLeave={() => setShowWatchlistActions(false)}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? <KeyboardArrowDown className="down" /> : <KeyboardArrowUp className="up" />}
          <span className="price" style={{color:"black"}}>{livePrice || stock.price}</span> {/* Live price here */}
        </div>
      </div>
      {showWatchlistActions && <WatchListActions uid={stock.name} />}
    </li>
  );
};

const WatchListActions = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  return (
    <span className="actions">
      <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow} onClick={() => generalContext.openBuyWindow(uid)}>
        <button className="buy" style={{borderRadius:"2px",height:"30px",width:"50px",marginRight:"30%"}}>Buy</button>
      </Tooltip>
      {/* <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow}>
        <button className="sell" style={{borderRadius:"2px",height:"30px",width:"50px"}}>Sell</button>
      </Tooltip>
      <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow}>
        <button className="action">
          <BarChartOutlined className="icon" />
        </button>
      </Tooltip>
      <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
        <button className="action">
          <MoreHoriz className="icon" />
        </button>
      </Tooltip> */}
    </span>
  );
};
