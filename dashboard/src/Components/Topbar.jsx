import React from "react";
import Menu from "./Menu";

const TopBar = () => {
  return (
    <div
      className="topbar-container"
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        backgroundColor: "#fff",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        padding: "10px 20px",
        zIndex: "1000",
      }}
    >
      <div className="indices-container" style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points">{100.2}</p>
          <p className="percent"></p>
        </div>
        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points">{100.2}</p>
          <p className="percent"></p>
        </div>
      </div>
      <Menu />
    </div>
  );
};

export default TopBar;
