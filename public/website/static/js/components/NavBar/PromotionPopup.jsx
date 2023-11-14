import moment from "moment";
import React, { useState, useEffect } from "react";
import {
  bankPayOffer,
  getOfferTime,
  getPreWinterOfferTime,
  secondOfferStart,
} from "../../utils/getOfferTime";

export default function PromotionPopup() {
  const [active, setActive] = useState(false);
  useEffect(() => {
    let item = localStorage.getItem("promotion_popup");
    if (
      !item &&
      // moment(new Date()).isAfter(getOfferTime.start) &&
      moment(new Date()).isBefore(getPreWinterOfferTime)
    ) {
      setActive(true);
    } else {
      let closed = item;
      let dateA = moment(new Date());
      let dateB = moment(new Date(closed));
      let sec = dateA.diff(dateB, "seconds");
      if (
        sec > 3600 &&
        window.location.pathname === "/" &&
        moment(new Date()).isBefore(getPreWinterOfferTime)
      ) {
        setActive(true);
      }
    }
  }, []);

  const getBanner = () => {
    let defaultImage = require("../../assets/banner/offer_card_3.png").default;
    // ?
    // : require("../../assets/banner/popup_2.png").default;
    let finalImage = defaultImage;

    // let date = moment("2023-01-18").format("YYYY-MM-DD");
    let date = moment(new Date()).format("YYYY-MM-DD");

    let day1 = require("../../assets/banner/1day.png").default;
    let day0 = require("../../assets/banner/0day.png").default;

    if (moment(date).format("DD/MM/YYYY") === "16/01/2023") {
      finalImage = day1;
    }
    if (moment(date).format("DD/MM/YYYY") === "17/01/2023") {
      finalImage = day0;
    }
    // if (moment(date).format("DD/MM/YYYY") === "11/11/2022") {
    //   finalImage = day2;
    // }
    // if (moment(date).format("DD/MM/YYYY") === "12/11/2022") {
    //   finalImage = day1;
    // }
    // if (moment(date).format("DD/MM/YYYY") === "13/11/2022") {
    //   finalImage = day0;
    // }
    return finalImage;
  };

  return (
    <div>
      {active ? (
        <div
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            zIndex: 1100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0,0,0,0.4)",
          }}
          onClick={() => {
            localStorage.setItem("promotion_popup", new Date());
            setActive(false);
          }}
        >
          <div
            style={{ width: "600px", position: "relative", maxWidth: "90%" }}
          >
            <div
              style={{
                position: "absolute",
                left: "50%",
                bottom: 16,
                transform: "translateX(-50%)",
                cursor: "pointer",
                // boxShadow: "#ccc 0 0 16px",
                background: "#000",
                padding: "8px 20px",
                borderRadius: "4px",
                color: "#fff",
              }}
            >
              Close
            </div>
            <img
              src={getBanner()}
              style={{
                width: "100%",
                objectFit: "contain",
                boxShadow: "#000 0 0 8px",
                cursor: "pointer",
                borderRadius: 4,
              }}
              alt=""
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
