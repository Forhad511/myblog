import axios from "axios";
import Url from "../utils/UrlV2";

function getPlatform(url) {
    return url.replace(/.+\/\/|www.|\..+/g, "");
}

export const customerSendOtp = (data, afterAsync) => {
    let mData = data ? { ...data
    } : {};
    let referer = localStorage.getItem("referer");
    if (referer) {
        mData.platform = getPlatform(referer);
        mData.url = referer;
    }
    let agl_id = localStorage.getItem("agl_id");

    if (agl_id) {
        mData.agl_id = agl_id;
    }
    axios
        .post(Url + `user/login-register`, mData)
        .then((res) => {
            localStorage.removeItem("referer");
            localStorage.removeItem("agl_id");
            afterAsync(true);
        })
        .catch((err) => {
            afterAsync(false);
        });
};