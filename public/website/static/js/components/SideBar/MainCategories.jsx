import React, { useState, useEffect } from "react";
import { chinaCategories } from "../../utils/ChinaCategories";
import { pakistanCategories } from "../../utils/PakistanCategories";
//import { aliExpressCategories } from "../../utils/AliExpressCategories";
//import { amazonCategories } from "../../utils/AmazonCategories";
import { alibabaCategories } from "../../utils/AlibabaCategories";
import { Link } from "react-router-dom";
const MainCategories = React.memo(function MainCategories({
  isClosed,
  setClosed,
  handleDrawer,
  platForm,
}) {
  const [parent, setParent] = useState(null);
  const [list, setList] = useState([]);
  useEffect(() => {
    if (platForm === "china") {
      setList([...chinaCategories]);
    }

    if (platForm === "alibaba") {
      setList([...alibabaCategories]);
    }
    if (platForm === "pakistan") {
      setList([...pakistanCategories]);
    } else return [];
  }, [platForm]);

  const getPlatformCategories = () => {
    if (platForm === "china") {
      return [...chinaCategories];
    }

    if (platForm === "alibaba") {
      return [...alibabaCategories];
    }
    if (platForm === "pakistan") {
      return [...pakistanCategories];
    } else return [];
  };

  const getFilteredUri = (key) => {
    //return key.split(" & ").join(" ").toLowerCase();
    if (platForm !== "pakistan") {
      return key.replace(/[^A-Z0-9]+/gi, "-").toLowerCase();
    } else {
      return key;
    }
  };

  return (
    <>
      {!isClosed ? (
        <ul
          className="adminSidebarUl"
          style={{ borderBottom: "1px solid rgba(0, 0, 0, 0.12)" }}
        >
          {parent !== null && (
            <li
              onClick={() => {
                setList(getPlatformCategories());
                setParent(null);
              }}
            >
              <div className="a">
                <div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      className="arrowRight"
                      style={{ width: "20px", marginRight: "0.5rem" }}
                      src={require(`../../assets/icons/arrow_back.svg`).default}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <span>{parent}</span>
                </div>
              </div>
            </li>
          )}
          {list.length > 0 &&
            list.map((p, k) => {
              return p.sub && p.sub.length > 0 ? (
                <li
                  key={p.id}
                  onClick={() => {
                    setList(p.sub);
                    setParent(p.name);
                  }}
                >
                  <div className="a">
                    <div>
                      {p.icon && (
                        <img
                          className="sidebarImage"
                          src={
                            require(`../../assets/vector/${p.icon}.svg`).default
                          }
                          alt=""
                        />
                      )}
                      <span>{p.name}</span>
                    </div>
                    <img
                      className="arrowRight"
                      src={
                        require(`../../assets/icons/arrow_right.svg`).default
                      }
                      alt=""
                      loading="lazy"
                    />
                  </div>
                </li>
              ) : (
                <li key={p.id} onClick={() => handleDrawer()}>
                  <Link
                    className="a"
                    to={`/shop/${platForm}/${
                      p.search ? p.search : getFilteredUri(p.name)
                    }`}
                  >
                    <div>
                      {p.icon && (
                        <img
                          className="sidebarImage"
                          src={
                            require(`../../assets/vector/${p.icon}.svg`).default
                          }
                          alt=""
                          loading="lazy"
                        />
                      )}
                      <span>{p.name}</span>
                    </div>
                    <img
                      className="arrowRight"
                      src={
                        require(`../../assets/icons/arrow_right.svg`).default
                      }
                      alt=""
                      loading="lazy"
                    />
                  </Link>
                </li>
              );
            })}
          {true && (
            <li onClick={() => setClosed(!isClosed)}>
              <div className="a">
                <div>
                  <span>See Less</span>
                </div>
                <img
                  style={{
                    transform: "rotate(270deg)",
                  }}
                  className="arrowRight"
                  src={require(`../../assets/icons/arrow_right.svg`).default}
                  alt=""
                  loading="lazy"
                />
              </div>
            </li>
          )}
        </ul>
      ) : (
        <ul className="adminSidebarUl">
          <li onClick={() => setClosed(!isClosed)}>
            <div className="a">
              <div>
                <span>Categories</span>
              </div>
              <img
                style={{
                  transform: "rotate(90deg)",
                }}
                className="arrowRight"
                src={require(`../../assets/icons/arrow_right.svg`).default}
                alt=""
                loading="lazy"
              />
            </div>
          </li>
        </ul>
      )}
    </>
  );
});
export default MainCategories;
