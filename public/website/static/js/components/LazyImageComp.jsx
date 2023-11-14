import React, { useState } from "react";

export default function LazyImageComp({
  url,
  classNameForward,
  height,
  width,
  clickEvent,
  platform,
}) {
  const [isLoading, setIsLoading] = useState(true);
  let imageUrl = url;
  if (platform === "china") {
    imageUrl = url + "_100x100q90.jpg";
  }
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={() => {
        if (clickEvent) {
          clickEvent();
        }
      }}
    >
      <div
        className={isLoading ? "overlay" : ""}
        style={isLoading ? { height: height, width: width } : {}}
      ></div>
      <img
        className={classNameForward}
        onLoad={() => {
          if (isLoading) {
            setIsLoading(false);
          }
        }}
        src={imageUrl}
        alt=""
        style={{ position: "absolute" }}
      />
    </div>
  );
}
