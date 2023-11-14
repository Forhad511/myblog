import React from "react";
import parse from "html-react-parser";
import "./ProductSpecification.css";

const ProductSpecification = React.memo(function ProductSpecification({
  data,
}) {
  return (
    <div className="productSpecification">
      {data.product_specification && (
        <div>{parse(data.product_specification, { trim: true })}</div>
      )}
    </div>
  );
});

export default ProductSpecification;
