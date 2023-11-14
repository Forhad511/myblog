import React from "react";
import "./Skeleton.css";

export default function SubImages({ size, styles, imageSize }) {
  return (
    <div>
      <div className="subImageContainer" style={styles}>
        {[...Array(size)].map((p, k) => (
          <div
            key={Math.random()}
            className="subImageLoading"
            style={{ width: imageSize + "px", height: imageSize + "px" }}
          ></div>
        ))}
      </div>
    </div>
  );
}
