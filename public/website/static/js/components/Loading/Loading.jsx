import React from "react";
import "./Loading.css";

export default function Loading({ white }) {
  return (
    <div className={white ? "whiteRing" : "lds-ring"}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
