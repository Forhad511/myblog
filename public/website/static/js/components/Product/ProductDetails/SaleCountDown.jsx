import React from "react";
import Countdown from "react-countdown";
import moment from "moment";
import "./ProductDetails.css";
const SaleCountDown = React.memo(function SaleCountDown({
  data,
  source,
  simple,
  endDate,
  started,
  noCountdown,
}) {
  let salePrice = data ? data.sale_price : "";
  let dateA = moment(new Date());
  let dateB = endDate
    ? moment(new Date(endDate))
    : moment(new Date("2022/05/26"));
  let sec = dateB.diff(dateA, "seconds");
  let highest = null;
  let lowest = null;
  let discount = 0;
  if (
    data &&
    data.product_details &&
    data.product_details.variations &&
    Object.values(data.product_details.variations).length > 0
  ) {
    for (const [key, value] of Object.entries(
      data.product_details.variations
    )) {
      if (highest !== null) {
        highest = value.price > highest ? value.price : highest;
      } else {
        highest = value.price;
      }
      if (lowest !== null) {
        lowest = value.price < lowest ? value.price : lowest;
      } else {
        lowest = value.price;
      }
    }
  } else {
    lowest = salePrice;
    highest = salePrice;
  }

  if (
    data &&
    parseInt(data.regular_price) > 0 &&
    parseInt(data.sale_price) > 0
  ) {
    discount =
      ((parseInt(data.regular_price) - parseInt(data.sale_price)) /
        parseInt(data.regular_price)) *
      100;
  }

  const getRegularPrice = (salePrice) => {
    let revDiscount = 100 - discount > 0 ? 100 - discount : discount - 100;
    if (discount) {
      return parseInt((parseInt(salePrice) / revDiscount) * 100);
    } else return salePrice;
  };

  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <div className="timer">
        <div>
          <p>{days}</p>
          <span>Days</span>
        </div>
        <div>
          <p>{hours}</p>
          <span>Hours</span>
        </div>
        <div>
          <p>{minutes}</p>
          <span>Min</span>
        </div>
        <div style={{ marginRight: 0 }}>
          <p>{seconds}</p>
          <span>Sec</span>
        </div>
      </div>
    );
  };

  return (
    <div
      className="countDownContainer"
      id="countDownContainer"
      style={
        simple
          ? {
              marginBottom: "0rem",
              background: "#ffffff00",
              padding: 0,
              width: "auto",
              borderRadius: "8px",
            }
          : {
              justifyContent: "space-between",
              width: "100%",
              borderRadius: "8px",
            }
      }
    >
      {!simple && (
        <div className="countDownPrice">
          {source !== "amazon" && (
            <div>
              <p className="salePrice">
                {lowest !== highest
                  ? "৳ " + lowest + " - ৳ " + highest
                  : "৳ " + highest}
              </p>
              <p
                className="regPrice"
                style={{ textDecoration: "line-through" }}
              >
                {" "}
                {lowest !== highest
                  ? "৳ " +
                    getRegularPrice(lowest) +
                    " - ৳ " +
                    getRegularPrice(highest)
                  : "৳ " + getRegularPrice(highest)}
              </p>
            </div>
          )}
          <div style={{ marginTop: "0.275rem" }}>
            <span
              className="discount"
              style={source === "amazon" ? { padding: "0.5rem" } : {}}
            >
              {Math.round(discount)}% Discount
            </span>
          </div>
        </div>
      )}
      {!noCountdown && (
        <div className="countDownTimer">
          {sec > 0 ? (
            <p
              style={{
                fontWeight: "600",
                marginBottom: "0.5rem",
                fontSize: "16px",
                color: simple ? "#000" : "#DDA300",
              }}
            >
              {started ? "OFFER ENDS IN" : "OFFER STARTS FROM"}
            </p>
          ) : (
            <p
              style={{
                fontWeight: "600",
                marginBottom: "0.5rem",
                fontSize: "16px",
                color: !simple ? "#000" : "#DDA300",
              }}
            >
              OFFER ENDED
            </p>
          )}
          {sec > 0 && (
            <Countdown
              date={
                new Date(moment(new Date()).add(sec, "seconds").format("LLLL"))
              }
              renderer={renderer}
            />
          )}
        </div>
      )}
    </div>
  );
});

export default SaleCountDown;
