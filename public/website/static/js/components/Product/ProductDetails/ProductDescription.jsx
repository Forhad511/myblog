import React, { useState, useEffect } from "react";
import "./ProductSpecification.css";
import { getProductDescription } from "../../../api/Products";
import Loading from "../../Loading/Loading";

const ProductDescription = React.memo(function ProductDescription({
  data,
  setDes,
  des,
}) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (des === "") {
      setLoading(true);

      getProductDescription(
        data.id,
        data.product_code,
        data.source,
        setDes,
        setLoading
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div className="p2 productSpecification productDescriptionTab">
      {!loading && des ? (
        <div
          style={{
            wordBreak: "break-all",
            wordWrap: "break-word",
            overflowWrap: "break-word",
          }}
        >
          <div dangerouslySetInnerHTML={{ __html: des }} />
        </div>
      ) : (
        <div>
          {loading ? (
            <div className="flexRow align-center p2 w100 justify-center">
              <Loading />
            </div>
          ) : (
            <div className="flexRow align-center p2">
              <img
                style={{ margin: "auto", width: "160px" }}
                src={require("../../../assets/vector/nodata.svg").default}
                alt=""
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
});

export default ProductDescription;
