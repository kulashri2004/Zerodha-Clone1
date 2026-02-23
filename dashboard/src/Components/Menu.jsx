import React from "react";
import { Link, useLocation } from "react-router-dom";

const Menu = () => {
  const location = useLocation(); // Get current route

  const menuItems = [
    { path: "/", label: "Dashboard" },
    { path: "/orders", label: "Orders" },
    { path: "/holdings", label: "Holdings" },
    { path: "/positions", label: "Positions" },
  ];

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} alt="Logo" />
      <div className="menus">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                style={{ textDecoration: "none" }}
              >
                <p
                  className={location.pathname === item.path ? "menu selected" : "menu"}
                  style={{ marginTop: index === 0 ? "30px" : "0px" }}
                >
                  {item.label}
                </p>
              </Link>
            </li>
          ))}
        </ul>
        <hr />
        
        <div className="profile">
          <div className="avatar">ZU</div>
          <p className="username" style={{ color: "black", marginTop: "20px" }}>
            USERID
          </p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
