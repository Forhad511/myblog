import React from "react";

export default function DeliveryTracking({ invoice }) {
  let courier = invoice.delivery_method;
  let tracking = invoice.courier_tracking_id;

  if (tracking?.includes("SB")) {
    tracking = tracking.substr(2);
  }

  let link = false;
  if (courier === "sundarban") {
    link =
      "http://103.3.227.172:4040/Default.aspx?Page=SearchByCNNumber&CN_Number=" +
      tracking;
  } else if (courier === "redx") {
    link = "https://redx.com.bd/track-parcel/?trackingId=" + tracking;
  } else if (courier === "ecourier") {
    link = "https://ecourier.com.bd/tracking/?tracking_no=" + tracking;
  }

  return (
    <>
      {link ? (
        <a target="_blank" href={link} rel="noreferrer">
          <button
            style={{ padding: "2px 10px", height: "30px" }}
            className="bt"
          >
            Track
          </button>
        </a>
      ) : (
        ""
      )}
    </>
  );
}
