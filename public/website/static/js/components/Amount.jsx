import React from "react";

export default function Amount({ amount, fontsize }) {
  let finalFontSize = fontsize ? fontsize : "16px";
  return (
    <span style={{ fontSize: finalFontSize }} className="accAmount">
      ৳ {amount}
    </span>
  );
}
