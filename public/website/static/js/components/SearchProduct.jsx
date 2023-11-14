import React, { useState, useEffect, useRef } from "react";
import { useHistory, useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ImageUploader from "./ImageResizer/ImageUploader";
import { getRedirectUrl } from "../api/Products";
import Loading from "./Loading/Loading";
import { suggestions } from "../utils/SearchSuggestions";

export default function SearchProduct(props) {
  const history = useHistory();
  const location = useLocation();
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const productDispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [placeHolder, setPlaceHolder] = useState(true);
  const state = useSelector((state) => state.platform);

  const suggestionsArray = suggestions();
  let keyword = false;

  if (location.pathname.includes("/shop/")) {
    let pathname = location.pathname;
    let paths = pathname.split("/");

    keyword = paths[3];

    if (keyword) {
      keyword = keyword.trim().split("-").join(" ").toUpperCase();
    }
  }

  useEffect(() => {
    let timer1 = setInterval(() => {
      setPlaceHolder((prev) => !prev);
    }, 4000);
    return () => {
      clearInterval(timer1);
    };
  }, []);

  useEffect(() => {
    if (keyword) {
      let search = keyword;
      setSearch(search);
    } else {
      setSearch("");
    }
    let data = localStorage.getItem("platform");
    if (data) {
      let path = location.pathname + location.search;
      if (path.includes("china")) {
        dispatch({ type: "SET_PLATFORM", payload: "china" });
      } else if (path.includes("alibaba")) {
        dispatch({ type: "SET_PLATFORM", payload: "china" });
      } else if (path.includes("pakistan")) {
        // dispatch({ type: "SET_PLATFORM", payload: "pakistan" });
      } else {
        dispatch({ type: "SET_PLATFORM", payload: "china" });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, history, state, dispatch]);

  const getFilteredUri = (key) => {
    //return key.split(" & ").join(" ").toLowerCase();

    return key.replace(/[^A-Z0-9]+/gi, "-").toLowerCase();
  };

  const performSearch = () => {
    if (search !== "") {
      if (search.includes("https://") || search.includes(".com")) {
        if (search.includes("www.alibaba.com")) {
          //https://www.alibaba.com/product-detail/Free-Sample-Hand-made-Ballerina-High_62324093427.html?spm=a2700.8293689.youMayAlsoLike.6.500267af63smn0
          let end = search.indexOf(".html");
          let newSearch = search.substring(1, end);

          let start = newSearch.lastIndexOf("_") + 2;
          let productCode = search.substring(start, end);

          if (productCode) {
            productCode = "alb-" + productCode;
            history.push(`/shop/${"china"}/${productCode}`);
          }
        } else if (search.includes("m.alibaba.com")) {
          //https://m.alibaba.com/product/62583377385/Hot-sale-black-mesh-shoes-men.html?__sceneInfo=%7B%22cacheTime%22%3A%221800000%22%2C%22type%22%3A%22appDetailShare%22%7D&fbclid=IwAR06W0TGj2yutEGPsXhUlEUM5IPelRNZ0AX8YxPl_to71KW_Gapa-gD3Kf8
          let start = search.indexOf("product/") + 8;
          let newSearch = search.substring(start);
          let end = newSearch.indexOf("/");
          let productCode = newSearch.substring(0, end);

          if (productCode) {
            productCode = "alb-" + productCode;
            history.push(`/shop/${"china"}/${productCode}`);
          }
        }

        if (search.includes("detail.1688.com")) {
          let start = search.indexOf("offer/") + 6;
          let newSearch = search.substring(start);

          let end = newSearch.indexOf(".html");
          let productCode = newSearch.substring(0, end);

          if (productCode) {
            productCode = "abb-" + productCode;
            history.push(
              `/product/${"china"}/${productCode}?source=${"china"}&search=${"link"}`
            );
          }
        } else if (search.includes("m.1688.com")) {
          let productCode = "";
          if (search.includes("offerId=")) {
            // http://detail.m.1688.com/page/index.htm?offerId=613760633862
            let start = search.indexOf("offerId=") + 8;
            productCode = search.substring(start);
            productCode = productCode.replace(/\s/g, "");
          } else {
            // https://detail.1688.com/offer/657134109231.html?spm=a260j.12536059.jr601u7p.4.4e772084I7b1u9
            let metaString =
              search.split("offer/").length > 1
                ? search.split("offer/")[1]
                : "";
            productCode =
              metaString.split(".html").length > 1
                ? metaString.split(".html")[0]
                : "";
          }

          if (productCode) {
            productCode = "abb-" + productCode;
            history.push(
              `/product/${"china"}/${productCode}?source=${"china"}&search=${"link"}`
            );
          }
        }
      } else if (search.includes("abb-") || search.includes("Abb-")) {
        let productCode = search.replace(/\s/g, "").toLowerCase();
        history.push(
          `/product/${"china"}/${productCode}?source=${"china"}&search=${"link"}`
        );
      } else if (search.includes("alb-") || search.includes("Alb-")) {
        let productCode = search.replace(/\s/g, "").toLowerCase();
        history.push(
          `/product/${"alibaba"}/${productCode}?source=${"alibaba"}&search=${"link"}`
        );
      } else {
        // let value = search.split(" & ").join(" ");
        // if (value.includes("%")) {
        //   value = value.split("%").join(" Percent");
        // }
        // let x = state;
        let searchQuery = getFilteredUri(search);
        history.push(`/shop/${state}/${encodeURI(searchQuery)}`);
      }
    }
  };

  return (
    <div
      className="searchContainer platformSelect"
      style={
        props.platform ? { boxShadow: "0 0 0 2px #000", borderRadius: 10 } : {}
      }
    >
      {!props.platform && <ImageUploader />}
      <label htmlFor="name" style={{ width: 0, overflow: "hidden" }}>
        Search
      </label>
      <input
        type="text"
        list="suggestions"
        autoComplete="off"
        name="search"
        id={props.id}
        placeholder={
          props.platform
            ? `Search By Product Link`
            : placeHolder
            ? "Search By Keyword"
            : "Search By Link"
        }
        value={
          search.includes("api.wholesalecart.com") || search.includes("link")
            ? ""
            : search
        }
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            performSearch();
          }
        }}
        style={{
          borderRadius: "0px",
          borderBottomLeftRadius: "4px",
          borderTopLeftRadius: "4px",
          fontSize: "13px",
        }}
      />
      <datalist id="suggestions">
        {suggestionsArray
          .filter((el) => el.includes(search) || el.startsWith(search))
          .slice(0, 4)
          .map((p, k) => (
            <option value={p} key={p} />
          ))}
      </datalist>
      {/* {!props.platform && (
        <select
          name="platform"
          style={{ marginRight: "0.5rem", fontSize: "13px" }}
          onChange={(e) => {
            dispatch({ type: "SET_PLATFORM", payload: e.target.value });
            productDispatch({ type: "SET_PRODUCTS", payload: null });
            let data = localStorage.getItem("platform");
            if (data) {
              let array = JSON.parse(data);
              array.push(e.target.value);
              if (array.length > 50) {
                array.shift();
              }
              localStorage.setItem("platform", JSON.stringify(array));
            } else {
              let platformList = [e.target.value];
              localStorage.setItem("platform", JSON.stringify(platformList));
            }
            if (e.target.value === "china") {
              history.push(`/`);
            } else {
              history.push(`/${e.target.value}`);
            }
          }}
          value={state}
        >
          <option value={"china"}>China</option>
          <option value={"alibaba"}>Alibaba</option>
          <option value={"pakistan"}>Pakistan</option>
        </select>
      )} */}
      <div
        className="bt btSearch"
        onClick={() => {
          performSearch();
        }}
        style={
          props.platform
            ? {
                background: "#000",
                border: "none",
                borderTopRightRadius: 6,
                borderBottomRightRadius: 6,
              }
            : {}
        }
      >
        {loading ? (
          <Loading white={true} />
        ) : (
          <img
            className="arrowRight"
            style={{ width: "24px" }}
            src={require(`../assets/icons/search_white.svg`).default}
            alt=""
          />
        )}
      </div>
    </div>
  );
}
