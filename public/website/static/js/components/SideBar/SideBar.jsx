import React, { useState, useEffect } from "react";
import "./SideBar.css";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import MainCategories from "./MainCategories";
import AccountNavbar from "../../components/Account/Navbar";
import RelevantCategories from "./RelevantCategories";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
const SideBar = React.memo(function SideBar({ sideBar, setSideBar }) {
  const state = useSelector((state) => state.platform);
  const productList = useSelector((state) => state.products.productList);
  const [closed, setClosed] = useState(false);
  const [relCat, setRelCat] = useState(null);
  const history = useHistory();
  const location = useLocation();
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    if (location.pathname.includes("/account")) {
      setPathname("account");
    } else {
      setPathname("");
    }
  }, [location.pathname]);

  const handleDrawer = () => {
    setSideBar(false);
  };
  useEffect(() => {
    if (
      productList &&
      productList.relevant_category &&
      productList.relevant_category.length > 0
    ) {
      setClosed(true);
      setRelCat(productList.relevant_category);
    } else {
      if (state === "pakistan") {
        setClosed(false);
      } else {
        setClosed(false);
      }
    }
  }, [productList, history.location, state]);

  let useSidebar = (
    <div
      className={sideBar ? "sideBarContainer showSideBar" : "sideBarContainer"}
      onClick={(e) => {
        if (e.target.id === "backdrop") {
          handleDrawer();
        }
      }}
    >
      <div className="backDrop" id="backdrop"></div>
      <div className={sideBar ? "sideBar animateSlideBar" : "sideBar"}>
        <MainCategories
          platForm={state}
          isClosed={closed}
          setClosed={setClosed}
          handleDrawer={handleDrawer}
        />
        {/* {state === "pakistan" && (
          <Brands isClosed={0} handleDrawer={handleDrawer} />
        )} */}
        {relCat && relCat.length > 0 && (
          <RelevantCategories
            categories={relCat}
            source={
              productList && productList.source ? productList.source : "china"
            }
          />
        )}
      </div>
    </div>
  );

  let useAccountBar = (
    <div
      className={sideBar ? "sideBarContainer showSideBar" : "sideBarContainer"}
      onClick={(e) => {
        if (e.target.id === "backdrop") {
          handleDrawer();
        }
      }}
    >
      <div className="backDrop" id="backdrop"></div>
      <div className={sideBar ? "sideBar animateSlideBar" : "sideBar"}>
        <AccountNavbar />
      </div>
    </div>
  );

  if (pathname) {
    return useAccountBar;
  } else {
    return useSidebar;
  }
});
export default SideBar;
