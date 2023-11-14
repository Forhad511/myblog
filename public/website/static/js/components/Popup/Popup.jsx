import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { customerSendOtp } from "../../api/Auth";
import { loginUser } from "../../actions/authAction";
import { useHistory } from "react-router";
import "./Popup.css";
import moment from "moment";

export default function Popup({
  setPopUp,
  type,
  chainAction,
  title,
  message,
  bt1Text,
  bt2Text,
  bt1Action,
  bt2Action,
}) {
  const history = useHistory();

  const [number, setNumber] = useState(false);
  const [otp, setOtp] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerifed, setOtpVerified] = useState(true);
  const [loading, setLoading] = useState(false);

  const [timer, setTimer] = useState(null);
  const [remaining, setRemaining] = useState(null);

  const loginUserDispatch = useDispatch();

  const getToken = (phone) => {
    let mul = phone * 11;
    let rev = mul.toString().split("").reverse().join("");
    return btoa(rev);
  };

  const authProcess = () => {
    setLoading(true);
    if (!otpSent) {
      customerSendOtp({ phone: number, token: getToken(number) }, afterOtpSent);
    } else {
      if ((number, otp)) {
        loginUserDispatch(
          loginUser(
            { phone: number, otp: otp },
            history,
            loginAfterFunction,
            false
          )
        );
      }
    }
  };
  const afterOtpSent = (result) => {
    setLoading(false);
    setTimer(new Date());
    if (result && !otpSent) {
      setOtpSent(true);
    }
  };

  const loginAfterFunction = (result) => {
    setLoading(false);
    if (result) {
      setOtpVerified(true);
      closePopUp();
    } else {
      setOtpVerified(false);
    }
  };

  const closePopUp = () => {
    setPopUp("none");
    if (chainAction) {
      chainAction();
    }
  };

  const button1Action = () => {
    if (bt1Action) {
      bt1Action();
    } else {
      closePopUp();
    }
    closePopUp();
  };

  const button2Action = () => {
    if (bt2Action) {
      bt2Action();
    } else {
      closePopUp();
    }
    closePopUp();
  };

  useEffect(() => {
    let timer1 = setInterval(() => {
      try {
        let sentTime = moment(timer).add(30, "s");
        let nowTime = moment(new Date());
        let diff = nowTime.diff(sentTime, "s");
        if (diff !== null && diff <= 0) {
          setRemaining(diff);
        }
      } catch (error) {}
    }, 1000);
    return () => {
      clearInterval(timer1);
    };
  }, [timer]);

  return (
    <div
      style={{
        position: "fixed",
        zIndex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.24)",
      }}
    >
      {type === "login" ? (
        <div
          className="loginPopup"
          style={{
            maxWidth: "90%",
          }}
        >
          <h2>Login / Register</h2>

          {!otpSent && (
            <>
              <p>A verification code will be sent to your mobile number.</p>
              <div className="loginPopupNumber">
                <input
                  onChange={(e) => setNumber(e.target.value)}
                  type="text"
                  name="number"
                  placeholder="017xxxxxxxx"
                  onKeyPress={(e) => {
                    if (e.code === "Enter") {
                      authProcess();
                    }
                  }}
                />
              </div>
              <div className="loginPopupButton">
                <button className="bt ripple" onClick={authProcess}>
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </>
          )}

          {otpSent && (
            <>
              <p>A verification code is sent to your mobile number.</p>

              {!loading && !otpVerifed && (
                <p style={{ color: "red", fontSize: "18px" }}>Invalid Code</p>
              )}

              <div className="loginPopupNumber">
                <input
                  onChange={(e) => setOtp(e.target.value)}
                  type="text"
                  name="otp"
                  placeholder="xxxx"
                  onKeyPress={(e) => {
                    if (e.code === "Enter") {
                      authProcess();
                    }
                  }}
                />
              </div>
              <div className="loginPopupButton">
                <button className="bt ripple" onClick={authProcess}>
                  {loading ? "Verifying..." : "Verify"}
                </button>
              </div>
              {remaining <= 0 && (
                <div className="mt1">
                  {remaining === 0 ? (
                    <button
                      className="bt"
                      onClick={() => {
                        customerSendOtp(
                          { phone: number, token: getToken(number) },
                          afterOtpSent
                        );
                      }}
                    >
                      RESEND OTP
                    </button>
                  ) : (
                    <button className="bt disabled">
                      RESEND OTP{" "}
                      {`WAIT ${
                        remaining && remaining < 0 ? remaining * -1 : 30
                      } SEC`}
                    </button>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      ) : (
        <div
          className="card p2"
          style={{
            width: "600px",
            maxWidth: "90%",
            textAlign: "left",
          }}
        >
          <h4 style={{ fontSize: "18px" }}>{title}</h4>
          <p className="mt05" style={{ fontSize: "14px" }}>
            {message}
          </p>
          <div className="flexRow mt1" style={{ justifyContent: "flex-end" }}>
            {bt2Text && (
              <button onClick={button2Action} className="bt ripple">
                {bt2Text ? bt2Text : "Cancel"}
              </button>
            )}
            {bt1Text && (
              <button
                onClick={button1Action}
                className="bt ripple"
                style={{ marginLeft: "10px" }}
              >
                {bt1Text ? bt1Text : "Ok"}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
