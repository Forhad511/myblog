import React, { useState, useEffect } from "react";
import "./NavBar.css";
import { Link, useLocation } from "react-router-dom";
export default function BottomBar({ setSideBar }) {
  const location = useLocation();
  const handleDrawer = () => {
    setSideBar((prev) => !prev);
  };

  const [placeable, setPlaceable] = useState(true);

  useEffect(() => {
    let array = ["/product", "/checkout", "/cart", "/pay"];

    let flag = false;
    array.forEach((m) => {
      if (location.pathname.includes(m)) {
        flag = true;
        return;
      }
    });
    if (flag) {
      setPlaceable(false);
    } else {
      setPlaceable(true);
    }
  }, [location.pathname]);

  return (
    <div
      className="card p05 flex bottomBar"
      style={!placeable ? { display: "none" } : {}}
    >
      <div className="item" onClick={() => handleDrawer()}>
        <img src={require("../../assets/icons/shop.svg").default} alt="" />
        <span>Category</span>
      </div>

      <Link className="item" to="/account" aria-label="account">
        <img src={require("../../assets/icons/account.svg").default} alt="" />
        <span>Account</span>
      </Link>

      <Link className="bottomBarHomeContainer item" to="/" aria-label="home">
        <div className="bottomBarHome">
          <img
            style={{ width: "40px", height: "40px" }}
            src={
              require("../../assets/platforms/wholesalecart_icon.svg").default
            }
            alt=""
          />
        </div>
      </Link>
      <a className="item" href="tel:+8809666-799125" aria-label="phone">
        <img src={require("../../assets/icons/call.svg").default} alt="" />
        <span>Call</span>
      </a>
      <a
        className="item"
        href="https://m.me/WholesaleCard"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="chat"
      >
        <img src={require("../../assets/icons/chat.svg").default} alt="" />
        <span>Chat</span>
      </a>
    </div>
  );
}
