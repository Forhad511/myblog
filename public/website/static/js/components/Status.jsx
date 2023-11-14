import React from "react";
export default function Status({ name, type, onClick }) {
  let value = null;
  if (name) {
    if (name.toLowerCase().includes("completed")) {
      value = { name: name, color: "#237804" };
    } else if (name.toLowerCase().includes("pending")) {
      value = { name: name, color: "#8c8c8c" };
    } else if (
      name.toLowerCase().includes("processing") ||
      name.toLowerCase().includes("debit")
    ) {
      value = { name: name, color: "#d48806" };
    } else if (name.toLowerCase().includes("partially")) {
      value = { name: name, color: "#3f6600" };
    } else if (name.toLowerCase().includes("hold")) {
      value = { name: name, color: "#F8DDA7" };
    } else if (name.toLowerCase().includes("completed")) {
      value = { name: name, color: "#3f6600" };
    } else if (
      name.toLowerCase().includes("cancelled") ||
      name.toLowerCase().includes("failed") ||
      name.toLowerCase().includes("redx")
    ) {
      value = { name: name, color: "#a8071a" };
    } else if (name.toLowerCase().includes("repurchase")) {
      value = { name: name, color: "#780650" };
    } else if (name.toLowerCase().includes("rocket")) {
      value = { name: name, color: "#89288F" };
    } else if (name.toLowerCase().includes("bkash")) {
      value = { name: name, color: "#E3106E" };
    } else if (name.toLowerCase().includes("ssl")) {
      value = { name: name, color: "#22639C" };
    } else if (name.toLowerCase().includes("balance")) {
      value = { name: name, color: "#000" };
    } else if (name.toLowerCase().includes("nagad")) {
      value = { name: name, color: "#D41111" };
    } else if (name.toLowerCase().includes("1688")) {
      value = { name: name, color: "#ad2102" };
    } else if (name.toLowerCase().includes("alibaba")) {
      value = { name: name, color: "#FF4D74" };
    } else {
      value = { name: name, color: "#111" };
    }
  }
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {value ? (
        <div
          style={
            type === "payment_method"
              ? {
                  cursor: "pointer",
                  textTransform: "capitalize",
                  backgroundColor: value.color,
                  color: "#fff",
                  padding: "0.175rem .575rem",
                  fontSize: "13px",
                  borderRadius: "4px",
                }
              : {
                  cursor: "pointer",
                  textTransform: "capitalize",
                  backgroundColor: value.color,
                  color: "#fff",
                  padding: "0.175rem .575rem",
                  fontSize: "13px",
                  borderRadius: "4px",
                }
          }
          onClick={() => {
            if (onClick) {
              onClick();
            }
          }}
        >
          {value.name}
        </div>
      ) : (
        "--"
      )}
    </div>
  );
}
