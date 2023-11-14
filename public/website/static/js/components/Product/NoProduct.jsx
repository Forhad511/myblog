import React from "react";

export default function NoProduct({ image, text, type }) {
  let title = text ? text : "Product Not Found";
  let img = image ? image : require("../../assets/vector/empty.svg").default;
  let height = type === "small" ? "200px" : "calc(100vh - 160px)";
  let width = type === "small" ? "200px" : "400px";
  return (
    <div
      className="flexColumn align-center justify-center"
      style={{ height: height }}
    >
      <img src={img} style={{ width: width, maxWidth: "80%" }} alt="" />
      <p className="mt1 bold" style={{ fontSize: "20px" }}>
        {title}
      </p>
    </div>
  );
}
