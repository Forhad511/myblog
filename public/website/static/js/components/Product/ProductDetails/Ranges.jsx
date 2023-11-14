import moment from "moment";
import Recat, { useEffect, useState } from "react";
import {
  getFakePrice,
  getPreWinterOfferTime,
} from "../../../utils/getOfferTime";
import Amount from "../../Amount";

const Ranges = function Ranges({
  data,
  final,
  activeRange,
  setActiveRange,
  setRangePrice,
  table,
  setTable,
  setFinalPrice,
  setFullTable,
  fullTable,
}) {
  const ranges = data.product_details.ranges;

  useEffect(() => {
    let quantity = 0;
    final.forEach((p, k) => {
      quantity = quantity + p.q;
    });

    if (ranges && ranges.length > 0) {
      ranges.map((p, k) => {
        if (quantity >= p.minimum_qty) {
          if (ranges[k + 1]) {
            if (quantity < ranges[k + 1].minimum_qty) {
              setActiveRange(k);
              setRangePrice(p.price);
              setFinalPrice(p.price * quantity);
            }
          } else {
            setActiveRange(k);
            setRangePrice(p.price);
            setFinalPrice(p.price * quantity);
          }
        }
      });
    }
  }, [final]);

  useEffect(() => {
    let price = ranges[activeRange].price;

    let newTable = [...table];

    newTable.map((p, k) => {
      p[1].price = price;
    });

    let newFullTable = [...fullTable];

    newFullTable.forEach((p, k) => {
      p[1].price = price;
    });
    setFullTable(newFullTable);
    setTable(newTable);
  }, [activeRange]);

  ////Object.keys(obj).sort().reverse().map(key=> ({key:key,id:obj[key].id})

  return (
    <>
      {data.product_details.ranges && data.product_details.ranges.length > 0 && (
        <div className="ranges">
          {data.product_details.ranges.map((p, k) => (
            <div
              className={activeRange === k ? "range rangeActive" : "range"}
              key={p.minimum_qty}
            >
              <div className="rangePrice">
                <Amount amount={p.price} fontsize="20px"></Amount>
              </div>
              {moment(new Date()).isBefore(getPreWinterOfferTime) && (
                <div className="rangePrice">
                  <span
                    style={{
                      fontsize: "20px",
                      textDecoration: "line-through",
                      color: "#444",
                    }}
                  >
                    ৳ {getFakePrice(data.product_code, p.price).fake_price}
                  </span>
                </div>
              )}
              <div className="rangeQty">{p.minimum_qty} or more</div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Ranges;
