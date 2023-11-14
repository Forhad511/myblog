import "./ProductDetails.css";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Count from "./Count";
import TableRow from "./TableRow";
import IconButton from "../../IconButton/IconButton";
import SingleTableRow from "./SingleTableRow";
import TaxShippingTable from "./TaxShippingTable";
import { getCharges } from "../../../utils/ShippingCharges";
import { placeOrder } from "../../../api/Order";
import ReactImageMagnify from "react-image-magnify";
import { useDispatch } from "react-redux";
import LazyImageComp from "../../LazyImageComp";
import moment from "moment";
import SaleCountDown from "./SaleCountDown";
import SubImages from "./SubImages";
import { useHistory } from "react-router";
import Popup from "../../Popup/Popup";
import Ranges from "./Ranges";

import {
  saveWishlist,
  removeWishlist,
  checkWishlist,
} from "../../../api/wishlist";

import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  EmailIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
import { getCount } from "../../../actions/countAction";
import {
  bankPayOffer,
  getFakePrice,
  getOfferTime,
  getPreWinterOfferTime,
  numberEnToBn,
  secondOfferStart,
} from "../../../utils/getOfferTime";

const ProductDetails = React.memo(function ProductDetails({
  data,
  source,
  product_code,
  setImageLoaded,
  search,
  imageLoaded,
  isAuthenticated,
  original,
}) {
  const ref = useRef();
  const history = useHistory();

  const [table, setTable] = useState([]);
  const [shipping, setShipping] = useState(
    getCharges(data.country.toLowerCase())[0]
  );

  const [final, setFinal] = useState([]);
  const [inWishList, setInWishList] = useState(false);
  const [video, setVideo] = useState(false);
  const [popUp, setPopUp] = useState("");
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [activeRange, setActiveRange] = useState(0);
  const [rangePrice, setRangePrice] = useState(false);
  const [finalPrice, setFinalPrice] = useState(0);
  const [cartActive, setCartActive] = useState(false);
  const [cartType, setCartType] = useState(null);

  const [fullTable, setFullTable] = useState(
    data && data.product_details.variations
      ? Object.entries(data.product_details.variations)
      : []
  );

  let productType =
    data && data.product_details.variations ? "variable" : "simple";

  const minQty =
    data.product_details.minimum_quantity &&
    data.product_details.minimum_quantity > 3
      ? data.product_details.minimum_quantity
      : 3;
  const minimumString =
    // "Minimum order quantity " + minQty + " & minimum order amount Tk 1500";
    `সম্মানিত গ্রাহক এই পণ্যটি সর্বনিম্ন ${numberEnToBn(
      minQty
    )} পিস এবং ${numberEnToBn(1500)} টাকার অর্ডার করতে হবে।`;

  let product_category =
    data && data.category && data.category.name
      ? data.category.name
      : "Unknown";

  const [loading, setLoading] = useState(false);
  const wishListDispatch = useDispatch();
  const cartDispatch = useDispatch();
  const [current, setCurrent] = useState(
    data.product_details && data.product_details.images
      ? data.product_details.images[0]
      : ""
  );
  const [selected, setSelected] = useState(null);
  let sortedGroupArray = [];
  let groups = [];
  if (data.product_details && data.product_details.groups) {
    groups = Object.entries(data.product_details.groups);
    sortedGroupArray = groups.sort((a, b) => b[1].has_image - a[1].has_image);
  }

  useEffect(() => {
    window.scrollTo({ top: 0 });
    let arr = [];
    sortedGroupArray
      .slice(0, groups.length > 1 ? groups.length - 1 : groups.length)
      .forEach((el, index) => {
        arr.push({
          name: el[0],
          value: Object.entries(el[1].values)[0]
            ? Object.entries(el[1].values)[0]
            : [],
        });
      });
    setSelected(arr);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let quan = 0;
    let thisPrice = 0;
    let price = 0;
    final.forEach((p, k) => {
      quan = quan + p.q;
      thisPrice = rangePrice ? rangePrice : p.p;
      price = price + thisPrice * p.q;
    });
    setTotalQuantity(quan);
    if (quan >= minQty && price >= 1500) {
      setCartActive(true);
      setTotalQuantity(quan);
    } else {
      setCartActive(false);
      setTotalQuantity(quan);
    }
  }, [final, rangePrice]);

  const getMatch = (key, value, type) => {
    if (selected) {
      let index = selected.findIndex(
        (el) => el.name === key && el.value[0] === value
      );
      if (index >= 0 && type === "img") return "selected";
      else if (index >= 0 && type === "span") return "spanSelected";
    }
    return "";
  };

  const updateCurrentProduct = (key, newValue) => {
    let selectedTmp = [...selected];
    let index1 = selectedTmp.findIndex((el) => {
      return el.name === key;
    });
    if (index1 >= 0) {
      selectedTmp[index1].value = newValue;
    } else {
      selectedTmp.push({ name: key, value: [newValue[0], newValue[1]] });
    }
    setSelected(selectedTmp);
  };

  useEffect(() => {
    if (selected && data.product_details && data.product_details.variations) {
      let array = Object.entries(data.product_details.variations);
      selected.forEach((el) => {
        array = array.filter((elm) => elm[1].variants[el.name] === el.value[0]);
      });
      setTable(array);
    }
  }, [selected, data.product_details]);

  const getVariationQuantity = (id) => {
    let index = final.findIndex((el) => el.i === id);
    if (index >= 0) {
      return final[index].q;
    } else {
      return 0;
    }
  };

  const getVariationQuantityByType = (type) => {
    let count = 0;
    final.forEach((el) => {
      if (el.d && el.d.includes(type)) {
        count = count + el.q;
      }
    });
    return count;
  };

  const getSelected = (p) => {
    let m = "";
    if (selected && selected.length > 0) {
      let data = [...selected];
      if (data && data.length > 0) {
        let index = data.findIndex((el) => el.name === p);
        if (data[index] && data[index].value) {
          m = data[index].value[0];
        }
      }
    }
    return m;
  };

  console.log("final");
  console.log(final);

  const saveCartData = () => {
    if (shipping) {
      let product = {};
      //product.i = data.id;
      product.product_code = data.product_code;
      product.source = data.source;

      if (final.length > 0) {
        if (sortedGroupArray && sortedGroupArray.length > 0) {
          let productVar = [];
          final.forEach((el) => {
            productVar.push({
              id: el.i,
              qty: el.q,
              add_ons: el.a,
            });
          });
          product.variations = JSON.stringify(productVar);
        } else {
          product.qty = final[0].q;
          product.add_ons = JSON.stringify(final[0].a);
        }
      }
      product.shipping_method = shipping.type;
      if (product) {
        setLoading(true);
        let dataLayer = window.dataLayer || [];
        dataLayer.push({ ecommerce: null });
        dataLayer.push({
          event: "add_to_cart",
          ecommerce: {
            items: [
              {
                item_name: data.title,
                item_id: data.product_code,
                item_brand: "Wholesalecart",
                item_category:
                  data.category && data.category.name ? data.category.name : "",
                item_list_name: "Cart Items",
                price:
                  data.sale_price > 0 ? data.sale_price : data.regular_price,
                quantity: totalQuantity,
              },
            ],
          },
        });
        placeOrder(product, tryToPlaceOrder);
      }
    }
  };

  const processCart = (type) => {
    // setCartType(type);
    // alert(cartType);

    if (!cartActive) {
      setPopUp("minimum");
    } else {
      if (type === "cart" || type === "buy") {
        setCartType(type);
      }
      if (!isAuthenticated) {
        setPopUp("login");
      }
    }
  };

  useEffect(() => {
    if (isAuthenticated && (cartType === "cart" || cartType === "buy"))
      saveCartData();
  }, [cartType]);

  const processWishlist = () => {
    if (!isAuthenticated) {
      setPopUp("login_wishlist");
    } else {
      manageWishlist();
    }
  };

  const manageWishlist = () => {
    if (!inWishList) {
      let wishlistData = {};
      wishlistData.source = data.source;
      wishlistData.title = data.title;
      wishlistData.image = data.image;
      wishlistData.product_code = data.product_code;
      wishlistData.price = data.regular_price;

      saveWishlist(wishlistData, afterPerformWishlist, setInWishList);
    } else {
      removeWishlist(inWishList, afterPerformWishlist, 0, 0, setInWishList);
    }
  };

  const afterPerformWishlist = () => {
    setLoading(false);
    wishListDispatch(getCount());
  };

  /*
  const buyProduct = () => {
    if (shipping) {
      let product = {};
      product.i = data.id;
      product.c = data.product_code;
      product.src = data.source;
      if (final.length > 0) {
        if (sortedGroupArray && sortedGroupArray.length > 0) {
          let productVar = [];
          final.forEach((el) => {
            productVar.push({
              i: el.i,
              q: el.q,
              a: el.a,
            });
          });
          product.v = JSON.stringify(productVar);
        } else {
          product.q = final[0].q;
          product.a = final[0].a;
        }
      }
      product.s = shipping;
      let dateArray = shipping.time.split("-");
      let from = moment(new Date())
        .add(parseInt(dateArray[0]), "days")
        .format("MMM DD YYYY");
      let to = moment(new Date())
        .add(parseInt(dateArray[1]), "days")
        .format("MMM DD YYYY");
      let finalDateString = from + " to " + to;
      product.s.date = finalDateString;
      if (product) {
        setLoading(true);
        placeOrder(JSON.stringify(product), tryToPlaceOrder);
      }
    }
  };
*/
  const tryToPlaceOrder = (cart_id, message) => {
    //alert(cartType);
    setLoading(false);
    setCartType(null);

    cartDispatch(getCount());

    if (cartType === "cart") {
      if (cart_id) {
        setPopUp("cart_success");
      } else {
        setPopUp("cart_failed");
      }
    } else if (cartType === "buy" && cart_id) {
      let cart_ids = [];
      cart_ids.push(cart_id);
      let url = "/checkout/" + btoa(JSON.stringify(cart_ids));
      history.push(url);
    }
  };

  const goToCart = () => {
    history.push("/cart");
  };

  let quote = data.title + "\n\nProduct Link - " + window.location.href;
  let device = window.innerWidth < 768 ? true : false;

  useEffect(() => {
    if (data && !inWishList) {
      let checkData = {};
      checkData.source = data.source;
      checkData.product_code = data.product_code;
      checkWishlist(checkData, setLoading, setInWishList);
    }
  }, [data]);

  let seller_score = 0;
  if (data.seller && data.seller.review) {
    seller_score = data.seller.review;

    if (seller_score <= 10) {
      seller_score = seller_score + "/" + 10;
    } else if (seller_score <= 20) {
      seller_score = seller_score + "/" + 20;
    } else if (seller_score <= 50) {
      seller_score = seller_score + "/" + 50;
    } else if (seller_score <= 100) {
      seller_score = seller_score + "/" + 100;
    }
  }

  return (
    <div className="card productDetailsContainer">
      <div className="p15 bottom-border">
        {original ? (
          <a href={original} target="_blank" rel="noreferrer">
            <h1 className="productDetailTitle">{data.title}</h1>
          </a>
        ) : (
          <h1 className="productDetailTitle">{data.title}</h1>
        )}
      </div>

      {popUp === "login" ? (
        <Popup
          setPopUp={setPopUp}
          type="login"
          chainAction={() => saveCartData()}
        ></Popup>
      ) : popUp === "login_wishlist" ? (
        <Popup
          setPopUp={setPopUp}
          type="login"
          chainAction={() => manageWishlist()}
        ></Popup>
      ) : popUp === "minimum" ? (
        <Popup
          setPopUp={setPopUp}
          title="Information"
          message={minimumString}
          bt1Text="Ok"
        ></Popup>
      ) : popUp === "cart_success" ? (
        <Popup
          setPopUp={setPopUp}
          title="Success"
          message="Product added to cart successfully"
          bt1Text="Go to Cart"
          bt2Text="Continue Shopping"
          bt1Action={goToCart}
        />
      ) : popUp === "cart_failed" ? (
        <Popup
          setPopUp={setPopUp}
          title="Failed"
          message="Something went wrong"
          bt1Text="Ok"
        />
      ) : (
        <></>
      )}

      <div className="grid productDetails">
        <div className="imageSection">
          {data.product_details && data.product_details.video_url && video ? (
            <video width="100%" height="auto" controls autoPlay>
              <source src={data.product_details.video_url} type="video/mp4" />
            </video>
          ) : (
            <div className="mainProductImageContainer" ref={ref}>
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: "Product Image",
                    height:
                      ref && ref.current
                        ? source === "pakistan"
                          ? ref.current.offsetWidth * 1.4
                          : ref.current.offsetWidth
                        : 300,
                    // isFluidWidth: source === "amazon" ? true : false,
                    width: ref && ref.current ? ref.current.offsetWidth : 300,
                    src: current,
                    onLoad: () => {
                      setImageLoaded(true);
                    },
                  },
                  largeImage: {
                    objectFit: "contain",
                    src: current,
                    width: 800,
                    height: source === "pakistan" ? 800 * 1.4 : 800,
                    backgroundColor: "white",
                  },
                  enlargedImagePosition: "over",
                  imageClassName: "mainProductImage",
                  className: imageLoaded ? "whiteBack" : "magnifyRoot",
                }}
              />
            </div>
          )}

          <div
            className="mainSubImagesContainer mt1"
            style={{
              width:
                window.screen.width <= 768
                  ? `${window.screen.width - 56}px`
                  : "100%",
            }}
          >
            <div className="subImageContainer mainSubImages">
              {data.product_details && data.product_details.video_url && (
                <div className="videoThumbnailContainer">
                  <div className="play">
                    <img
                      onClick={() => setVideo(true)}
                      src={require("../../../assets/icons/play.svg").default}
                      style={{
                        width: "36px",
                        height: "36px",
                        margin: 0,
                        padding: 0,
                      }}
                      alt=""
                    />
                  </div>
                  <img
                    style={{
                      marginRight: "0",
                      marginBottom: "0",
                      objectFit: "contain",
                    }}
                    src={data.product_details.images[0]}
                    alt=""
                  />
                </div>
              )}
              {data.product_details && data.product_details.images && (
                <SubImages
                  data={data}
                  setVideo={setVideo}
                  setCurrent={setCurrent}
                />
              )}
            </div>
          </div>
        </div>
        <div className="detailsSection">
          <div>
            {moment(new Date()).isBefore(getPreWinterOfferTime) ? (
              <div
                className="saleChinaOff cardHighlight mb05"
                style={{ borderRadius: "8px", padding: "0.75rem 1rem " }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  {/* <img
                    src={require("../../../assets/banner/1111.png").default}
                    alt=""
                    style={{ height: "54px", marginRight: "1rem" }}
                  /> */}
                  <p
                    style={{
                      fontWeight: "bold",
                      marginTop: ".275rem",
                      textTransform: "uppercase",
                      backgroundColor: "#AC0000",
                      color: "#fff",
                      padding: "0.275rem 0.5rem",
                      borderRadius: "4px",
                      fontSize: "16px",
                    }}
                  >
                    পবিত্র মাহে রমজান অফার ২০২৩
                  </p>
                  <h3
                    style={{
                      fontWeight: "bold",
                      margin: "0.5rem 0 0.375rem 0",
                    }}
                  >
                    {
                      getFakePrice(
                        data.product_code,
                        data.sale_price ? data.sale_price : data.regular_price
                      ).percentage
                    }
                    {"% "}
                    Flat Discount
                  </h3>
                  <p
                    style={{ fontSize: "14px", marginRight: "1rem" }}
                    className="mbMobile"
                  >
                    {/* ব্যাংকে পেমেন্ট করলেই পাচ্ছেন ৩% ইনস্ট্যান্ট ক্যাশব্যাক, যত
                    খুশি ততবার। */}
                    যেকোনো পণ্য কিনলেই পাচ্ছেন ১০% ফ্লাট ডিসকাউন্ট।
                  </p>
                </div>
                <div>
                  <SaleCountDown
                    data={data}
                    source={"china"}
                    started={true}
                    simple={true}
                    endDate={
                      moment(new Date()).isBefore(secondOfferStart)
                        ? moment(secondOfferStart)
                        : moment(getPreWinterOfferTime)
                    }
                  />
                  <p
                    style={{
                      color: "#b00b",
                      fontSize: 13,
                      marginTop: "0.525rem",
                      textTransform: "uppercase",
                      fontWeight: "bold",
                    }}
                  >
                    {moment(new Date()).isBefore(secondOfferStart)
                      ? "১০ জানুয়ারি, ২০২২ পর্যন্ত।"
                      : "১৭ জানুয়ারি, ২০২২ পর্যন্ত।"}
                  </p>
                </div>
                {/* {navigator.userAgent !== "wholesalecartapp" && (
                  <a
                    href="https://play.google.com/store/apps/details?id=com.wholesalecartbd.mobileapp"
                    target={"_blank"}
                    without
                    rel="noreferrer"
                  >
                    <button
                      className="bt darkBtn"
                      style={{
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={
                          require("../../../assets/icons/playstore_icon.png")
                            .default
                        }
                        style={{ width: "20px", marginRight: "0.5rem" }}
                        alt=""
                      />
                      Download Mobile App
                    </button>
                  </a>
                )} */}
              </div>
            ) : (
              //   <div
              //     className="saleChinaOff cardHighlight mb05"
              //     style={{
              //       borderRadius: "8px",
              //       padding: "0.75rem 1rem",
              //     }}
              //   >
              //     <div
              //       style={{
              //         display: "flex",
              //         flexDirection: "column",
              //         alignItems: "flex-start",
              //       }}
              //     >
              //       <h3
              //         style={{
              //           fontWeight: "bold",
              //           margin: "0.5rem 0 0.375rem 0",
              //         }}
              //       >
              //         {"3% "}
              //         Cashback Offer
              //       </h3>
              //       <p
              //         style={{ fontSize: "14px", marginRight: "1rem" }}
              //         className="mbMobile mb05"
              //       >
              //         ব্যাংকে পেমেন্ট করলেই পাচ্ছেন ৩% ইনস্ট্যান্ট ক্যাশব্যাক, যত
              //         খুশি ততবার।
              //       </p>
              //       {navigator.userAgent !== "wholesalecartapp" && (
              //         <a
              //           href="https://play.google.com/store/apps/details?id=com.wholesalecartbd.mobileapp"
              //           target={"_blank"}
              //           without
              //           rel="noreferrer"
              //         >
              //           <button
              //             className="bt darkBtn"
              //             style={{
              //               color: "white",
              //               display: "flex",
              //               alignItems: "center",
              //             }}
              //           >
              //             <img
              //               src={
              //                 require("../../../assets/icons/playstore_icon.png")
              //                   .default
              //               }
              //               style={{ width: "20px", marginRight: "0.5rem" }}
              //               alt=""
              //             />
              //             Download Mobile App
              //           </button>
              //         </a>
              //       )}
              //     </div>
              //     {/* {navigator.userAgent !== "wholesalecartapp" && (
              //   <a
              //     href="https://play.google.com/store/apps/details?id=com.wholesalecartbd.mobileapp"
              //     target={"_blank"}
              //     without
              //     rel="noreferrer"
              //   >
              //     <button
              //       className="bt darkBtn"
              //       style={{
              //         color: "white",
              //         display: "flex",
              //         alignItems: "center",
              //       }}
              //     >
              //       <img
              //         src={
              //           require("../../../assets/icons/playstore_icon.png")
              //             .default
              //         }
              //         style={{ width: "20px", marginRight: "0.5rem" }}
              //         alt=""
              //       />
              //       Download Mobile App
              //     </button>
              //   </a>
              // )} */}
              //   </div>
              <></>
            )}
          </div>
          {/* {moment(new Date()).isBefore(bankPayOffer) && (
            <div
              className="cardHighlight mb1"
              style={{
                borderRadius: "8px",
                padding: "0.75rem 1rem 0.5rem 1rem",
              }}
            >
              <div className="">
                <img
                  src={require("../../../assets/vector/bkash.svg").default}
                  alt=""
                  style={{ height: "40px", marginRight: "1rem" }}
                />
                <img
                  src={require("../../../assets/icons/bank.png").default}
                  alt=""
                  style={{ height: "40px" }}
                />
              </div>
              <h4 style={{ fontSize: "14px", fontWeight: 500 }}>

                বিকাশ অথবা ব্যাংকে পেমেন্ট করলেই পাচ্ছেন ৩% ইনস্ট্যান্ট
                ক্যাশব্যাক, যত খুশি ততবার।
              </h4>
              <h4
                  style={{
                    marginTop: "16px",
                    marginBottom: "16px",
                    color: "#ffffff",
                    background: "#cb4147",
                    width: "fit-content",
                    padding: "4px 8px",
                    borderRadius: "8px",
                    fontSize: "16px",
                    fontWeight: 500,
                  }}
                >
                  কুপন কোডঃ 7OFF
                </h4>
              <p style={{ fontSize: "14px", marginBottom: "0.5rem" }}>
                বিকাশ দিয়ে পেমেন্ট করলেই বিকাশ ওয়ালেটে পাচ্ছেন ৩% ইনস্ট্যান্ট
                ক্যাশব্যাক, যত খুশি ততবার।
                <p style={{ marginTop: "0.5rem" }}>
                  এছাড়া ব্যাংকে যেকোন পেমেন্ট করলেই পাচ্ছেন ৩% ইনস্ট্যান্ট
                  ক্যাশব্যাক, যত খুশি ততবার।
                </p>
              </p>
            </div>
          )} */}

          {data.product_details.ranges &&
            data.product_details.ranges.length > 0 && (
              <Ranges
                data={data}
                final={final}
                activeRange={activeRange}
                setActiveRange={setActiveRange}
                setRangePrice={setRangePrice}
                table={table}
                setTable={setTable}
                setFinalPrice={setFinalPrice}
                setFullTable={setFullTable}
                fullTable={fullTable}
              />
            )}
          {sortedGroupArray
            .slice(0, groups.length > 1 ? groups.length - 1 : groups.length)
            .map((p, k) => (
              <div className="mt1 mb1" key={Math.random()}>
                <b>
                  {p[0] + " :"} {getSelected(p[0])}
                </b>
                <br />
                <div className="subImageContainer cursor-pointer">
                  {Object.entries(p[1].values).map((m, l) =>
                    m[1] !== 0 ? (
                      <div
                        key={l}
                        className={"subImages " + getMatch(p[0], m[0], "img")}
                        onClick={() => {
                          updateCurrentProduct(p[0], m);
                          let imageUrl = m[1];
                          if (source === "aliexpress") {
                            imageUrl = m[1].replace("_50x50", "_400x400");
                          }
                          setCurrent(imageUrl);
                        }}
                      >
                        <LazyImageComp
                          url={m[1]}
                          title={m[0]}
                          platform={source}
                        />
                        <Count number={getVariationQuantityByType(m[0])} />
                      </div>
                    ) : (
                      <div
                        key={Math.random()}
                        className="variationContainer"
                        style={{ borderRadius: "10px" }}
                        onClick={() => {
                          updateCurrentProduct(p[0], m);
                        }}
                      >
                        <div
                          className={
                            "productVariationSelector cursor-pointer " +
                            getMatch(p[0], m[0], "span")
                          }
                        >
                          <span>{m[0]}</span>
                        </div>
                        <Count
                          number={getVariationQuantityByType(m[0])}
                          color={"spanSelectedBadge"}
                        />
                      </div>
                    )
                  )}
                </div>
              </div>
            ))}
          {sortedGroupArray && sortedGroupArray.length > 0 ? (
            <div className="tableContainer">
              <table id="customers">
                <tbody>
                  <tr>
                    <th>{sortedGroupArray[groups.length - 1][0]}</th>
                    <th>Price</th>
                    <th>Quantity</th>
                  </tr>
                  {table && table.length > 0 ? (
                    table.map((p, k) => (
                      <TableRow
                        key={p[0]}
                        p={p}
                        id={data.id}
                        product_code={data.product_code}
                        index={k}
                        source={source}
                        price={
                          data.sale_price ? data.sale_price : data.regular_price
                        }
                        table={table}
                        setTable={setTable}
                        sortedGroupArray={sortedGroupArray}
                        groups={groups}
                        final={final}
                        setFinal={setFinal}
                        getVariationQuantity={getVariationQuantity}
                        addons={
                          data.product_details.add_ons &&
                          data.product_details.add_ons.length > 0
                            ? data.product_details.add_ons
                            : []
                        }
                      />
                    ))
                  ) : (
                    <tr>
                      <td className="p2" colSpan={4}>
                        <img
                          src={
                            require("../../../assets/vector/empty.svg").default
                          }
                          alt=""
                        />
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="tableContainer">
              <table id="customers">
                <tbody>
                  <tr>
                    <th>Price</th>
                    <th>Quantity</th>
                  </tr>
                  <SingleTableRow
                    id={data.product_code}
                    price={
                      data.sale_price && parseInt(data.sale_price) > 0
                        ? data.sale_price
                        : data.regular_price
                    }
                    product_code={data.product_code}
                    final={final}
                    setFinal={setFinal}
                    addons={
                      data.product_details &&
                      data.product_details.add_ons &&
                      data.product_details.add_ons.length > 0
                        ? data.product_details.add_ons
                        : []
                    }
                  />
                </tbody>
              </table>
            </div>
          )}
          {table && table.length > 4 && (
            <div className="flexRow align-center justify-center mt05">
              <img
                style={{
                  width: "16px",
                  transform: "rotate(270deg)",
                  marginRight: "6px",
                }}
                src={require("../../../assets/icons/backward.svg").default}
                alt=""
              />
              <span style={{ fontSize: "14px" }}>Scroll More</span>
            </div>
          )}
          <TaxShippingTable
            data={data}
            final={final}
            shipping={shipping}
            setShipping={setShipping}
            rangePrice={rangePrice}
            finalPrice={finalPrice}
            setFinalPrice={setFinalPrice}
          />

          <div className="buyNowContainer mt2">
            <div className="">
              <IconButton
                icon={require("../../../assets/icons/favourite.svg").default}
                disabled={loading}
                text={inWishList ? "Saved" : "Save"}
                font={"16px"}
                imgWidth={"24px"}
                classNameForward={
                  !inWishList ? "disabled mobilefont" : "mobilefont"
                }
                onClick={() => processWishlist()}
              />
            </div>
            <div className="addToCartBt">
              <IconButton
                icon={require("../../../assets/icons/cart.svg").default}
                text={
                  loading && cartType === "cart" ? "Processing" : "Add to Cart"
                }
                onClick={() => {
                  processCart("cart");
                }}
                disabled={loading}
                font={"16px"}
                imgWidth={"24px"}
                classNameForward={
                  !cartActive ? "disabled mobilefont" : "mobilefont"
                }
              />
            </div>
            <div className="buyNowBt">
              <IconButton
                icon={require("../../../assets/icons/cart_2.svg").default}
                text={loading && cartType === "buy" ? "Processing" : "Buy Now"}
                onClick={() => processCart("buy")}
                disabled={loading}
                font={"16px"}
                imgWidth={"24px"}
                classNameForward={
                  !cartActive ? "disabled mobilefont" : "mobilefont"
                }
              />
            </div>
          </div>

          <div className="mt2 groupData">
            <div>
              <b>Product Code: </b>
              <span>{product_code}</span>
            </div>
            {/* <div>
              <b>Source: </b>
              <span>{source}</span>
            </div> */}
            <div>
              <b>Category: </b>
              <span>{product_category}</span>
            </div>
            {data.total_sold ? (
              <div>
                <b>Total Sold: </b>
                <span>{data.total_sold}</span>
              </div>
            ) : (
              ""
            )}

            {seller_score ? (
              <div>
                <b>Seller Score: </b>
                <span>{seller_score}</span>
              </div>
            ) : (
              ""
            )}

            {/* {data.seller && data.seller.name && (
              <div>
                <b>Seller: </b>
                <span>{data.seller.name}</span>
              </div>
            )} */}

            <div
              className="flexRow"
              style={{
                // width: "fit-content",
                marginTop: "20px",
                flexWrap: "wrap",
              }}
            >
              {data.source !== "pakistan" &&
                data.seller &&
                data.seller.seller_code && (
                  <div>
                    <Link
                      to={
                        "/shop/" + source + "/store-" + data.seller.seller_code
                      }
                      aria-label="seller"
                      title="Seller Store"
                    >
                      <IconButton
                        icon={require("../../../assets/icons/shop.svg").default}
                        text={"Visit Seller Store"}
                        font={"16px"}
                        imgWidth={"24px"}
                        classNameForward={
                          !cartActive ? "disabled mobilefont" : "mobilefont"
                        }
                      />
                    </Link>
                  </div>
                )}
              {data.category && (
                <div
                  style={{
                    marginLeft: "0.75rem",
                    marginRight: " 0.75rem",
                  }}
                >
                  <Link
                    to={"/seller?category=" + data.category.name}
                    aria-label="seller"
                    title="View Sellers"
                  >
                    <IconButton
                      icon={
                        require("../../../assets/icons/sellers.svg").default
                      }
                      text={"View Sellers"}
                      font={"16px"}
                      imgWidth={"24px"}
                      classNameForward={
                        !cartActive ? "disabled mobilefont" : "mobilefont"
                      }
                    />
                  </Link>
                </div>
              )}
              <div>
                <div
                  style={{ marginTop: 0 }}
                  onClick={() => {
                    window.location.href = `/shop/china/imagesearch?imagesrc=${data.image}`;
                  }}
                >
                  <IconButton
                    icon={data.image}
                    text={"Image Search"}
                    font={"16px"}
                    imgWidth={"24px"}
                    classNameForward={
                      !cartActive ? "disabled mobilefont" : "mobilefont"
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt1 flexRow">
            {false ? (
              <img
                src={
                  require("../../../assets/vector/facebook_round.svg").default
                }
                alt=""
                style={{
                  width: "30px",
                  height: "30px",
                  marginRight: "0.5rem",
                }}
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      text: quote,
                      url: window.location.href,
                    });
                  } else if (window.AndroidShareHandler) {
                    window.AndroidShareHandler.share({
                      text: quote,
                      url: window.location.href,
                    });
                  }
                }}
              />
            ) : (
              <FacebookShareButton
                url={window.location.href}
                quote={quote}
                className="mr05"
              >
                <FacebookIcon size={32} round />
              </FacebookShareButton>
            )}
            <TwitterShareButton
              url={window.location.href}
              title={quote}
              className="mr05"
            >
              <TwitterIcon size={32} round />
            </TwitterShareButton>
            {device ? (
              <img
                src={
                  require("../../../assets/vector/whatsapp_round.svg").default
                }
                alt=""
                style={{
                  width: "30px",
                  height: "30px",
                  marginRight: "0.5rem",
                }}
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      text: quote,
                      url: window.location.href,
                    });
                  } else if (window.AndroidShareHandler) {
                    window.AndroidShareHandler.share({
                      text: quote,
                      url: window.location.href,
                    });
                  }
                }}
              />
            ) : (
              <WhatsappShareButton
                url={window.location.href}
                title={quote}
                separator=":: "
                className="mr05"
              >
                <WhatsappIcon size={32} round />
              </WhatsappShareButton>
            )}

            <EmailShareButton
              url={quote}
              subject={"View this task"}
              body="You can view this task from the link provided"
              className="mr05"
            >
              <EmailIcon size={32} round />
            </EmailShareButton>
            <div
              className="bt"
              style={{
                borderRadius: "64px",
                width: "80px",
                height: "31px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
              onClick={() => {
                navigator.clipboard.writeText(quote);
                let temp = document.createElement("textarea");
                temp.value = quote;
                document.body.appendChild(temp);
                temp.select();
                document.execCommand("copy");
                document.body.removeChild(temp);
              }}
            >
              <img
                src={require("../../../assets/icons/copy.svg").default}
                style={{
                  width: "16px",
                  height: "16px",
                  marginRight: 4,
                }}
                alt=""
              />
              <span style={{ fontSize: "14px" }}>Copy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ProductDetails;
