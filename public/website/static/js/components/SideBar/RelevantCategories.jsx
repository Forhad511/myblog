import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function RelevantCategories({ categories, source }) {
  const [parent, setParent] = useState(null);
  const [list, setList] = useState([]);
  useEffect(() => {
    setList(categories);
  }, [categories]);
  return (
    <>
      {
        <ul
          className="adminSidebarUl"
          style={{ borderBottom: "1px solid rgba(0, 0, 0, 0.12)" }}
        >
          {parent !== null && (
            <li
              onClick={() => {
                setList(categories);
                setParent(null);
              }}
            >
              <div className="a">
                <div>
                  <img
                    src={require("../../assets/icons/arrow_back.svg").default}
                    style={{ width: "18px", height: "18px" }}
                    alt=""
                  />
                  <span>{parent}</span>
                </div>
              </div>
            </li>
          )}
          {list.length > 0 &&
            list.map((p, k) => {
              return p.childCategories && p.childCategories.length > 0 ? (
                <li
                  key={p.categoryId}
                  onClick={() => {
                    setList(p.childCategories);
                    setParent(p.categoryEnName);
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
                      <span>{p.categoryEnName}</span>
                    </div>
                    <img
                      src={
                        require("../../assets/icons/arrow_right.svg").default
                      }
                      style={{ width: "18px", height: "18px" }}
                      alt=""
                    />
                  </div>
                </li>
              ) : (
                <li key={p.categoryId}>
                  <Link
                    className="a"
                    to={`/shop?source=${source}&search=${
                      p.categoryEnName
                    }&page=${1}`}
                  >
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
                      <span>{p.categoryEnName}</span>
                    </div>
                    <img
                      src={
                        require("../../assets/icons/arrow_right.svg").default
                      }
                      style={{ width: "18px", height: "18px" }}
                      alt=""
                    />
                  </Link>
                </li>
              );
            })}
        </ul>
      }
    </>
  );
}
