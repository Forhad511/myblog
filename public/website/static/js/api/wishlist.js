import axios from "axios";
import Url from "../utils/Url";
import authErrorHandler from "./authErrorHandler";

export const getWishlist = (setdata, setLoading, page, setPagination) => {
    setLoading(true);
    let url = `${Url}/user/wish-list?page=${page}`;
    axios
        .get(url)
        .then((res) => {
            console.log(res.data);
            setdata(res.data.data);
            setPagination(res.data.meta);
            setLoading(false);
        })
        .catch((err) => {
            authErrorHandler(err);
            setLoading(false);
        });
};

export const saveWishlist = (data, setLoading, setInWishList) => {
    setLoading(true);
    let url = `${Url}/user/wish-list`;
    axios
        .post(url, data)
        .then((res) => {
            setLoading(false);
            setInWishList(res.data.id);
        })
        .catch((err) => {
            console.log(err);
            setLoading(false);
        });
};

export const checkWishlist = (data, setLoading, setInWishList) => {
    setLoading(true);
    let url = `${Url}/user/wish-list-availability`;
    axios
        .post(url, data)
        .then((res) => {
            console.log(res);
            if (res.data.wish_list_id) {
                setInWishList(res.data.wish_list_id);
            }

            setLoading(false);
        })
        .catch((err) => {
            setLoading(false);
        });
};

export const removeWishlist = (
    id,
    setLoading,
    setReload,
    setId,
    setInWishList
) => {
    setLoading(true);
    let url = `${Url}/user/wish-list/${id}`;
    axios
        .delete(url)
        .then((res) => {
            setLoading(false);
            if (setReload) {
                setReload(Math.random());
            }
            if (setId) {
                setId(0);
            }
            if (setInWishList) {
                console.log("hierrrrrrrrrrrrrrrrrrrrii");
                setInWishList(false);
            }
        })
        .catch((err) => {
            setLoading(false);
        });
};