import axios from "axios";
import Url from "../utils/Url";
export const getProductByID = (id, source, setData, setLoading, setError) => {
    let platform = source;
    if (source === "china" || source === "pakistan" || source === "alibaba") {
        platform = "1688";
    }
    let get = `${Url}/product/details?product_code=${id}&source=${platform}`;
    if (id.includes("alb")) {
        setError({
            error: 9,
            error_message: "Product Not Found!",
        });
        return;
    }
    axios
        .get(get)
        .then((res) => {
            console.log(res.data);
            if (res.data && res.data.error !== 0) {
                setData(res.data.data);
                setLoading(false);
            } else {
                if (setError) {
                    setError({
                        error: 9,
                        error_message: "Product Not Found!",
                    });
                }
            }
        })
        .catch((err) => {
            setData(null);
            if (setError) {
                setError({
                    error: 9,
                    error_message: "Product Not Found!",
                });
            }
        });
};

export const getProductDescription = (
    id,
    code,
    source,
    setData,
    setLoading
) => {
    let platform = source;
    if (source === "china") {
        platform = "taobao";
    }
    let get = `${Url}/product/description/${code}`;
    axios
        .get(get)
        .then((res) => {
            if (res.data) {
                setData(res.data);
                setLoading(false);
            } else {
                setData(null);
                setLoading(false);
            }
        })
        .catch((err) => {
            setData(null);
            setLoading(false);
        });
};

export const getSellerInfo = (code, setSellerInfo, setLoading) => {
    setLoading(true);

    let get = `${Url}/seller/details/${code}`;
    axios
        .get(get)
        .then((res) => {
            if (res.data && res.data.VendorInfo) {
                setSellerInfo(res.data.VendorInfo);
                setLoading(false);
            } else {
                setSellerInfo(false);
                setLoading(false);
            }
        })
        .catch((err) => {
            setSellerInfo(false);
            setLoading(false);
        });
};

export const getProductVariationPrice = (code, source, setLaterPrice, id) => {
    axios
        .get(`${Url}/get-price.php?source=${source}&code=${code}&id=${id}`)
        .then((res) => {
            if (res.data) {
                setLaterPrice(res.data);
            } else {
                setLaterPrice(0);
            }
        })
        .catch((err) => {
            console.log(err.response);
        });
};

export const getRedirectUrl = (url, platform, history, setLoading) => {
    let get = `${Url}/get-aliexpress-link.php?url=${url}`;
    if (platform === "china") {
        get = `${Url}/get-taobao-id.php?url=${url}`;
    }
    axios
        .get(get)
        .then((res) => {
            if (res.data) {
                if (platform === "china") {
                    history.push(
                        `/product/${"china"}/${res.data}?source=${"china"}&search=${"link"}`
                    );
                } else {
                    if (res.data.includes("aliexpress.com/item")) {
                        let array = res.data.split(".html?");
                        if (array.length > 0) {
                            let array2 = array[0].split("/item/");
                            if (array2.length > 1) {
                                if (array2[1].includes(".html")) {
                                    history.push(
                                        `/product/${"aliexpress"}/${
                      array2[1].split(".")[0]
                    }?source=${"aliexpress"}&search=${"link"}`
                                    );
                                } else {
                                    history.push(
                                        `/product/${"aliexpress"}/${
                      array2[1]
                    }?source=${"aliexpress"}&search=${"link"}`
                                    );
                                }
                            }
                        }
                    }
                }
                setLoading(false);
            }
        })
        .catch((err) => {
            setLoading(false);
            console.log(err.response);
        });
};

export const getProductBySearch = (code, platform, setData) => {
    let source = platform;
    if (source === "china") {
        source = "1688";
    }
    let get = `${Url}/product/key-search?source=${source}&key=${code}&page=${1}`;
    axios
        .get(get)
        .then((res) => {
            if (res.data && res.data.results && Array.isArray(res.data.results)) {
                setData(res.data);
            }
        })
        .catch((err) => {
            setData(null);
        });
};
export const getSellers = (filter, setData) => {
    let filters = filter ? "?" + new URLSearchParams(filter).toString() : "";
    axios
        .get(Url + "/sellers/all" + filters)
        .then((res) => {
            if (res.data) {
                setData(res.data);
            }
        })
        .catch((err) => {
            setData(null);
        });
};
export const getProductsQuery = (filter, setData) => {
    let filters = filter ? "?" + new URLSearchParams(filter).toString() : "";
    axios
        .get(Url + "/product/key-search" + filters)
        .then((res) => {
            if (res.data) {
                setData(res.data);
            }
        })
        .catch((err) => {
            setData(null);
        });
};

export const getCampaignProducts = (id, page, setData) => {
    axios
        .get(Url + `/campaigns/${id}?page=${page}`)
        .then((res) => {
            setData(res.data);
        })
        .catch((err) => {
            setData({
                data: []
            });
        });
};

export const getCampaignProductsByMore = (id, page, setData) => {
    let pageNum = typeof page === "number" ? page : 1;

    let get = `${Url}/campaigns/${id}?page=${pageNum}`;
    axios
        .get(get)
        .then((res) => {
            if (res.data) {
                setData(res.data);
            }
        })
        .catch((err) => {
            setData(null);
        });
};

export const getMoreProducts = (page, setData) => {
    let pageNum = typeof page === "number" ? page : 1;

    let get = `${Url}/product/all/?page=${pageNum}`;
    axios
        .get(get)
        .then((res) => {
            if (res.data) {
                setData(res.data);
            }
        })
        .catch((err) => {
            setData(null);
        });
};

export const getCampaignCategories = (id, setData) => {
    axios
        .get(Url + `/campaign-categories/${id}`)
        .then((res) => {
            setData(res.data);
        })
        .catch((err) => {
            setData([]);
        });
};
export const getCampaigns = (setData) => {
    axios
        .get(Url + `/campaigns`)
        .then((res) => {
            setData(res.data);
        })
        .catch((err) => {
            setData([]);
        });
};

export const getCampaignProductsByCategory = (data, page, setData) => {
    axios
        .post(Url + `/campaign-by-categories?page=${page}`, data)
        .then((res) => {
            setData(res.data);
        })
        .catch((err) => {
            setData({
                data: []
            });
        });
};