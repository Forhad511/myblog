import React, { useState } from "react";

export default function ImagePopup({ src, style }) {
  const [active, setActive] = useState(false);
  return (
    <div
      className={active ? "imagePopup cursor-pointer" : "cursor-pointer"}
      onClick={(e) => {
        if (active) setActive(false);
      }}
    >
      {active && (
        <button className="bt" onClick={() => setActive(false)}>
          Close
        </button>
      )}
      <img
        src={src}
        alt=""
        onClick={() => setActive(true)}
        style={!active ? style : {}}
      />
    </div>
  );
}
