import React, { useState, useEffect } from "react";
import { getCharges, charges } from "../../../utils/ShippingCharges";
import moment from "moment";
import SaleCountDown from "./SaleCountDown";
import { getOfferTime } from "../../../utils/getOfferTime";

const TaxShippingTable = React.memo(function TaxShippingTable({
  data,
  final,
  shipping,
  setShipping,
  rangePrice,
  finalPrice,
}) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [popUp, setPopUp] = useState(null);

  // let country = "China";
  // let lowerCase = data.country.toLowerCase();
  // console.log(lowerCase);
  // let charges = getCharges(lowerCase);
  // if (lowerCase === "pk") {
  //   country = "Pakistan";
  // }
  // if (lowerCase === "us") {
  //   country = "USA";
  // }
  useEffect(() => {
    let quan = 0;
    let price = 0;

    final.forEach((p, k) => {
      // let addon = 0;
      // if(p.a.length > 0){
      //   p.a.forEach(el=>{
      //   })
      // }
      let thisPrice = rangePrice ? rangePrice : p.p;
      quan = quan + p.q;
      price = price + thisPrice * p.q;
    });
    setTotalPrice(price);
    setTotalQuantity(quan);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [final, finalPrice]);

  let pop = "";

  if (popUp) {
    pop = (
      <div
        style={{
          position: "fixed",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.24)",
        }}
      >
        <div
          className="card p2"
          style={{
            width: "600px",
            maxWidth: "90%",
          }}
        >
          <h4>{popUp.header}</h4>
          <p className="mt05" style={{ fontSize: "14px" }}>
            {popUp.description}
          </p>
          {popUp.description2 && (
            <p className="mt05" style={{ fontSize: "14px" }}>
              {popUp.description2}
            </p>
          )}
          <button
            className="bt ripple mt1"
            onClick={() => {
              setPopUp(false);
            }}
          >
            Agree
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mt15">
      <div className="mb15">
        <div className="shippingBoxContainer mb05">
          <div
            className="shippingBox mr05"
            onClick={() => {
              setShipping(charges[0]);
            }}
            style={{
              background: shipping?.type === "air" ? "#EDD48F" : "#eee",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <input
              className="mr1"
              type="radio"
              checked={shipping?.type === "air"}
              id="air"
              name="air"
              value="air"
            />
            <div>
              <p className="">By Air (12-24 Days)</p>
              <p
                style={{
                  fontWeight: "500",
                  fontSize: "14px",
                  marginTop: "0.5rem",
                }}
              >
                {" ৳ " + getOfferTime.offer_range + " per kg"}
              </p>
            </div>
          </div>
          <div
            className="shippingBox"
            onClick={() => {
              setShipping(charges[1]);
            }}
            style={{
              background: shipping?.type === "sea" ? "#EDD48F" : "#eee",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <input
              className="mr1"
              type="radio"
              id="sea"
              checked={shipping?.type === "sea"}
              name="sea"
              value="sea"
            />
            <div>
              <p className="">By Sea (48-72 Days)</p>
              <p
                style={{
                  fontWeight: "500",
                  fontSize: "14px",
                  marginTop: "0.5rem",
                }}
              >
                {" ৳ " + getOfferTime.offer_sea_range + " per kg"}
              </p>
            </div>
          </div>
        </div>
      </div>
      {shipping?.type === "air" ? (
        <div
          className="mb15"
          style={{
            border: "1px solid #eee",
            padding: "1rem",
            borderRadius: 4,
          }}
        >
          <p
            style={{
              fontSize: "14px",
              padding: "0.275rem 0",
              marginBottom: "0.5rem",
            }}
          >
            ** পণ্যের ক্যাটাগরীর উপর নির্ভর করে শিপিং চার্জ নির্ধারণ করা হবে{" "}
            {getOfferTime.low_shipping_bn + " "}
            টাকা / {getOfferTime.high_shipping_bn} টাকা প্রতি কেজি।{""}
          </p>
          <div className="shippingBoxContainer mb05">
            <div className="shippingBox mr05" style={{ background: "#e5d9b9" }}>
              <p className="mb05">
                {getOfferTime.low_shipping_bn} টাকা প্রতি কেজি{" "}
              </p>
              <span>
                জুতা, ব্যাগ, জুয়েলারি, যন্ত্রপাতি, ব্যাটারি ব্যতীত
                ইলেক্ট্রনিক্স, ব্যাটারি ব্যতীত খেলনা, তরল ও ক্রিম ব্যতীত
                কসমেটিক্স, স্টিকার, সিরামিক, প্লাস্টিক, ধাতব, চামড়া, রাবার জাতীয়
                পণ্য ইত্যাদি।
              </span>
            </div>
            <div className="shippingBox" style={{ background: "#e5d9b9" }}>
              <p className="mb05">
                {getOfferTime.high_shipping_bn} টাকা প্রতি কেজি
              </p>
              <span>
                পোশাক / বস্ত্র, ঘড়ি, সানগ্লাস, তরল এবং দাহ্য পদার্থ, ব্যাটারি
                জাতীয় যেকোনো পণ্য, ক্রিম এবং তরল কসমেটিক্স, রাসায়নিক দ্রব্য,
                খাদ্য, জীবন্ত উদ্ভিদ, বীজ, ডুপ্লিকেট ব্র্যান্ডেড পণ্য ইত্যাদি।
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="mb15"
          style={{
            border: "1px solid #eee",
            padding: "1rem",
            borderRadius: 4,
            background: "#e5d9b9",
          }}
        >
          <div className="shippingBoxContainer mb05">
            <div>
              {/* <p
                style={{
                  fontSize: "15px",
                  fontWeight: "bold",
                  marginBottom: "0.5rem",
                }}
              >
                {" "}
                সি-শিপমেন্ট এর ক্ষেত্রে শর্ত প্রযোজ্য
              </p> */}
              <span style={{ fontSize: "14px" }}>
                {/* সর্বনিম্ন ১০০০ কেজির নিচে কোনো প্রকার সি- শিপমেন্টের অর্ডার
                গ্রহণযোগ্য নয়। তাই গ্রাহক ও কোম্পানি উভয় পক্ষের স্বার্থে,
                কমপক্ষে ১০০০ কেজির নিচে শিপমেন্টের মাধ্যম সমুদ্রপথ নির্বাচন করা
                হলে তা গতানুগতিক এয়ার-শিপমেন্টের মাধ্যমে নিয়ে আসা হবে। */}
                সম্মানিত গ্রাহক, সি-শিপমেন্ট করার জন্য সর্বনিম্ন ৫০০ কেজি পণ্য
                অর্ডার করতে হবে। এক্ষেত্রে আপনি একাধিক পণ্য অর্ডার করতে পারবেন
                তবে প্রতিটি পণ্যের সর্বনিম্ন ওজন ২৫০ কেজি হতে হবে। পণ্যের
                ক্যাটাগরীর উপর নির্ভর করে শিপিং চার্জ নির্ধারণ করা হবে।
                অনুগ্রহপূর্বক অর্ডার করার পূর্বে আমাদের সি- শিপমেন্ট এক্সপার্টের
                সাথে যোগাযোগ করে চূড়ান্ত শিপিং চার্জ জেনে নিবেন।
              </span>

              <div style={{ display: "flex" }}>
                <p
                  style={{
                    marginTop: "0.75rem",
                    fontSize: "14px",
                    background: "#000",
                    padding: "0.275rem 0.6rem",
                    color: "#fff",
                    borderRadius: 4,
                  }}
                >
                  <span style={{ marginRight: "0.325rem" }}>HOTLINE:</span>
                  <a
                    href="tel:+8801810198724"
                    style={{ color: "#fff", marginRight: 8 }}
                  >
                    01810198724
                  </a>
                  <span>(10AM - 7PM)</span>
                </p>
              </div>

              <table className="mt1 seaTable">
                <thead>
                  <tr>
                    <th>ক্যাটাগরী</th>
                    <th>শিপিং চার্জ (প্রতি কেজি)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>মেশিনারি</td>
                    <td>১৪০ - ১৭০ টাকা</td>
                  </tr>

                  <tr>
                    <td>জুয়েলারি</td>
                    <td>১৭০ - ২২০ টাকা</td>
                  </tr>
                  <tr>
                    <td>প্লাস্টিক</td>
                    <td>১৯০ - ২২০ টাকা</td>
                  </tr>
                  <tr>
                    <td>ল্যাডিস ব্যাগ</td>
                    <td>২৪০ - ২৭০ টাকা</td>
                  </tr>
                  <tr>
                    <td>জুতা (প্রতি জোড়া)</td>
                    <td>৩৬০ টাকা</td>
                  </tr>
                  <tr>
                    <td>অন্যান্য</td>
                    <td>কল করে জেনে নিন</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
      <div style={{ borderRadius: "6px", overflow: "hidden" }}>
        {pop}
        <table id="customers" className="taxShippingTable">
          <tbody>
            <tr>
              <th>
                <div
                  className="flexRow w100"
                  style={{ paddingLeft: "1rem", alignItems: "center" }}
                >
                  <span>From {"China"}</span>
                  <img
                    src={require(`../../../assets/flags/${"cn"}.svg`).default}
                    alt=""
                    style={{
                      height: "24px",
                      width: "40px",
                      marginLeft: "1rem",
                    }}
                  />
                </div>
              </th>
              <th>
                <div
                  className="flexRow w100"
                  style={{ paddingLeft: "1rem", alignItems: "center" }}
                >
                  <span>To Bangladesh</span>
                  <img
                    src={require(`../../../assets/flags/${"bd"}.svg`).default}
                    alt=""
                    style={{
                      height: "24px",
                      width: "40px",
                      marginLeft: "1rem",
                    }}
                  />
                </div>
              </th>
            </tr>
            {/* <tr>
              <td colSpan="2" className="platformSelect">
                <select
                  name="platform"
                  style={{
                    marginRight: "0.5rem",
                    width: "100%",
                    border: "none",
                  }}
                  onChange={(e) => {
                    if (charges[e.target.value].type === "sea") {
                      setPopUp({
                        header: "সি-শিপমেন্ট এর ক্ষেত্রে শর্ত প্রযোজ্যঃ",
                        description:
                          "সর্বনিম্ন ১০০০ কেজির নিচে কোনো প্রকার সি- শিপমেন্টের অর্ডার গ্রহণযোগ্য নয়। তাই গ্রাহক ও কোম্পানি উভয় পক্ষের স্বার্থে, কমপক্ষে ১০০০ কেজির নিচে শিপমেন্টের মাধ্যম সমুদ্রপথ নির্বাচন করা হলে তা গতানুগতিক এয়ার-শিপমেন্টের মাধ্যমে নিয়ে আসা হবে।",
                      });
                    }
                    if (
                      charges[e.target.value].type === "DHL" ||
                      charges[e.target.value].type === "FEDX"
                    ) {
                      setPopUp({
                        header: "FEDX এবং DHL এর শিপমেন্ট",
                        description:
                          "১। FEDX অথবা DHL- এর মাধ্যমে বাংলাদেশে পন্য আনানোর ক্ষেত্রে, কাস্টমস এর ভ্যাট, ট্যাক্স এবং অন্যান্য চার্জ গ্রাহক নিজে বহন করবে এবং তা আমাদের সার্ভিস চার্জ বহিঃর্ভুত।",
                        description2:
                          "2। FEDX এবং DHL এর ক্ষেত্রে যেই শিপমেন্ট সময় নির্ধারিত হয়েছে তা গ্লোবাল সেলার কর্তৃক আমাদের গ্লোবাল ওয়্যারহাউজ এ পন্য পাঠানো এবং আমাদের কর্তৃক তা গ্রহনের পর থেকে গণনা করা হবে।",
                      });
                    }
                    setShipping(charges[e.target.value]);
                  }}
                >
                  {charges.map((p, k) => (
                    <option value={k} disabled={!p.status} key={p.id}>
                      Shipping Method: By{" "}
                      {" " + p.code.split(" ")[1] + "  (" + p.time + ") Days"}
                    </option>
                  ))}
                </select>
              </td>
            </tr> */}
            <tr>
              <td>
                <div className="flexRow w100" style={{ paddingLeft: "0.5rem" }}>
                  <div className="p05">
                    <span>Product Quantity </span>
                  </div>
                </div>
              </td>
              <td>
                <span
                  className="flexRow w100"
                  style={{ paddingLeft: "0.5rem", textAlign: "left" }}
                >
                  <span>{totalQuantity}</span>
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flexRow w100" style={{ paddingLeft: "0.5rem" }}>
                  <div className="p05">
                    <span>Product Price </span>
                  </div>
                </div>
              </td>
              <td>
                <span
                  className="flexRow w100"
                  style={{ paddingLeft: "0.5rem", textAlign: "left" }}
                >
                  {" ৳ " + totalPrice}
                </span>
              </td>
            </tr>
            {data.weight && (
              <tr>
                <td>
                  <div
                    className="flexRow w100"
                    style={{ paddingLeft: "0.5rem", textAlign: "left" }}
                  >
                    <div className="p05">
                      <span>Approximate Weight </span>
                    </div>
                  </div>
                </td>
                <td>
                  <span
                    className="flexRow w100"
                    style={{
                      textAlign: "left",
                      marginTop: 4,
                      marginLeft: 8,
                    }}
                  >
                    {totalQuantity
                      ? parseFloat(data.weight * totalQuantity).toFixed(3)
                      : data.weight}{" "}
                    {"kg    "} ( আনুমানিক)
                  </span>
                </td>
              </tr>
            )}
            <tr>
              <td>
                <div className="flexRow w100" style={{ paddingLeft: "0.5rem" }}>
                  <div className="p05">
                    <span>Shipping Charge </span>
                  </div>
                </div>
              </td>
              <td>
                <span
                  className="flexRow w100"
                  style={{ paddingLeft: "0.5rem", textAlign: "left" }}
                >
                  {" ৳ " + shipping?.charge + " "} Per Kg
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flexRow w100" style={{ paddingLeft: "0.5rem" }}>
                  <div className="p05">
                    <span>Total Cost</span>
                  </div>
                </div>
              </td>
              <td>
                <span
                  className="flexRow w100"
                  style={{ padding: "0.5rem", textAlign: "left" }}
                >
                  {" ৳ " + totalPrice} + Shipping & Courier Charges
                </span>
              </td>
            </tr>

            <tr>
              <td>
                <div className="flexRow w100" style={{ paddingLeft: "0.5rem" }}>
                  <div className="p05">
                    <span>Pay now (80%)</span>
                  </div>
                </div>
              </td>
              <td>
                <span
                  className="flexRow w100"
                  style={{ padding: "0.5rem", textAlign: "left" }}
                >
                  {" ৳ " + Math.round(totalPrice * 0.8)}
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flexRow w100" style={{ paddingLeft: "0.5rem" }}>
                  <div className="p05">
                    <span>Pay on Delivery</span>
                  </div>
                </div>
              </td>
              <td>
                <span
                  className="flexRow w100"
                  style={{ padding: "0.5rem", textAlign: "left" }}
                >
                  {" ৳ " + Math.round(totalPrice * 0.2)} + Shipping & Courier
                  Charges
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p
        style={{
          textAlign: "left",
          color: "#000",
          fontSize: "14px",
          marginTop: 16,
          marginBottom: "0.75rem",
        }}
      >
        ** উপরে উল্লেখিত পণ্যের ওজন সম্পূর্ণ সঠিক নয়, আনুমানিক মাত্র। বাংলাদেশে
        আসার পর পণ্যটির প্রকৃত ওজন মেপে শিপিং চার্জ হিসাব করা হবে।
      </p>
    </div>
  );
});

export default TaxShippingTable;
