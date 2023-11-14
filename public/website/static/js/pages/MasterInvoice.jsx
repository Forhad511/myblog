import React, { useRef } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import moment from "moment";
import { getMasterInvoicePrintable } from "../api/Order";

function MasterInvoice() {
  const history = useHistory();
  const [data, setData] = useState(null);
  const [orders, setOrders] = useState(null);
  const [orderIds, setOrderIds] = useState([]);
  const [orderCodes, setOrderCodes] = useState([]);
  const [columns, setColumns] = useState(null);
  const [due, setDue] = useState(null);
  const [total, setTotal] = useState(null);
  const [grandTotal, setGrandTotal] = useState(null);
  const [depositAmount, setDepositAmount] = useState(null);
  const [bdCourierCharge, setBdCourierCharge] = useState(null);
  const [wdc, setWdc] = useState(null);
  const [crc, setCrc] = useState(null);
  const [discount, setDiscount] = useState(0);
  const [deliveryMethod, setDeliveryMethod] = useState(null);
  const [note, setNote] = useState(null);
  const [branch, setBranch] = useState(null);
  const [deliveryAddress, setDeliveryAddress] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [invoiceID, setInvoiceID] = useState(false);
  const [weight, setWeight] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    getMasterInvoicePrintable(id, setData);
  }, [id]);

  useEffect(() => {
    if (data && data.orders && data.invoice) {
      setOrders({ data: data.orders });
      setInvoiceID(data.invoice.master_invoice_code);
      setWdc(
        data.invoice.warehouse_delay_charge
          ? data.invoice.warehouse_delay_charge
          : null
      );
      setCrc(
        data.invoice.courier_return_charge
          ? data.invoice.courier_return_charge
          : null
      );
      setDiscount(data.invoice.courier_charge_discount);
      setDeliveryMethod(data.invoice.delivery_method);
      setNote(data.invoice.note);
      setBranch(data.invoice.branch_name);
    }
  }, [data]);

  console.log(data);

  useEffect(() => {
    let col = [];
    let dueAmount = 0;
    let finalDue = 0;
    let grand = 0;
    let deposit = 0;
    let bdCourier = 0;
    let ids = [];
    let codes = [];
    let weight = 0;
    if (orders && orders.data && orders.data.length > 0) {
      setUserInfo({
        id: orders.data[0].user_id,
        name: orders.data[0].user_name,
        phone: orders.data[0].user_phone,
        address: orders.data[0].address,
        user_emergency_phone: orders.data[0].user_emergency_phone,
        city: orders.data[0].city,
        district: orders.data[0].district,
      });
      setDeliveryAddress(orders.data[0].address);
      orders.data.forEach((element) => {
        ids.push(element.id);
        codes.push(element.order_code);
        if (element.weight) {
          weight = weight + element.weight;
        }
        grand = grand + element.grand_total;
        deposit = deposit + element.deposit_amount;
        dueAmount = dueAmount + (element.grand_total - element.deposit_amount);
        finalDue = finalDue + (element.grand_total - element.deposit_amount);
        element.fees.forEach((element2) => {
          finalDue = finalDue - element2.amount;
          if (element2.fee.id === 2) {
            bdCourier = bdCourier + element2.amount;
          }
        });
      });
      setOrderIds(ids);
      setOrderCodes(codes);
      setWeight(parseFloat(weight).toFixed(2));
      setDue(dueAmount);
      setColumns(col);
      setDepositAmount(deposit);
      setTotal(finalDue);
      setGrandTotal(grand);
      setBdCourierCharge(bdCourier);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orders]);

  const getBDCourierCharge = (fees) => {
    let fee = 0;
    let index = fees.findIndex((el) => el.fee.id === 2);
    if (index >= 0) {
      fee = fees[index].amount;
    }
    return fee;
  };

  const getFinalPayableDue = () => {
    if (wdc && crc) {
      return due + wdc + crc - discount;
    } else if (wdc && !crc) {
      return due + wdc - discount;
    } else if (!wdc && crc) {
      return due + crc - discount;
    } else {
      return due - discount;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="A4 masterInvoice">
        {data && (
          <div
            className="section-to-print section-to-print-raw"
            style={{ backgroundColor: "white", padding: "2rem" }}
            size="small"
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
              }}
            >
              <div xs={{ span: 12 }} md={{ span: 12 }}>
                <img
                  src={
                    require("../assets/platforms/wholesalecart_yellow.svg")
                      .default
                  }
                  alt=""
                  style={{
                    width: "180px",
                    marginBottom: "1rem",
                  }}
                />
                <div size="middle" column={1}>
                  <div style={{ paddingBottom: "0.275rem" }}>
                    <div>
                      <p style={{ marginBottom: "0.125rem", fontSize: "15px" }}>
                        Floor: 1 & 3, House: 30, Road: 11, Sector: 4, Uttara,
                        Dhaka-1230 Bangladesh
                      </p>
                    </div>
                  </div>
                  <div label="Phone" style={{ paddingBottom: "0.275rem" }}>
                    (+88) 09666-799125
                  </div>
                  <div label="Email" style={{ paddingBottom: "0.275rem" }}>
                    <span type="danger">info@wholesalecart.com</span>
                  </div>
                  <div label="Website" style={{ paddingBottom: "0.275rem" }}>
                    https://wholesalecart.com
                  </div>
                </div>
              </div>
              <div xs={{ span: 12 }} md={{ span: 12 }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    height: "100%",
                  }}
                >
                  <div
                    size="middle"
                    column={1}
                    style={{ marginTop: "0.275rem", fontSize: "15px" }}
                  >
                    <div label="Name" style={{ paddingBottom: "0.15rem" }}>
                      {userInfo ? userInfo.name : "--"}
                    </div>
                    <div style={{ paddingBottom: "0.15rem" }}>
                      <div style={{ display: "flex" }}>
                        <div>
                          <span>Address: </span>
                          {userInfo && userInfo.address
                            ? userInfo.address
                            : "--"}
                          , {userInfo ? userInfo.district : "--"} ,{" "}
                          {userInfo ? userInfo.city : "--"}
                        </div>
                      </div>
                    </div>
                    <div style={{ paddingBottom: "0.15rem" }}>
                      Emergency Phone:{" "}
                      {userInfo && userInfo.user_emergency_phone
                        ? userInfo.user_emergency_phone
                        : "--"}
                    </div>
                    <div style={{ paddingBottom: "0.15rem" }}>
                      Phone:{" "}
                      {userInfo && userInfo.phone ? userInfo.phone : "--"}
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      borderTop: "2px solid rgba(0,0,0,0.16)",
                      marginTop: "0.5rem",
                      paddingTop: "0.5rem",
                    }}
                  >
                    <h1
                      style={{
                        fontSize: "14px",
                        fontWeight: "500",
                        marginBottom: "0.275rem",
                      }}
                    >
                      Invoice# {invoiceID} ,{" "}
                      <span style={{ marginTop: "0.25rem" }}>
                        Total Orders:{" "}
                        {orders && orders.data ? orders.data.length : 0}
                      </span>
                    </h1>
                    <span>
                      Date: {moment(new Date()).format("DD/MM/YY")}, Time:{" "}
                      {moment(new Date()).format("hh:mm A")}
                    </span>
                  </div>
                  {(deliveryMethod || branch) && (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        borderTop: "2px solid rgba(0,0,0,0.16)",
                        marginTop: "0.5rem",
                        paddingTop: "0.5rem",
                      }}
                    >
                      {deliveryMethod && (
                        <h1
                          style={{
                            fontSize: "14px",
                            marginBottom: "0.275rem",
                            fontWeight: "bold",
                          }}
                        >
                          Courier: {deliveryMethod.toUpperCase()}
                        </h1>
                      )}
                      {branch && <b>Branch: {branch.toUpperCase()}</b>}
                      {data?.invoice?.courier_tracking_id && (
                        <b style={{ marginTop: "0.275rem" }}>
                          Tracking ID: {data?.invoice?.courier_tracking_id}
                        </b>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
            {orders && (
              <div
                style={{ margin: "1.5rem 0" }}
                bodyStyle={{ padding: "0px" }}
              >
                <div>
                  {orders.data.map((record) => (
                    <div
                      key={record.id}
                      className="noPageBreak"
                      style={{
                        backgroundColor: "#eee",
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "0.5rem 0rem",
                      }}
                    >
                      <div
                        index={0}
                        align="center"
                        style={{ width: "16.5%", textAlign: "center" }}
                      >
                        <Link to={`/order/${record.id}`}>
                          <span style={{ color: "black" }}>
                            {record.order_code ? record.order_code : record.id}
                          </span>
                        </Link>
                      </div>
                      <div
                        index={1}
                        align="center"
                        style={{ width: "16.5%", textAlign: "center" }}
                      >
                        <span>{record.weight ? record.weight : 0} Kg</span>
                      </div>
                      <div
                        index={0}
                        align="center"
                        style={{ width: "16.5%", textAlign: "center" }}
                      >
                        <span>৳ {record.grand_total}</span>
                      </div>
                      <div
                        index={1}
                        align="center"
                        style={{ width: "16.5%", textAlign: "center" }}
                      >
                        <span>৳ {record.deposit_amount}</span>
                      </div>
                      <div
                        index={1}
                        align="center"
                        style={{
                          width: "16.5%",
                          textAlign: "center",
                        }}
                      >
                        <span>
                          ৳ {record.grand_total - record.deposit_amount}
                        </span>
                      </div>
                      <div
                        index={1}
                        align="center"
                        style={{ width: "16.5%", textAlign: "center" }}
                      >
                        <span>৳ {getBDCourierCharge(record.fees)}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <>
                  <div
                    className="noPageBreak"
                    style={{
                      backgroundColor: "#eee",
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "0.5rem 0rem",
                    }}
                  >
                    <div
                      index={0}
                      align="center"
                      style={{ width: "16.5%", textAlign: "center" }}
                    >
                      Total
                    </div>
                    <div
                      index={1}
                      align="center"
                      style={{ width: "16.5%", textAlign: "center" }}
                    >
                      <span>{weight} kg</span>
                    </div>
                    <div
                      index={0}
                      align="center"
                      style={{ width: "16.5%", textAlign: "center" }}
                    >
                      <span>৳ {grandTotal}</span>
                    </div>
                    <div
                      index={1}
                      align="center"
                      style={{ width: "16.5%", textAlign: "center" }}
                    >
                      <span>৳ {depositAmount}</span>
                    </div>
                    <div
                      index={1}
                      align="center"
                      style={{
                        width: "16.5%",
                        textAlign: "center",
                      }}
                    >
                      <span>৳ {due}</span>
                    </div>
                    <div
                      index={1}
                      align="center"
                      style={{ width: "16.5%", textAlign: "center" }}
                    >
                      <span>৳ {bdCourierCharge}</span>
                    </div>
                  </div>
                  <>
                    {wdc && (
                      <div
                        className="noPageBreak"
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          padding: "0.5rem 0rem",
                        }}
                      >
                        <div
                          index={0}
                          style={{ width: "66%", textAlign: "right" }}
                        >
                          <span>Warehouse Delay Charge</span>
                        </div>
                        <div
                          index={0}
                          style={{
                            width: "16.5%",
                            textAlign: "right",
                            paddingRight: "1rem",
                          }}
                        >
                          <span>+ ৳ {wdc}</span>
                        </div>
                        <div
                          style={{ width: "16.5%", textAlign: "right" }}
                        ></div>
                      </div>
                    )}
                    {crc && (
                      <div
                        className="noPageBreak"
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          padding: "0.5rem 0rem",
                        }}
                      >
                        <div
                          index={0}
                          style={{ width: "66%", textAlign: "right" }}
                        >
                          <span>Courier Return Charge</span>
                        </div>
                        <div
                          index={0}
                          style={{
                            width: "16.5%",
                            textAlign: "right",
                            paddingRight: "1rem",
                          }}
                        >
                          <span>+ ৳ {crc}</span>
                        </div>
                        <div style={{ width: "16.5%" }}></div>
                      </div>
                    )}
                    {(crc || wdc) && (
                      <div
                        className="noPageBreak"
                        style={{
                          backgroundColor: "#eee",
                          display: "flex",
                          justifyContent: "space-between",
                          padding: "0.5rem 0rem",
                        }}
                      >
                        <div style={{ width: "66%", textAlign: "right" }}>
                          <span>Total Due</span>
                        </div>
                        <div
                          style={{
                            width: "16.5%",
                            textAlign: "right",
                            paddingRight: "1rem",
                          }}
                        >
                          <span>
                            ৳{" "}
                            {crc && wdc
                              ? due + crc + wdc
                              : crc && !wdc
                              ? due + crc
                              : due + wdc}
                          </span>
                        </div>
                        <div
                          style={{ width: "16.5%", textAlign: "right" }}
                        ></div>
                      </div>
                    )}
                  </>
                  {bdCourierCharge > 0 && discount > 0 && (
                    <div
                      className="noPageBreak"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "0.5rem 0rem",
                      }}
                    >
                      <div
                        index={0}
                        style={{ textAlign: "right", width: "66%" }}
                      >
                        {discount > 0 && (
                          <span style={{ marginRight: "0.5rem" }}>
                            {parseFloat(
                              (discount / bdCourierCharge) * 100
                            ).toFixed(1)}
                            %
                          </span>
                        )}
                        BD Courier Charge Discount
                      </div>
                      <div
                        style={{
                          textAlign: "right",
                          width: "16.5%",
                          paddingRight: "1rem",
                        }}
                      >
                        - ৳ {discount}
                      </div>
                      <div style={{ width: "16.5%" }}></div>
                    </div>
                  )}
                  <div
                    className="noPageBreak"
                    style={{
                      backgroundColor: "#eee",
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "0.5rem 0rem",
                    }}
                  >
                    <div index={0} style={{ width: "66%", textAlign: "right" }}>
                      Total Payment Due
                    </div>
                    <div
                      index={0}
                      style={{
                        textAlign: "right",
                        width: "16.5%",
                        paddingRight: "1rem",
                      }}
                    >
                      ৳ {getFinalPayableDue()}
                    </div>
                    <div style={{ width: "16.5%" }}></div>
                  </div>
                </>
              </div>
            )}
            <div
              className="printOnly"
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "3rem",
              }}
            >
              <div>
                <div
                  style={{
                    height: "1px",
                    backgroundColor: "#000",
                    marginBottom: "0.15rem",
                  }}
                ></div>
                <p>Customer Signature</p>
              </div>
              <div>
                <div
                  style={{
                    height: "1px",
                    backgroundColor: "#000",
                    marginBottom: "0.15rem",
                  }}
                ></div>
                <p>Store Manager Signature</p>
              </div>
              <div>
                <div
                  style={{
                    height: "1px",
                    backgroundColor: "#000",
                    marginBottom: "0.15rem",
                  }}
                ></div>
                <p>Accounts Signature</p>
              </div>
            </div>
            <div>
              {note ? (
                <div style={{ marginTop: "2rem" }}>
                  <h3>Instruction</h3>
                  <p>{note}</p>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        )}
      </div>
      <div className="fixedRightBottom">
        <button className="bt" type="primary" onClick={() => window.print()}>
          Print
        </button>
      </div>
    </div>
  );
}

export default MasterInvoice;
