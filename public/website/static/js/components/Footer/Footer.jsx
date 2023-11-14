import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { useLocation } from "react-router";

export default function Footer() {
  const [footer, setFooter] = useState(1);

  const location = useLocation();

  useEffect(() => {
    setFooter(1);
  }, [location]);

  return (
    <footer className="footerContainer">
      {footer === 1 ? (
        <div className="footerTrigger onlyMobile">
          <button onClick={() => setFooter(2)}>Company Info</button>
        </div>
      ) : (
        <></>
      )}

      <div className={footer === 1 ? "footerControl" : "footerHide"}>
        <div className="grid gridFrFooter footer">
          <div className="footerAddressInfo">
            <img
              className="footerLogo"
              src={
                require("../../assets/platforms/wholesalecart_logo.svg").default
              }
              alt=""
              loading="lazy"
            />
            <div className="info">
              <div className="flexRow align-center mt15 mb05">
                <img
                  src={require("../../assets/icons/location.svg").default}
                  alt=""
                  loading="lazy"
                />
                <span className="bold uppercase">Head Office: </span>
              </div>
              <span>
                Floor: 1 & 3, House: 30, Road: 11, Sector: 4, Uttara, Dhaka-1230
                Bangladesh
              </span>
            </div>
            <div className="info" style={{ marginTop: "15px" }}>
              <div className="flexRow align-center  mt05 mb05">
                <img
                  src={require("../../assets/icons/email.svg").default}
                  alt=""
                  loading="lazy"
                />

                <span className="bold uppercase">Email: </span>
              </div>
              <span>info@wholesalecart.com</span>
            </div>
            <div className="info" style={{ marginTop: "15px" }}>
              <div className="flexRow align-center mt05 mb05">
                <img
                  src={require("../../assets/icons/call.svg").default}
                  alt=""
                  loading="lazy"
                />
                <span className="bold uppercase">Phone: </span>
              </div>
              <span>+88 09666-799125</span>
            </div>
          </div>
          <div style={{ fontSize: "14px" }} className="information">
            <h3
              className="mb05 bold uppercase"
              style={{ marginBottom: "15px" }}
            >
              Customer
            </h3>
            <div>
              <Link to="/offers">Offers</Link>
            </div>
            <div>
              <Link to="/account">Account</Link>
            </div>
            <div>
              <Link to="/cart">Cart</Link>
            </div>
            <div>
              <Link to="/wishlist">Wishlist</Link>
            </div>
            <div>
              <Link to="/account/support">Support</Link>
            </div>
            {/* <div>
              <a
                href="https://onesalemart.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="OnesaleMart"
              >
                Retail Purchase
              </a>
            </div> */}
          </div>
          <div style={{ fontSize: "14px" }} className="information">
            <h3
              className="mb05 bold uppercase"
              style={{ marginBottom: "15px" }}
            >
              Information
            </h3>
            <div>
              <Link to="/about-us">About us</Link>
            </div>
            <div>
              <Link to="/contact-us">Contact Us</Link>
            </div>
            <div>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </div>
            <div>
              <Link to="/returns-refunds">Returns & Refund</Link>
            </div>
            <div>
              <Link to="/why-believe-us">Why do you believe us?</Link>
            </div>
            <div>
              <Link to="/certificates">Certificates</Link>
            </div>
            <div>
              <Link to="/terms-conditions">
                <b>Terms & Conditions</b>
              </Link>
            </div>
          </div>
          {navigator.userAgent !== "wholesalecartapp" ? (
            <div
              style={{ fontSize: "14px" }}
              className="information flexColumn"
            >
              <h3
                className="mb05 bold uppercase"
                style={{ marginBottom: "15px" }}
              >
                Mobile Apps
              </h3>
              <a
                href="https://play.google.com/store/apps/details?id=com.wholesalecartbd.mobileapp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="playstore"
              >
                <img
                  style={{ width: "120px", marginBottom: "0.5rem" }}
                  src={require("../../assets/platforms/playstore.png").default}
                  alt=""
                  loading="lazy"
                />
              </a>
              <img
                style={{ width: "120px" }}
                src={require("../../assets/platforms/applestore.png").default}
                alt=""
                loading="lazy"
              />
              <div style={{ marginTop: "10px" }}>
                <h3
                  className="bold mb05 mt1 uppercase"
                  style={{ marginBottom: "15px" }}
                >
                  Social Links
                </h3>
                <div style={{ display: "flex", justifyContent: "flex-start" }}>
                  <a
                    href="https://www.facebook.com/Wholesalecard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="socialLink"
                    aria-label="facebook"
                  >
                    <img
                      src={
                        require("../../assets/vector/facebook_round.svg")
                          .default
                      }
                      alt="facebook"
                      loading="lazy"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/wholesalecard"
                    className="socialLink"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="instagram"
                  >
                    <img
                      src={require("../../assets/vector/instagram.svg").default}
                      alt="instagram"
                      loading="lazy"
                    />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCzE9yHoLJS9g_NM7wBWKPSg"
                    className="socialLink"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="youtube"
                  >
                    <img
                      src={require("../../assets/vector/youtube.svg").default}
                      alt="youTube"
                      loading="lazy"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/wholesalecart"
                    className="socialLink"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="linkedin"
                  >
                    <img
                      src={require("../../assets/vector/linkedin.svg").default}
                      alt="linkedin"
                      loading="lazy"
                    />
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="companyLogos">
          <a
            href="https://acceptglobal.ltd/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="acceptglobal"
          >
            <img
              src={require("../../assets/platforms/acceptglobal.svg").default}
              alt=""
              style={{ width: "250px", marginBottom: "1.5rem" }}
              loading="lazy"
            />
          </a>
          <div className="sisters">
            <a href="/" aria-label="wholesalecart">
              <img
                src={
                  require("../../assets/platforms/wholesale_new.svg").default
                }
                alt=""
                loading="lazy"
              />
            </a>
            <a
              href="https://onesalemart.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="OnesaleMart"
            >
              <img
                style={{ padding: "0.75rem" }}
                src={require("../../assets/platforms/onesalemart.svg").default}
                alt=""
                loading="lazy"
              />
            </a>
            <a
              href="https://shipbaz.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="shipbaz"
            >
              <img
                src={require("../../assets/platforms/shipbaz.svg").default}
                alt=""
                loading="lazy"
              />
            </a>
            <a
              href="https://azobshop.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="azobshop"
            >
              <img
                src={require("../../assets/platforms/azobshop.svg").default}
                alt=""
                style={{ padding: "0.75rem" }}
                loading="lazy"
              />
            </a>
          </div>
        </div>

        <div className="companyAddresses" style={{ display: "none" }}>
          <div className="companyAddress">
            <div>Head Office:</div>
            <div>
              Floor: 1&3, House: 30, Road: 11, Sector: 4, Uttara, Dhaka-1230
              Bangladesh
            </div>
            <div>Phone: (+88) 09666-799125</div>
            <div>Email: info@wholesalecart.com</div>
          </div>
        </div>

        <div
          className="p15 flexRow align-center justify-center"
          style={{ fontSize: "13px" }}
        >
          <a
            href="https://acceptglobal.ltd/"
            target="_blank"
            rel="noopener noreferrer"
            className="bold mr05"
          >
            ACCEPT GLOBAL LIMITED.
          </a>{" "}
          2019- 2023 All rights reserved
        </div>
      </div>
    </footer>
  );
}
