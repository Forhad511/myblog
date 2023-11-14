import React, { useEffect, useState } from "react";
import { getSellerInfo } from "../../../api/Products";
import Loading from "../../Loading/Loading";

export default function SellerInfo({ data, setSellerInfo, sellerInfo }) {
  const [loading, setLoading] = useState(false);

  let sellerCode =
    data.seller && data.seller.seller_code ? data.seller.seller_code : false;

  //alert(sellerCode);

  useEffect(() => {
    if (!sellerInfo) {
      getSellerInfo(sellerCode, setSellerInfo, setLoading);
    }
  }, [sellerCode]);

  return (
    <div className="sellerInfoBox">
      {!loading && sellerInfo ? (
        <table className="sellerInfoTable">
          {Object.entries(sellerInfo).map((a) => (
            <>
              {a[1] && Array.isArray(a[1]) && (
                <>
                  {a[1].map((c) => (
                    <>
                      {c.Name !== "shopUrl" && (
                        <tr>
                          <td>{c.Name}</td>
                          <td>{c.Value}</td>
                        </tr>
                      )}
                    </>
                  ))}
                </>
              )}
              {a[1] && typeof a[1] === "string" && (
                <>
                  {a[0] !== "ProviderType" && (
                    <tr>
                      <td>{a[0]}</td>
                      <td>{a[1]}</td>
                    </tr>
                  )}
                </>
              )}

              {a[1] && !Array.isArray(a[1]) && typeof a[1] === "object" && (
                <>
                  {Object.entries(a[1]).map((p) => (
                    <>
                      <tr
                        className={
                          a[0] === "Scores" ? "sellerInfoHighlights" : ""
                        }
                      >
                        <td>{p[0]}</td>
                        <td>{p[1]}</td>
                      </tr>
                    </>
                  ))}
                </>
              )}
            </>
          ))}
        </table>
      ) : (
        <div style={{ textAlign: "center" }}>
          {loading ? <Loading></Loading> : ""}
        </div>
      )}
    </div>
  );
}
