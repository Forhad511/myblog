import React, { useState, useEffect } from "react";
import IconButton from "../../IconButton/IconButton";
import AddOns from "./AddOns";
import { getProductVariationPrice } from "../../../api/Products";
import TextSkeleton from "../../Skeleton/TextSkeleton";
import {
  getFakePrice,
  getPreWinterOfferTime,
} from "../../../utils/getOfferTime";
import moment from "moment";

const TableRow = React.memo(function TableRow({
  p,
  sortedGroupArray,
  groups,
  final,
  setFinal,
  getVariationQuantity,
  addons,
  table,
  setTable,
  source,
  index,
  price,
  id,
  product_code,
}) {
  let stock = p[1].stock;
  const [laterPrice, setLaterPrice] = useState(null);
  const [priceLoading, setPriceLoading] = useState(false);
  let falseIndex = index;
  useEffect(() => {
    if (laterPrice !== null) {
      let mTable = [...table];
      let index = mTable.findIndex((el) => el[0] === p[0]);
      const object = mTable[index][1];
      object.price = laterPrice;
      setTable(mTable);
      setPriceLoading(false);
    }
    if (falseIndex === 0 && p[1].price === -1) {
      getVariationPrice(p[0]);
      setPriceLoading(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [p, laterPrice]);

  let varQuan = getVariationQuantity(p[0]);
  const remove = () => {
    let array = [...final];
    let index = array.findIndex((el) => el.i === p[0]);
    if (index >= 0) {
      if (array[index].q === 1) {
        array.splice(index, 1);
      } else if (array[index].q > 1) {
        array[index].q = array[index].q - 1;
      }
    }
    setFinal(array);
  };

  const add = () => {
    let array = [...final];
    let index = array.findIndex((el) => el.i === p[0]);
    if (index >= 0) {
      if (array[index].q < stock) {
        array[index].q = array[index].q + 1;
      }
    } else {
      array.push({
        i: p[0],
        d: Object.values(p[1].variants),
        q: 1,
        a: [],
        p: p[1].price,
      });
    }
    setFinal(array);
  };
  const onChangeQuantity = (quantity) => {
    if (!quantity) {
      quantity = 0;
    }

    let new_quantity = parseInt(quantity);
    let array = [...final];
    let index = array.findIndex((el) => el.i === p[0]);

    if (new_quantity === 0) {
      array.slice(index, 1);
    }

    new_quantity = new_quantity <= stock ? new_quantity : stock;

    if (index >= 0) {
      array[index].q = new_quantity;
    } else {
      array.push({
        i: p[0],
        d: Object.values(p[1].variants),
        q: new_quantity,
        a: [],
        p: p[1].price,
      });
    }
    setFinal(array);
  };

  const getVariationPrice = (varId) => {
    getProductVariationPrice(varId, source, setLaterPrice, id);
  };

  const getAvailAbility = (stock, price) => {
    if (price === 0 || stock === 0) {
      return (
        <p style={{ fontSize: "12px", fontWeight: "600" }}>Out of stock</p>
      );
    }
    if (price < 0) {
      return (
        <p style={{ fontSize: "12px", fontWeight: "600" }}>
          Check Updated Price
        </p>
      );
    }
    if (stock > 0 && price > 0) {
      return (
        <p style={{ fontSize: "12px", fontWeight: "600" }}>{p[1].stock}</p>
      );
    } else if (stock < 0) {
      return <p style={{ fontSize: "12px", fontWeight: "600" }}>Available</p>;
    }
  };

  const getPriceElement = (price, varId) => {
    if (price) {
      if (price > 0) {
        return "৳ " + price;
      } else if (price === 0) {
        return "Out Of Stock";
      } else {
        return !priceLoading ? (
          <IconButton
            text={"Check Price"}
            height="28px"
            width="100px"
            font="14px"
            onClick={() => {
              getVariationPrice(varId);
              setPriceLoading(true);
            }}
          />
        ) : (
          <TextSkeleton
            height={28}
            styles={{ width: "100px", margin: "auto" }}
          />
        );
      }
    } else {
      return "Out Of Stock";
    }
  };
  console.log(p);
  return (
    <>
      <tr key={index}>
        <td style={{ width: "100%" }}>
          <span style={{ wordBreak: "break-all" }}>
            {p[1].variants[sortedGroupArray[groups.length - 1][0]]}
          </span>
        </td>
        <td>
          <div
            style={{
              wordBreak: "keep-all",
              whiteSpace: "nowrap",
              minWidth: "70px",
            }}
          >
            {getPriceElement(p[1].price, p[0])}
            {moment(new Date()).isBefore(getPreWinterOfferTime) && (
              <p className="discountPrice" style={{ marginRight: 0 }}>
                {getPriceElement(
                  getFakePrice(product_code, p[1].price).fake_price,
                  p[0]
                )}
              </p>
            )}
          </div>
        </td>
        <td className="flexColumn align-center justify-center">
          {varQuan > 0 ? (
            <div className="flexRow align-center addRemove">
              <div
                style={{
                  position: "absolute",
                  width: "28px",
                  height: "28px",
                  marginLeft: "-1px",
                  cursor: "pointer",
                  backgroundColor: "var(--primary-color-dark)",
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
                style={{
                  width: "80px",
                  height: "28px",
                  margin: "0 0.5rem",
                }}
                type="text"
                value={varQuan}
                onChange={(e) => onChangeQuantity(e.target.value)}
              />
              <div
                style={{
                  position: "absolute",
                  width: "28px",
                  height: "28px",
                  right: "-1px",
                  cursor: "pointer",
                  backgroundColor: "var(--primary-color-dark)",
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
            <div>
              <IconButton
                onClick={() => add()}
                icon={require("../../../assets/icons/cart.svg").default}
                text={"Add"}
                height="28px"
                width="96px"
                font="14px"
                imgWidth={"18px"}
                disabled={p[1].price <= 0 || p[1].stock === 0}
              />
            </div>
          )}
          <div style={{ marginTop: "0.1rem" }}>
            {getAvailAbility(p[1].stock, p[1].price)}
          </div>
        </td>
      </tr>
      {/* {varQuan > 0 && addons.length > 0 && (
        <tr>
          <td colSpan={3} className="p1">
            <AddOns
              addons={addons}
              id={p[0]}
              final={[...final]}
              setFinal={setFinal}
            />
          </td>
        </tr>
      )} */}
    </>
  );
});

export default TableRow;
