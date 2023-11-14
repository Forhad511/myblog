import React, { useRef, useEffect, useState } from "react";
import SubImages from "../../Skeleton/SubImages";
import TextSkeleton from "../../Skeleton/TextSkeleton";
import TableSkeleton from "../../Skeleton/TableSkeleton";

export default function ProductDetailsLoading({ meta }) {
  const ref = useRef();
  const [height, setheight] = useState(360);
  useEffect(() => {
    setheight(ref.current.offsetWidth);
  }, [ref.current]);
  return (
    <div>
      <div className="card">
        <div className="p15 bottom-border">
          <h3 className="productDetailTitle">
            {meta ? meta.name : <TextSkeleton height={30} width={100} />}
          </h3>
        </div>
        <div className="grid productDetails">
          <div className="imageSection" style={{ width: "100%" }}>
            <div className="imageContainer" ref={ref} style={{ width: "100%" }}>
              {meta ? (
                <img
                  src={meta.img}
                  alt=""
                  style={{
                    objectFit: "contain",
                    backgroundColor: "#FFF",
                    height: height,
                  }}
                />
              ) : (
                <TextSkeleton height={height} width={100} />
              )}
            </div>
            <SubImages size={4} />
          </div>
          <div className="detailsSection mt05">
            <h3 className="productPrice mb1">
              <TextSkeleton height={80} width={100} />
            </h3>

            <SubImages size={4} imageSize={54} />
            <br />
            <TableSkeleton rowSize={4} />
            <br />
            <TableSkeleton rowSize={3} />
            <br />

            <div className="flexRow">
              <div>
                <TextSkeleton
                  height={48}
                  styles={{ width: "120px", marginRight: "1rem" }}
                />
              </div>
              <TextSkeleton height={48} width={100} />
            </div>
          </div>
        </div>
      </div>
      <div className="card p2 mt15">
        <div className="flexRow align-center justify-center mb1">
          <TextSkeleton
            height={30}
            styles={{ width: "120px", marginRight: "1rem" }}
          />
          <TextSkeleton height={30} styles={{ width: "120px" }} />
        </div>
        <TextSkeleton height={500} width={100} />
      </div>
    </div>
  );
}
