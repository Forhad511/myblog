import React from "react";

const Count = React.memo(function Count({ number, color }) {
  let className = "count";
  if (color) {
    className = className + " spanSelectedBadge";
  }
  let content = "";
  if (number > 0) {
    content = <span className={className}>{number}</span>;
  }
  return content;
});

export default Count;
