import React, { useEffect, useState } from "react";
import AccountNavbar from "../../components/Account/Navbar";
import AccountStats from "../../components/Account/stats";
import { useHistory, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Account.css";
import InvoicesByStatus from "./InvoiceByStatus";

export default function Invoices() {
  const auth = useSelector((state) => state.auth.isAuthenticated);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (!auth) {
      console.log(auth);
      history.replace("/login");
    }
  }, [auth, history]);

  useEffect(() => {
    let status = location?.search;
    if (status) {
      try {
        setCurrent(status.substring(8));
      } catch (error) {
        setCurrent("pending");
      }
    } else {
      setCurrent("pending");
    }
  }, [location]);

  const [orderID, setOrderID] = useState("");
  const [text, setText] = useState("");
  const [current, setCurrent] = useState("");

  let status = ["pending", "submitted", "returned", "completed", "all"];

  return (
    <div className="account">
      <div className="phoneOnly">
        <AccountNavbar />
      </div>
      <div className="accContent">
        <div
          className="card p1"
          style={{
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            borderBottom: "none",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <div className="accStats">
            {status.map((el) => (
              <div
                className={
                  current === el
                    ? "accStatsPart accStatsPartActive"
                    : "accStatsPart"
                }
                onClick={() => {
                  setCurrent(el);
                  history.push(`/account/delivery/1?status=${el}`);
                }}
              >
                <span
                  className="accStatTitle"
                  style={{ textTransform: "capitalize" }}
                >
                  {el}
                </span>
              </div>
            ))}
          </div>
          <div
            className={
              window.innerWidth > 600 ? "accDeposit" : "accDeposit mt15"
            }
          >
            <input
              type="text"
              className="accDepositInput"
              placeholder="Invoice ID"
              style={{ height: "36px" }}
              onChange={(e) => {
                if (e.target.value) {
                  setText(e.target.value);
                } else {
                  setText("");
                  setOrderID("");
                }
              }}
              onKeyPress={(e) => {
                if (e.code === "Enter") {
                  setOrderID(text);
                }
              }}
            />
            <button
              className="bt"
              style={{ height: "36px" }}
              onClick={() => {
                setOrderID(text);
              }}
            >
              Search
            </button>
          </div>
        </div>
        {current && (
          <InvoicesByStatus
            filter={current}
            order_code={orderID}
            limit={current === "pending" ? 400 : 50}
            setFilter={setCurrent}
          />
        )}
      </div>
    </div>
  );
}
