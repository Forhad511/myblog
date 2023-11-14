import React from "react";
import LazyImageComp from "../../LazyImageComp";

const SubImages = React.memo(function SubImages({
  data,
  setVideo,
  setCurrent,
}) {
  return (
    <>
      {data.product_details.images.map((p, k) => (
        <div className="subImages" key={Math.random()}>
          <LazyImageComp
            url={p}
            title={"Image"}
            classNameForward="primarySubImage"
            clickEvent={() => {
              setVideo(false);
              setCurrent(p);
            }}
            height="72px"
            width="72px"
          />
        </div>
      ))}
    </>
  );
});

export default SubImages;
