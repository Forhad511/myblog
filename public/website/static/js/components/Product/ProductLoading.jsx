import React from "react";
import Loading from "../Loading/Loading";
import "./ProductLoading.css";

export default function ProductLoading({ platform, size }) {
  return (
    <div>
      <div className="productSkeleton productList" style={{ marginTop: "0" }}>
        {[...Array(size ? size : 24)].map((i) => (
          <div className="product" key={Math.random()}>
            <div
              className="dummyImage"
              style={{
                height: platform === "pakistan" ? "280px" : "220px",
                width: "100%",
              }}
            ></div>
            <div className="mt1" style={{ width: "100%" }}>
              <p className="dummyName mb1"></p>
              <p className="dummyPrice mb1"></p>
            </div>
          </div>
        ))}
      </div>
      <div className="w100 flexRow align-center justify-center mt2">
        <Loading />
      </div>
    </div>
  );
}
