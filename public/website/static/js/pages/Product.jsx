import React, { useState, useEffect, useRef, Suspense } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { getProductByID } from "../api/Products";
import ProductDetailsLoading from "../components/Product/ProductDetails/ProductDetailsLoading";
import ProductDetails from "../components/Product/ProductDetails/ProductDetails";
import ProductSuggestion from "../components/Product/ProductDetails/ProductSuggestion";
import ProductSpecification from "../components/Product/ProductDetails/ProductSpecification";
import ProductDescription from "../components/Product/ProductDetails/ProductDescription";
import SellerInfo from "../components/Product/ProductDetails/SellerInfo";
import NoProduct from "../components/Product/NoProduct";
import { useSelector } from "react-redux";
import { isAdmin } from "../utils/AdminChecker";
import OtherProduct from "../components/OtherProduct";

function Product() {
  const userState = useSelector((state) => state);

  const [data, setData] = useState(null);
  const [original, setOriginal] = useState(null);
  const [current, setCurrent] = useState("specification");
  const [loading, setLoading] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [suggestionHeight, setSuggestionHeight] = useState("100vh");
  const [des, setDes] = useState(null);
  const [sellerInfo, setSellerInfo] = useState(null);
  const { meta, search } = useLocation();
  const [error, setError] = useState(null);
  const { id, pid } = useParams();
  const ref = useRef(null);
  useEffect(() => {
    let data = window.location.href;
    let array = data.split("/");
    let element = array[array.length - 1];
    let code = "";
    if (element) {
      code = element.split("?")[0];
    }
    let finalLink = "";
    if (code.includes("abb-")) {
      finalLink = `https://detail.1688.com/offer/${code.substring(4)}.html`;
    } else if (code.includes("alb-")) {
      finalLink = `https://www.alibaba.com/product-detail/_${code.substring(
        4
      )}.html`;
    } else if (parseInt(code)) {
      finalLink = `https://www.sanaullastore.com/catalog/product/view/id/${code} `;
    }
    if (finalLink) {
      setOriginal(finalLink);
    } else {
      setOriginal("");
    }
  }, []);

  useEffect(() => {
    setError(null);
    window.scrollTo({ top: 0 });
    setCurrent("specification");
    setLoading(true);
    getProductByID(id, pid, setData, setLoading, setError);
  }, [id, pid]);

  useEffect(() => {
    if (data && data.error === 0) {
      setSellerInfo(null);
      setDes(data.product_description);
      let dataLayer = window.dataLayer || [];
      dataLayer.push({ ecommerce: null }); // Clear the previous ecommerce object.
      dataLayer.push({
        event: "view_item",
        ecommerce: {
          items: [
            {
              item_name: data.title,
              item_id: data.product_code,
              price: data.sale_price > 0 ? data.sale_price : data.regular_price,
              item_brand: "Wholesalecart",
              item_category:
                data.category && data.category.name ? data.category.name : "",
              item_list_name: "View Product",
              pageCategory: "product",
            },
          ],
        },
      });
    }
  }, [data]);

  useEffect(() => {
    if (ref && ref.current) {
      setSuggestionHeight(ref.current.offsetHeight);
    }
  }, [ref, imageLoaded, current]);

  let searchArray = search.split("&");
  let searchKey =
    searchArray.length > 1 ? search.split("&")[1].substring(7) : "";

  return (
    <div
      className="grid productContainer"
      style={!search ? { gridTemplateColumns: "1fr" } : {}}
    >
      <Suspense fallback={""}>
        <div>
          {!loading && data ? (
            <div ref={ref}>
              <Helmet>
                <meta charSet="utf-8" />
                <title>{data.title} | Wholesalecart</title>
                <meta name="description" content={data.title} />
                <meta
                  property="og:image"
                  content={
                    data.product_details && data.product_details.images
                      ? data.product_details.images[0]
                      : ""
                  }
                />
                <meta property="og:title" content={data.title} />
                <meta property="og:description" content={data.title} />
                <meta property="og:url" content={window.location.href} />
                <meta property="product:brand" content="wholesalecart" />
                <meta property="product:availability" content="in stock" />
                <meta property="product:condition" content="new" />
                <meta
                  property="product:price:amount"
                  content={data.regular_price}
                />
                <meta property="product:price:currency" content="BDT" />
                <meta
                  property="product:retailer_item_id"
                  content={data.product_code}
                />
                <meta
                  property="product:Category"
                  content={
                    data.category && data.category.name
                      ? data.category.name
                      : ""
                  }
                />
                <meta
                  property="product:item_group_id"
                  content={
                    data.category && data.category.name
                      ? data.category.name
                      : ""
                  }
                ></meta>
              </Helmet>
              <ProductDetails
                data={data}
                source={pid}
                product_code={id}
                setImageLoaded={setImageLoaded}
                search={searchKey}
                imageLoaded={imageLoaded}
                isAuthenticated={userState.auth.isAuthenticated}
                original={isAdmin() && original ? original : null}
              />
              <OtherProduct vendor_id={data?.seller?.seller_code} />
              <div
                className="card mt1 tabLayout"
                style={{ paddingTop: "20px" }}
              >
                <div className="flexRow tabHeader">
                  <h4
                    className={`mr1 tabName${
                      current === "specification" ? " tabSelected" : ""
                    }`}
                    onClick={() => setCurrent("specification")}
                  >
                    Specification
                  </h4>
                  <h4
                    className={`mr1 tabName${
                      current === "description" ? " tabSelected" : ""
                    }`}
                    onClick={() => setCurrent("description")}
                  >
                    Description
                  </h4>
                  {data && data.source !== "pakistan" ? (
                    <h4
                      className={`tabName${
                        current === "sellerinfo" ? " tabSelected" : ""
                      }`}
                      onClick={() => setCurrent("sellerinfo")}
                    >
                      Seller Info
                    </h4>
                  ) : (
                    ""
                  )}
                </div>

                {current === "specification" ? (
                  <ProductSpecification data={data} />
                ) : current === "description" ? (
                  <ProductDescription data={data} setDes={setDes} des={des} />
                ) : current === "sellerinfo" ? (
                  <SellerInfo
                    data={data}
                    setSellerInfo={setSellerInfo}
                    sellerInfo={sellerInfo}
                  />
                ) : (
                  ""
                )}
              </div>
            </div>
          ) : (
            <div style={{ height: "100%" }}>
              {error && error.error === 9 ? (
                <div className="card" style={{ height: "100%" }}>
                  <NoProduct />
                </div>
              ) : (
                <ProductDetailsLoading meta={meta} />
              )}
            </div>
          )}
        </div>
        {search && (
          <ProductSuggestion
            height={suggestionHeight}
            platform={pid}
            search={searchKey}
          />
        )}
      </Suspense>
    </div>
  );
}

export default Product;
