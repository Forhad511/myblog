import React from "react";
import "./Skeleton.css";

export default function TextSkeleton({ height, width, borderRadius, styles }) {
  let style = {
    height: height ? height + "px" : "20px",
    width: width ? width + "%" : "100%",
  };
  if (borderRadius) {
    style.borderRadius = borderRadius;
  }
  return <div className="text-skeleton" style={{ ...style, ...styles }}></div>;
}
