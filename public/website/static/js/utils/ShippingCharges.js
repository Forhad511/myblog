import {
    getOfferTime
} from "./getOfferTime";

export const charges = [
    // Dont change index sequence
    {
        id: 1,
        code: "China Air",
        country: "cn",
        from: "China",
        type: "air",
        charge: getOfferTime.offer_range,
        foreign: 75,
        status: true,
        time: "12-24",
    },
    {
        id: 2,
        code: "China Sea",
        country: "cn",
        from: "China",
        type: "sea",
        charge: "100 - 350",
        foreign: 75,
        status: true,
        time: "45-60",
    },
    {
        id: 3,
        code: "Pakistan Air",
        country: "pk",
        type: "air",
        charge: 1080,
        from: "Pakistan",
        status: true,
        time: "14-24",
    },
];

export const getCharges = (country) => {
    return charges.filter((el) => el.country === country);
};