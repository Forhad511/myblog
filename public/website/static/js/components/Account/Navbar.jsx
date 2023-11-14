import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../actions/authAction";
import Popup from "../Popup/Popup";
import Amount from "../Amount";
import { getCustomerInfo } from "../../api/Account";
import {
  IoHomeOutline,
  IoBagOutline,
  IoCashOutline,
  IoCarOutline,
  IoPeopleOutline,
  IoSettingsOutline,
  IoExitOutline,
  IoChatbubblesOutline,
  IoCall,
} from "react-icons/io5";

function listSelect() {}

export default function Navbar() {
  const dispatch = useDispatch();
  const [popUp, setPopUp] = useState("none");
  const location = useLocation();

  const [data, setData] = useState(false);

  useEffect(() => {
    getCustomerInfo(setData);
  }, []);

  let name = localStorage.profile
    ? JSON.parse(localStorage.profile).name
    : data
    ? data.phone
    : "";

  let balance = data ? data.balance : 0;

  const logOut = () => {
    dispatch(logoutUser());
    // setPopUp("none");
  };

  return (
    <div className="accNav">
      <div className="accNavProfile">
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: "80px",
            color: "#fff",
            background: "#aaa",
            marginBottom: "8px",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            fontSize: "20px",
          }}
        >
          {name ? name.charAt(0) : "U"}
        </div>
        <h1
          style={{
            fontSize: "18px",
            textTransform: "uppercase",
            marginBottom: "4px",
          }}
        >
          {name}
        </h1>

        <div className="accNavBalance">
          <span className="accNavAmount">
            Balance: <Amount amount={balance}></Amount>
          </span>
        </div>
      </div>

      {data?.crm_manager && (
        <div style={{ borderBottom: "3px solid #eee" }}>
          <div
            className="flexRow p1"
            style={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <div>
              {data?.crm_manager.id !== 16716 && (
                <span style={{ fontWeight: "bold" }}>
                  {data?.crm_manager.name}
                </span>
              )}
              <p
                style={{
                  fontSize: "14px",
                  margin: "0.125rem 0",
                  color: "#444",
                  fontWeight: 600,
                }}
              >
                {data?.crm_manager.id === 16716
                  ? "Customer Support"
                  : "Your Account Manager"}
              </p>
              <p
                style={{
                  fontSize: "13px",
                  color: "#444",
                  fontWeight: 600,
                  marginTop: "0.225rem",
                }}
              >
                {data?.crm_manager.hotline}
              </p>
            </div>
            <a
              href={`tel:${data?.crm_manager.hotline}`}
              style={{
                width: "32px",
                height: "32px",
                background: "#111",
                borderRadius: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IoCall color="#fff" />
            </a>
          </div>
          <p
            style={{
              fontSize: "14px",
              fontWeight: 600,
              backgroundColor: "#FBF2CD",
              textAlign: "center",
              padding: "0.5rem",
            }}
          >
            Office Time: 10AM - 7PM
          </p>
        </div>
      )}

      {popUp === "logout" && (
        <Popup
          type="regular"
          setPopUp={setPopUp}
          title="Confirmation"
          message="Are you sure want to logout?"
          bt1Text="Yes"
          bt1Action={logOut}
          bt2Text="No"
        />
      )}

      <div className="accNavList">
        <ul>
          <li
            className={
              location.pathname.length < 12 ? "accNavListSelected" : ""
            }
          >
            <Link to="/account" aria-label="account" title="Account">
              <IoHomeOutline color="#111" />
              <div className={"accNavListDiv"}>Dashboard</div>
            </Link>
          </li>
          <li
            className={
              location.pathname.includes("/account/orders")
                ? "accNavListSelected"
                : ""
            }
          >
            <Link to="/account/orders" aria-label="account" title="Account">
              <IoBagOutline color="#111" />
              <div className={"accNavListDiv"}>Orders</div>
            </Link>
          </li>
          <li
            className={
              location.pathname.includes("/account/balance")
                ? "accNavListSelected"
                : ""
            }
          >
            <Link to="/account/balance" aria-label="account" title="Account">
              <IoCashOutline color="#111" />
              <div className={"accNavListDiv"}>Balance</div>
            </Link>
          </li>
          <li
            className={
              location.pathname.includes("/account/delivery")
                ? "accNavListSelected"
                : ""
            }
          >
            <Link to="/account/delivery" aria-label="account" title="Account">
              <IoCarOutline size={18} color="#111" />
              <div className={"accNavListDiv"}>Delivery</div>
            </Link>
          </li>
          <li
            className={
              location.pathname.includes("/account/support")
                ? "accNavListSelected"
                : ""
            }
          >
            <Link to="/account/support" aria-label="account" title="Support">
              <IoChatbubblesOutline size={18} color="#111" />
              <div className={"accNavListDiv"}>Support</div>
            </Link>
          </li>

          <li
            className={
              location.pathname.includes("/account/agentship")
                ? "accNavListSelected"
                : ""
            }
          >
            <Link
              to="/account/agentship"
              aria-label="account"
              title="Agentship"
            >
              <IoPeopleOutline size={18} color="#111" />
              <div className={"accNavListDiv"}>Agentship</div>
            </Link>
          </li>

          <li
            className={
              location.pathname.includes("/account/setting")
                ? "accNavListSelected"
                : ""
            }
          >
            <Link to="/account/settings" aria-label="account" title="Account">
              <IoSettingsOutline size={18} color="#111" />
              <div className={"accNavListDiv"}>Settings</div>
            </Link>
          </li>
          <li
            style={{
              display: "flex",
              padding: "16px 24px",
              alignItems: "center",
            }}
            onClick={() => logOut()}
          >
            <IoExitOutline size={18} />
            <div className="accNavListDiv">Logout</div>
          </li>
        </ul>
      </div>
    </div>
  );
}
