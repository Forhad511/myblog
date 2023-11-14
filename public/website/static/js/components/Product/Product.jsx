import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import { getFakePrice, getPreWinterOfferTime } from "../../utils/getOfferTime";
import "./Product.css";

const Product = React.memo(function Product({ m, l, p, s, i }) {
  const getDiscount = (regular, sale) => {
    let discount = ((regular - sale) / regular) * 100;

    return Math.round(discount);
  };

  return (
    <div
      className="product border"
      key={l}
      onClick={() => {
        let dataLayer = window.dataLayer || [];
        dataLayer.push({ ecommerce: null });
        dataLayer.push({
          event: "select_item",
          ecommerce: {
            items: [
              {
                item_name: m.name,
                item_id: m.product_code,
                item_brand: "Wholesalecart",
                item_category: s.includes("https") ? "uncategorized" : s,
                index: i,
                price: m.sale_price > 0 ? m.sale_price : m.regular_price,
              },
            ],
          },
        });
      }}
    >
      <Link
        to={{
          pathname: `/product/${p}/${m.product_code}`,
          search: `?source=${p}&search=${s}`,
          meta: m,
        }}
        style={{ width: "100%" }}
      >
        <img
          className="productImage"
          src={m.img}
          loading="lazy"
          alt=""
          style={
            p === "pakistan" ? { minHeight: "240px" } : { marginTop: "1rem" }
          }
        />
        {m.stock === 0 && <span className="stock">Out of stock</span>}
        {m.rating > 0 && <span className="badge">{m.rating}</span>}
        <div
          style={{ width: "100%", padding: "0.5rem 0.5rem 0.275rem 0.5rem" }}
        >
          <span className="productName block" title={m.name}>
            {m.name}
          </span>
          <div className="flexRow flexSpaceBetween align-center mt05 priceSoldContainer">
            {m.sale_price > 0 ? (
              <div>
                <span className="productPrice block">
                  {"৳ " + parseInt(m.sale_price)}
                </span>
              </div>
            ) : (
              <span className="productPrice block">
                {parseInt(m.regular_price) > 0
                  ? "৳ " + parseInt(m.regular_price)
                  : ""}
              </span>
            )}
            {parseInt(m.total_sold) > 1 && (
              <span className="block soldBadge">
                {"SOLD: " + parseInt(m.total_sold)}
              </span>
            )}
          </div>
        </div>
        {/* {parseInt(m.regular_price) > 0 && parseInt(m.sale_price) > 0 && ( */}
        {parseInt(m.regular_price) > 0 &&
          moment(new Date()).isBefore(getPreWinterOfferTime) && (
            <div
              style={{
                width: "100%",
                padding: "0 0.5rem 0.5rem 0.5rem",
                marginTop: "0.25rem",
              }}
            >
              <span className="discountPrice">
                {"৳ " +
                  getFakePrice(
                    m.product_code,
                    m.sale_price ? m.sale_price : m.regular_price
                  ).fake_price}
              </span>
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: "600",
                  background: "#FFF1CA",
                  padding: "0.125rem 0.375rem",
                  borderRadius: "4px",
                }}
              >
                {/* {getDiscount(parseInt(m.regular_price), parseInt(m.sale_price))}% */}
                {
                  getFakePrice(
                    m.product_code,
                    m.sale_price ? m.sale_price : m.regular_price
                  ).percentage
                }
                % Off
              </span>
            </div>
          )}
        {parseInt(m.regular_price) > 0 &&
          parseInt(m.sale_price) > 0 &&
          moment(new Date()).isAfter(getPreWinterOfferTime) && (
            <div
              style={{
                width: "100%",
                padding: "0 0.5rem 0.5rem 0.5rem",
                marginTop: "0.25rem",
              }}
            >
              <span className="discountPrice">
                {"৳ " + parseInt(m.regular_price)}
              </span>
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: "600",
                  background: "#FFF1CA",
                  padding: "0.125rem 0.375rem",
                  borderRadius: "4px",
                }}
              >
                {getDiscount(parseInt(m.regular_price), parseInt(m.sale_price))}
                % Off
              </span>
            </div>
          )}
      </Link>
    </div>
  );
});

export default Product;
