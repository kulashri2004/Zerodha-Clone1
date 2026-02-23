import React from "react";
import { Routes, Route } from "react-router-dom";
import Menu from "./Components/Menu"; 
import Summary from "./Components/Summary";
import Orders from "./Components/Orders";
import Holdings from "./Components/Holdings";
import Positions from "./Components/Positions";
import Funds from "./Components/Funds";
import Apps from "./Components/Apps";
import Home from "./Components/Home";
import { GeneralContextProvider } from "./Components/GeneralContext";

const App = () => {
  console.log("App component is rendering!");

  return (
    <GeneralContextProvider>
    <div className="app-container flex w-screen min-h-screen">
     
      <div className="content flex-1 p-4 bg-gray-800 text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </div>
    </div>
    </GeneralContextProvider>
  );
};

export default App;
