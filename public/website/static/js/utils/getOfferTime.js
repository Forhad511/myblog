import moment from "moment";

const timestampStart = "2022-10-10 23:59:59";
const timestampEnd = "2022-10-31 23:59:59";

export const getPreWinterOfferTime = "2023-01-17 23:59:59";
export const secondOfferStart = "2023-01-10 23:59:59";
export const bankPayOffer = "2022-12-30 23:59:59";
export const getOfferTime = {
    start: timestampStart,
    end: timestampEnd,
    end_bn: "১২ জুলাই, ২০২২",
    low_shipping: moment(new Date()).isBefore(getPreWinterOfferTime) ? 650 : 650,
    high_shipping: moment(new Date()).isBefore(getPreWinterOfferTime) ? 780 : 780,
    low_shipping_bn: moment(new Date()).isBefore(getPreWinterOfferTime) ?
        "৬৫০" :
        "৬৫০",
    high_shipping_bn: moment(new Date()).isBefore(getPreWinterOfferTime) ?
        "৭৮০" :
        "৭৮০",
    offer_range: moment(new Date()).isBefore(getPreWinterOfferTime) ?
        "650 / 780" :
        "650 / 780",
    offer_range_bn: moment(new Date()).isBefore(getPreWinterOfferTime) ?
        "৬৫০ / ৭৮০" :
        "৬৫০ / ৭৮০",
    offer_sea_range: moment(new Date()).isBefore(getPreWinterOfferTime) ?
        "100 - 350" :
        "100 - 350",
};

export const getFakePrice = (product_code, price) => {
    let code = product_code.substr(-2);
    let reminder = parseInt(code) % 5;
    // let finalPercentage = 7 + reminder;
    let finalPercentage = 10;

    let fake_price = Math.round((price * 100) / (100 - finalPercentage));
    return {
        fake_price: fake_price,
        percentage: finalPercentage,
    };
};

export const numberEnToBn = (en) => {
    try {
        var id = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
        let stringVal = en.toString();
        return stringVal.replace(/[0-9]/g, function(w) {
            return id[+w];
        });
    } catch (error) {}
};