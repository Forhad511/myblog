import React from "react";

const IconButton = React.memo(function IconButton({
  icon,
  width,
  text,
  height,
  font,
  onClick,
  disabled,
  classNameForward,
  imgWidth,
}) {
  let w = width ? width : "auto";
  let h = height ? height : "auto";
  let f = font ? font : "18px";
  let imageWidth = imgWidth ? imgWidth : f;
  let clickEvent = onClick;
  let classNameF = classNameForward ? classNameForward : "";

  return (
    <div
      onClick={() => {
        if (!disabled && clickEvent) {
          clickEvent();
        }
      }}
      className={
        disabled
          ? `imageBt bt ripple disabled ` + classNameF
          : "imageBt bt ripple " + classNameF
      }
      style={{
        width: w,
        height: h,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "auto",
      }}
    >
      {icon && (
        <img
          style={
            text
              ? { width: imageWidth, height: imageWidth, marginRight: "0.5rem" }
              : { width: imageWidth, height: imageWidth }
          }
          src={icon}
          alt=""
        />
      )}
      {text && <span style={{ fontSize: f }}>{text}</span>}
    </div>
  );
});

export default IconButton;
