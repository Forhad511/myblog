import React, { useState, useEffect } from "react";
import Loading from "../../components/Loading/Loading";
import { Link } from "react-router-dom";
import Empty from "../../components/Empty";
import { getUserInvoiceFilter, getUserOrderFilter } from "../../api/Order";
import Status from "../../components/Status";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import moment from "moment";
import ReactPaginate from "react-paginate";
import { useParams } from "react-router-dom";
import DeliveryTracking from "./DeliveryTracking";

export default function InvoicesByStatus({
  filter,
  order_code,
  limit,
  basicLayout,
  setFilter,
}) {
  const [orders, setOrders] = useState(null);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [selected, setSelected] = useState([]);
  let { page } = useParams();
  page = page ? page : 1;
  useEffect(() => {
    window.scrollTo({ top: 0 });
    let mFilter = `${
      filter === "all" ? "?" : "?status=" + filter + "&"
    }page=${page}`;
    if (limit) {
      mFilter += "&per_page=" + limit;
    }
    if (order_code) {
      if (filter !== "all") {
        mFilter = `?status=${filter}&master_invoice_code=${order_code}`;
      } else {
        mFilter = `?master_invoice_code=${order_code}`;
      }
    }
    setLoading(true);
    setOrders(null);
    if (filter) {
      getUserInvoiceFilter(mFilter, setOrders, setLoading);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, page, order_code]);

  // let total = 0;
  // let totalDue = 0;
  // let deposit = 0;
  // if (orders) {
  //   orders.data.forEach((m, l) => {
  //     total += m.grand_total;
  //     deposit += m.deposit_amount;
  //     totalDue += m.grand_total - m.deposit_amount;
  //   });
  // }

  const payAll = (childs) => {
    let array = [];
    childs.forEach((m, l) => {
      array.push(m);
    });
    let key = { from: "invoice", data: array };
    key = btoa(JSON.stringify(key));
    history.push("/pay/" + key);
  };

  useEffect(() => {
    if (selected && selected.length > 0) {
      let el = document.getElementsByClassName("bottomBar")[0];
      el.style.display = "none";
    } else {
      if (window.innerWidth <= 800) {
        let el = document.getElementsByClassName("bottomBar")[0];
        el.style.display = "grid";
      }
    }
  }, [selected]);

  return (
    <div>
      <div
        className="card"
        style={{
          overFlow: "hidden",
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
        }}
      >
        {orders && orders.data?.length > 0 ? (
          <div>
            <div
              className="tableRow customTableHeader"
              style={{ background: "#eee" }}
            >
              <div
                style={{
                  background: "#eee",
                  display: "flex",
                  alignItems: "center",
                }}
                className="tableRowEl"
              >
                <span>Invoice ID</span>
              </div>
              <div style={{ background: "#eee" }} className="tableRowEl">
                <span>Date</span>
              </div>
              <div style={{ background: "#eee" }} className="tableRowEl">
                <span>Due Amount</span>
              </div>
              <div style={{ background: "#eee" }} className="tableRowEl">
                <span>Delivery Method</span>
              </div>
              <div style={{ background: "#eee" }} className="tableRowEl">
                <span>Branch</span>
              </div>
              <div style={{ background: "#eee" }} className="tableRowEl">
                <span>Track</span>
              </div>
              <div style={{ background: "#eee" }} className="tableRowEl">
                <span>Weight</span>
              </div>
              <div style={{ background: "#eee" }} className="tableRowEl">
                <span>Orders</span>
              </div>
              <div style={{ background: "#eee" }} className="tableRowEl">
                <span>Status</span>
              </div>
              <div style={{ background: "#eee" }} className="tableRowEl">
                <span>Action</span>
              </div>
            </div>
            {orders?.data.map((el, l) => (
              <div className="tableRow" key={l}>
                <div
                  className="tableRowEl"
                  style={{
                    justifyContent: "flex-start",
                    padding: ".75rem 1rem",
                  }}
                >
                  <span className="mobileTableHeder">ID</span>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Link
                      to={`/account/master-invoice/${el.master_invoice_code}`}
                      style={{
                        width: "100%",
                        color: "#c27b00",
                        cursor: "pointer",
                        fontSize: "14px",
                      }}
                    >
                      {el.master_invoice_code}
                    </Link>
                  </div>
                </div>
                <div className="tableRowEl">
                  <span className="mobileTableHeder">Date</span>
                  <span>
                    {moment(new Date(el.created_at)).format(
                      "DD MMM, YY, hh:mm A"
                    )}
                  </span>
                </div>
                <div className="tableRowEl">
                  <span className="mobileTableHeder">Due Amount</span>
                  <span>৳ {el.due_amount}</span>
                </div>
                <div className="tableRowEl">
                  <span className="mobileTableHeder">Delivery Method</span>
                  <Status name={el.delivery_method} type="status" />
                </div>
                <div className="tableRowEl">
                  <span className="mobileTableHeder">Branch</span>
                  <Status name={el.branch_name} type="status" />
                </div>
                <div className="tableRowEl">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    {el.courier_tracking_id && (
                      <p style={{ marginRight: 8, marginBottom: "0.5rem" }}>
                        {el.courier_tracking_id}
                      </p>
                    )}
                    <DeliveryTracking invoice={el} />
                  </div>
                </div>
                <div className="tableRowEl">
                  <span className="mobileTableHeder">Weight</span>
                  <span> {el.total_weight ? el.total_weight + " kg" : ""}</span>
                </div>
                <div className="tableRowEl">
                  <span className="mobileTableHeder">Orders</span>
                  <div>
                    {el.order_codes.map((el) => (
                      <div
                        key={el}
                        style={{
                          backgroundColor: "#ECD38E",
                          padding: "2px 8px",
                          marginBottom: "4px",
                          borderRadius: "4px",
                        }}
                      >
                        <Link
                          to={`/account/order/${el}`}
                          style={{ fontSize: "14px" }}
                        >
                          {el}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="tableRowEl">
                  <span className="mobileTableHeder">Status</span>
                  <Status name={el.status} type="status" />
                </div>
                <div className="tableRowEl">
                  <div className="flexRow">
                    {(el.status.toLowerCase() === "pending" ||
                      el.status.toLowerCase() === "submitted") &&
                      el.due_amount > 0 && (
                        <button
                          style={{ height: "30px", marginRight: "0.5rem" }}
                          className="bt ripple"
                          onClick={() => payAll(el.order_ids)}
                        >
                          Pay
                        </button>
                      )}
                    <Link
                      to={`/account/master-invoice/${el.master_invoice_code}`}
                    >
                      <button
                        style={{ height: "30px" }}
                        className="bt ripple"
                        onClick={() => payAll(el.order_ids)}
                      >
                        View
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="accNoTrx" style={{ border: "0px solid #eaeaea" }}>
            {loading ? <Loading /> : <Empty text="No Invoice found" />}
          </div>
        )}
        {orders?.meta?.total > 1 ? (
          <div style={{ marginBottom: "2rem", marginTop: "1rem" }}>
            <ReactPaginate
              forcePage={page - 1}
              previousLabel={"Prev"}
              nextLabel={"Next"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={orders.meta.last_page}
              marginPagesDisplayed={2}
              pageRangeDisplayed={2}
              onPageChange={(e) => {
                let newPage = e.selected + 1;
                setOrders(null);
                setFilter(null);
                history.push(
                  "/account/delivery/" + newPage + `?status=${filter}`
                );
              }}
              containerClassName={"accPagination"}
              activeClassName={"accPaginationActive"}
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
