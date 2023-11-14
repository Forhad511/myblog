import axios from "axios";
import Url from "../utils/Url";

export const getProductsAction =
    (platform, key, page, setLoading, setError, query) => (dispatch) => {
        let source = platform;
        if (source === "china" || source === "pakistan") {
            source = "1688";
        }

        let vendor_id = false;
        if (key.includes("abb-") && !key.includes("alb-")) {
            vendor_id = true;
        }

        if (source === "alibaba") {
            setError({
                type: 9,
                message: "Backend Error",
            });
            dispatch({
                type: "SET_PRODUCTS",
                payload: null,
            });
            return;
        }

        let get = `${Url}/product/key-search?source=${
      key.includes("alb-") ? "alibaba" : source
    }&key=${decodeURI(key.split("%").join(" "))}&page=${page}`;

        if (vendor_id) {
            get = `${Url}/product/key-search?source=${source}&key=${decodeURI(
        key
      )}&vendor_id=${decodeURI(key)}&page=${page}`;
        }

        if (query) {
            get = get + "&" + query.slice(1);
        }

        axios
            .get(encodeURI(get))
            .then((res) => {
                console.log(res.data);
                if (res.data && res.data.results && Array.isArray(res.data.results)) {
                    dispatch({
                        type: "SET_PRODUCTS",
                        payload: res.data,
                    });
                    setLoading(false);
                } else {
                    setError({
                        type: 9,
                        message: "Product Not Found ...",
                    });
                }
            })
            .catch((err) => {
                setError({
                    type: 9,
                    message: "Backend Error",
                });
                dispatch({
                    type: "SET_PRODUCTS",
                    payload: null,
                });
            });
    };

export const setProductsAction = (data) => (dispatch) => {
    dispatch({
        type: "SET_PRODUCTS",
        payload: data,
    });
};

export const getProductsByImageAction =
    (platform, image, page, setLoading, setError, prevLink, history) =>
    (dispatch) => {
        let source = platform;
        if (source === "china") {
            source = "1688";
        }
        let get = `${Url}/product/image-search`;
        let formData = new FormData();

        formData.append("source", source);
        formData.append("page", page);
        if (image) {
            formData.append("image", image);
        } else {
            if (prevLink) {
                formData.append("img_src", prevLink);
            }
        }

        for (var pair of formData.entries()) {
            console.log(pair[0] + ", " + pair[1]);
        }

        dispatch({
            type: "SET_PRODUCTS",
            payload: null,
        });
        axios({
                method: "post",
                url: get,
                data: formData,
                headers: {
                    "Content-Type": "multipart/form-data"
                },
            })
            .then((res) => {
                console.log(res.data);
                if (res.data && res.data.results && Array.isArray(res.data.results)) {
                    dispatch({
                        type: "SET_PRODUCTS",
                        payload: res.data,
                    });
                    if (image) {
                        history.push({
                            pathname: `/shop/${"china"}/imagesearch`,
                            search: `?imagesrc=${res.data.key}`,
                            state: {
                                loadAgain: false
                            },
                        });
                    }
                    setLoading(false);
                } else {
                    setLoading(false);
                    history.push(`/product/${"china"}/link`);
                }
            })
            .catch((err) => {
                setLoading(false);
                setError({
                    type: 9,
                    message: "Backend Error",
                });
                dispatch({
                    type: "SET_PRODUCTS",
                    payload: null,
                });
            });
    };