import axios from "axios";
import Url from "../utils/Url";

export const placeOrder = (data, tryToOrder) => {
    axios({
            method: "post",
            url: Url + "/user/carts",
            data: data,
            //  headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
            console.log(res.data.cart);
            if (res.data.cart) {
                tryToOrder(res.data.cart.id, res.data.message);
            }
        })
        .catch((err) => {
            console.log(err.response);
        });
};

export const getUserOrderFilter = (filter, setData, setLoading) => {
    axios
        .get(Url + `/user/order-filter` + filter)
        .then((res) => {
            setData(res.data);
            if (setLoading) {
                setLoading(false);
            }
        })
        .catch((err) => {
            setLoading(true);
        });
};
export const getUserInvoiceFilter = (filter, setData, setLoading) => {
    axios
        .get(Url + `/user/invoices` + filter)
        .then((res) => {
            setData(res.data);
            if (setLoading) {
                setLoading(false);
            }
        })
        .catch((err) => {
            setLoading(true);
        });
};

export const getMasterInvoicePrintable = (filter, setData) => {
    axios
        .get(Url + `/user/invoice/${filter}`)
        .then((res) => {
            console.log(res.data);
            setData(res.data);
        })
        .catch((err) => {
            console.log(err.response);
            setData([]);
        });
};