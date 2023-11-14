import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getProductsQuery } from "../api/Products";
import Product from "../components/Product/Product";
import { chinaCategories } from "../utils/ChinaCategories";
import Loading from "./Loading/Loading";

export default function OtherProduct({ vendor_id, type }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    let filter = {
      key: vendor_id,
      vendor_id: vendor_id,
      source: "1688",
    };
    getProductsQuery(filter, setData);
  }, []);

  console.log(data);

  let limit = window.innerWidth > 768 ? (window.innerWidth > 1400 ? 10 : 6) : 4;

  return (
    <div className="card mt05">
      <div
        style={{
          borderBottom: "1px solid #eee",
          padding: "1rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h4>From The Same Seller</h4>
        <Link to={`/shop/china/store-${vendor_id}`}>
          <button className="bt">View all</button>
        </Link>
      </div>
      {data && data.results ? (
        <div className="productList">
          {data?.results.slice(0, limit).map((m, l) => (
            <Product
              key={m.product_code + l}
              m={m}
              l={m.product_code}
              p={
                m.product_code.includes("abb")
                  ? "china"
                  : m.product_code.includes("alb")
                  ? "alibaba"
                  : "pakistan"
              }
              s={"link"}
            />
          ))}
        </div>
      ) : (
        <div className="flexRow align-center justify-center p2">
          <Loading />
        </div>
      )}
    </div>
  );
}
