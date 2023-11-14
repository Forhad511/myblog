import React from "react";
import TextSkeleton from "./TextSkeleton";

export default function TableSkeleton({ rowSize }) {
  let rows = rowSize ? 40 * rowSize : 140;
  return (
    <div>
      <TextSkeleton height={40} width={100} borderRadius="4px 4px 0px 0px" />
      <TextSkeleton
        height={rows}
        width={100}
        borderRadius="0px 0px 2px 2px"
        styles={{ marginTop: "0.075rem" }}
      />
    </div>
  );
}
