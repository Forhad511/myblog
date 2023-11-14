import React, { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Product from "../Product";
import "./ProductDetails.css";
import IconButton from "../../IconButton/IconButton";
import {
  getProductsAction,
  getProductsByImageAction,
} from "../../../actions/productAction";
import ProductLoading from "../ProductLoading";

const ProductSuggestion = React.memo(function ProductSuggestion({
  platform,
  search,
  height,
}) {
  const ref = useRef(null);
  const product = useSelector((state) => state.products);
  const productDispatch = useDispatch();
  const [scroll, setScroll] = useState(false);
  const [error, setError] = useState(null);
  const [autoScroll, setAutoScroll] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 600) {
      setScroll(false);
    }
    if (position <= 50) {
      setScroll(true);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setScroll(true);
    }, 500);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    if (product.productList === null) {
      setLoading(true);
      if (!search.includes("https")) {
        productDispatch(
          getProductsAction(platform, search, 1, setLoading, setError)
        );
      } else {
        productDispatch(
          getProductsByImageAction(
            "china",
            null,
            1,
            setLoading,
            setError,
            search
          )
        );
      }
    }
  }, [platform, search, setLoading, product.productList, productDispatch]);
  useEffect(() => {
    if (autoScroll) {
      let timer1 = setInterval(() => {
        ref.current.scrollBy(0, 1);
      }, 5);
      return () => {
        clearInterval(timer1);
      };
    }
  }, [autoScroll]);

  return (
    <>
      {!loading &&
      product &&
      product.productList &&
      product.productList.results ? (
        <div
          className="sideScroll"
          style={{
            height: height,
            overflow: "auto",
            position: "relative",
            width: "100%",
          }}
          ref={ref}
        >
          <div
            className="productList"
            style={{ gridTemplateColumns: "1fr", width: "100%" }}
          >
            {product.productList.results.map((m, l) => (
              <Product
                key={m.product_code + l * l}
                l={m.product_code + l * l}
                m={m}
                p={platform}
                s={search}
                container={true}
              />
            ))}
          </div>
          {scroll && (
            <div
              className="autoScroll"
              style={{
                position: "fixed",
                top: "calc(100vh - 64px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: ref && ref.current ? ref.current.offsetWidth : 0,
              }}
            >
              <IconButton
                icon={require("../../../assets/icons/scroll.svg").default}
                text={"Scroll"}
                height={36}
                font={14}
                imgWidth="18px"
                onClick={() => setAutoScroll((prev) => !prev)}
              />
            </div>
          )}
        </div>
      ) : (
        <div
          className="sideScroll"
          style={{ height: height, overflow: "auto", position: "relative" }}
          ref={ref}
        >
          <ProductLoading platform={platform} />
        </div>
      )}
    </>
  );
});

export default ProductSuggestion;
