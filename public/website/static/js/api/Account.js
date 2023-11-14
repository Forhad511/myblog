import axios from "axios";
import getError from "../utils/GetError";
import Url from "../utils/UrlV2";
import authErrorHandler from "./authErrorHandler";

export const getCustomerInfo = (setData) => {
    let get = `${Url}user/profile`;

    axios
        .get(get)
        .then((res) => {
            console.log(res);
            setData(res.data.data);
        })
        .catch((err) => {
            authErrorHandler(err);
            console.log(err);
            setData(false);
        });
};

export const updateCustomerInfo = (data, setLoading, setPopUp) => {
    setLoading(true);
    let url = `${Url}user/update-profile`;
    axios
        .post(url, data)
        .then((res) => {
            console.log(res);
            setLoading(false);
            setPopUp("updated");
        })
        .catch((err) => {
            setLoading(false);
        });
};

export const getCustomerOrders = (setData, page, setLoading) => {
    let get = `${Url}user/orders?page=${page}`;

    setLoading(true);

    axios
        .get(get)
        .then((res) => {
            console.log("Master Orders");
            console.log(res.data);
            setData(res.data);
            setLoading(false);
        })
        .catch((err) => {
            console.log(err);
            setData(false);
            setLoading(false);
        });
};

export const getCustomerTransactions = (setData, page, setPagination) => {
    let get = `${Url}user/balance-transaction?page=${page}`;

    axios
        .get(get)
        .then((res) => {
            console.log(res.data);
            setData(res.data.data);
            setPagination(res.data.meta);
        })
        .catch((err) => {
            console.log(err);
            setData([]);
        });
};

export const getCustomerStats = (setData) => {
    let get = `${Url}user/stats`;

    axios
        .get(get)
        .then((res) => {
            console.log(res.data);
            setData(res.data);
        })
        .catch((err) => {
            setData(false);
        });
};

export const getCustomerOrder = (orderId, setData) => {
    let get = `${Url}user/orders/${orderId}`;

    axios
        .get(get)
        .then((res) => {
            console.log(res.data);
            setData(res.data.data);
        })
        .catch((err) => {
            console.log(err.response);
            setData(false);
        });
};

export const getCustomerOrdersByStatus = (requestData, setData, setLoading) => {
    setLoading(true);
    let url = `${Url}user/sort-orders/`;
    axios
        .post(url, requestData)
        .then((res) => {
            setData(res.data.data);
            setLoading(false);
        })
        .catch((err) => {
            setLoading(false);
        });
};

export const getCustomerInvoices = (setData, setLoading) => {
    setLoading(true);

    let get = `${Url}user/invoices`;

    axios
        .get(get)
        .then((res) => {
            setData(res.data.data);
            setLoading(false);
        })
        .catch((err) => {
            setData([]);
            setLoading(false);
        });
};

export const getCount = (setData) => {
    axios({
            method: "get",
            url: Url + "user/counts",
        })
        .then((res) => {
            console.log(res.data);
            setData(res.data);
        })
        .catch((err) => {
            console.log(err.response);
        });
};
export const getSupportCategories = (setData) => {
    axios({
            method: "get",
            url: Url + "user/support/categories",
        })
        .then((res) => {
            console.log(res.data);
            setData(res.data);
        })
        .catch((err) => {
            console.log(err.response);
        });
};
export const addNewSupport = (data, afterAsync) => {
    axios
        .post(Url + "user/support/ticket", data)
        .then((res) => {
            afterAsync(true, "success");
        })
        .catch((err) => {
            afterAsync(false, getError(err));
        });
};
export const getSupportTickets = (setData) => {
    axios
        .get(Url + "user/support/ticket")
        .then((res) => {
            setData(res.data);
        })
        .catch((err) => {
            setData(null);
        });
};
export const getSupportTicketById = (id, setData) => {
    axios
        .get(Url + `user/support/ticket/${id}`)
        .then((res) => {
            setData(res.data);
        })
        .catch((err) => {
            setData(null);
        });
};
export const getSlabOrderAmount = (filter, setData) => {
    axios
        .get(Url + `user/order-amount`)
        .then((res) => {
            setData(res.data);
        })
        .catch((err) => {
            setData(null);
        });
};

export const addTicketMessage = (data, afterPerform) => {
    axios
        .post(Url + `user/support/conversation`, data)
        .then((res) => {
            afterPerform(true, "success");
        })
        .catch((err) => {
            afterPerform(false, getError(err));
        });
};