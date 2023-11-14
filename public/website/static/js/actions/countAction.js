import axios from "axios";
import url from "../utils/UrlV2";

export const getCount = () => (dispatch) => {
    axios
        .get(url + "user/counts")
        .then((res) => {
            if (res.data) {
                console.log(res.data);
                dispatch(setCount(res.data));
            }
        })
        .catch((err) => {});
};

export const setCount = (isAuthenticated) => {
    return {
        type: "SET_COUNT",
        payload: isAuthenticated,
    };
};