import moment from "moment";
import React, { useEffect } from "react";
import {
  getFakePrice,
  getPreWinterOfferTime,
} from "../../../utils/getOfferTime";
import AddOns from "./AddOns";

export default function SingleTableRow({
  id,
  final,
  setFinal,
  price,
  addons,
  product_code,
}) {
  useEffect(() => {
    setFinal([
      {
        i: id,
        d: null,
        q: 1,
        a: [],
        p: price,
      },
    ]);
  }, [id, setFinal, price]);

  const remove = () => {
    let array = [...final];
    if (array[0].q > 1) {
      array[0].q = array[0].q - 1;
    }

    setFinal(array);
  };
  const add = () => {
    let array = [...final];
    array[0].q = array[0].q + 1;
    setFinal(array);
  };
  const onChangeQuantity = (quantity) => {
    if (!quantity) {
      quantity = 0;
    }

    let new_quantity = parseInt(quantity);
    let array = [...final];
    let index = 0;

    if (new_quantity === 0) {
      array.slice(index, 1);
    }

    if (index >= 0) {
      array[index].q = new_quantity;
    }
    setFinal(array);
  };
  return (
    <>
      <tr key={1}>
        <td>
          {"৳ " + price}
          {moment(new Date()).isBefore(getPreWinterOfferTime) && (
            <p
              style={{
                fontsize: "14px",
                textDecoration: "line-through",
                color: "#888",
                marginTop: 2,
              }}
            >
              {"৳ " + getFakePrice(product_code, price).fake_price}
            </p>
          )}
        </td>
        <td className="flexColumn align-center justify-center">
          <div
            style={{
              padding: 12,
            }}
          >
            {price > 0 ? (
              <div className="flexRow align-center addRemove">
                <div
                  style={{
                    position: "absolute",
                    width: "28px",
                    height: "28px",
                    marginLeft: "-1px",
                    cursor: "pointer",
                    backgroundColor: "var(--primary-color)",
                    borderRadius: "60px",
                    padding: "2px",
                  }}
                >
                  <img
                    onClick={() => remove()}
                    src={require("../../../assets/icons/remove.svg").default}
                    style={{
                      width: "24px",
                      height: "24px",
                    }}
                    alt=""
                  />
                </div>
                <input
                  style={{ width: "80px", height: "28px", margin: "0 0.5rem" }}
                  type="text"
                  value={final[0] ? final[0].q : 1}
                  onChange={(e) => onChangeQuantity(e.target.value)}
                />
                <div
                  style={{
                    position: "absolute",
                    width: "28px",
                    height: "28px",
                    right: "-1px",
                    cursor: "pointer",
                    backgroundColor: "var(--primary-color)",
                    borderRadius: "60px",
                    padding: "2px",
                  }}
                >
                  <img
                    onClick={() => add()}
                    src={require("../../../assets/icons/add.svg").default}
                    style={{
                      width: "24px",
                      height: "24px",
                    }}
                    alt=""
                  />
                </div>
              </div>
            ) : (
              <span>Out of Stock</span>
            )}
          </div>
        </td>
      </tr>
      {/* {addons.length > 0 && (
        <tr>
          <td colSpan={3} className="p1">
            <AddOns
              addons={addons}
              id={id}
              final={[...final]}
              setFinal={setFinal}
            />
          </td>
        </tr>
      )} */}
    </>
  );
}
