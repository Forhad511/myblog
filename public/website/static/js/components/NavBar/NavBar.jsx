import React, { Suspense, lazy, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./NavBar.css";
import { getCount } from "../../actions/countAction";
import ImagePopup from "../ImagePopup";
const SearchProduct = lazy(() => import("../SearchProduct"));

export default function NavBar() {
  const [scroll, setScroll] = useState(true);
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 200) {
      if (window.screen.width <= 768) {
        setScroll(false);
      } else {
        setScroll(true);
      }
    }
    if (position < 50) {
      setScroll(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (localStorage.getItem("agl")) dispatch(getCount());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let profile = localStorage.getItem("profile");

  let name = false;
  let phone = false;
  if (profile) {
    profile = JSON.parse(profile);
    name = profile.name ? profile.name.replace(/ .*/, "") : false;
    phone = profile.phone;
  }

  let useNav = (
    <nav style={!scroll ? { height: "64px" } : {}}>
      <div className={scroll ? "navStart" : "navStart display-none"}>
        <a
          href="/"
          style={{
            display: "flex",
            justifyContent: "center",
            color: "white",
          }}
          aria-label="home"
        >
          <img
            src={
              require("../../assets/platforms/wholesalecart_logo.svg").default
            }
            alt=""
          />
        </a>
      </div>
      <div className="navSearch" style={!scroll ? { margin: "0px" } : {}}>
        <Suspense fallback={""}>
          <SearchProduct id="searchprod" />
        </Suspense>
      </div>
      <div
        className={
          scroll ? "navIconsContainer" : "navIconsContainer display-none"
        }
      >
        <Link to="/cart" aria-label="cart" title="Cart">
          <img
            style={{ padding: "2px" }}
            src={require("../../assets/icons/cart.svg").default}
            alt=""
          />
          <span style={{ fontSize: "12px", fontWeight: "bold" }}>
            {count.cart_count ? count.cart_count : "0"}
          </span>
        </Link>
        <Link to="/wishlist" aria-label="wishlist" title="Wishlist">
          <img
            style={{ padding: "9px" }}
            src={require("../../assets/icons/favourite.svg").default}
            alt=""
          />
          <span
            style={{
              marginLeft: "-6px",
              fontSize: "12px",
              fontWeight: "bold",
            }}
          >
            {count.wishlist_count ? count.wishlist_count : "0"}
          </span>
        </Link>

        {/* {window.innerWidth > 800 && (
          <a
            href="https://m.me/WholesaleCard"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="chat"
            title="Live Chat"
          >
            <img
              src={require("../../assets/icons/chat_white.svg").default}
              alt=""
            />
          </a>
        )} */}

        <Link
          to="/account"
          aria-label="account"
          title="Account"
          style={
            localStorage.getItem("prev") &&
            navigator.userAgent !== "wholesalecartapp"
              ? { border: "4px solid red" }
              : {}
          }
        >
          <div
            style={{
              display: "grid",
              alignItems: "center",
              gridTemplateColumns: "44px 1fr",
            }}
          >
            <img
              style={{ padding: "6px" }}
              src={require("../../assets/icons/person.svg").default}
              alt=""
            />
            {name ? (
              <div className="onlyPc">
                <div style={{ fontSize: "14px", fontWeight: "bold" }}>
                  {name}
                </div>
                <div style={{ fontSize: "13px" }}>{phone}</div>
              </div>
            ) : (
              ""
            )}
          </div>
        </Link>
      </div>
    </nav>
  );

  return useNav;
}
