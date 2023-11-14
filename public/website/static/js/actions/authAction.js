import axios from "axios";
import getError from "../utils/GetError";
import setAuthToken from "../utils/setAuthToken";
import url from "../utils/UrlV2";

function getPlatform(url) {
    return url.replace(/.+\/\/|www.|\..+/g, "");
}
export const sendReferer = (data, afterAsync) => {
    let mData = data ? { ...data
    } : {};
    mData.platform = getPlatform(data.url);
    mData.url = data.url;
    axios
        .post(url + `user/referer`, mData)
        .then((res) => {
            console.log(res.data);
            afterAsync(true);
            localStorage.setItem("referer", data.url);
            if (data.agl_id) {
                localStorage.setItem("agl_id", data.agl_id);
            }
        })
        .catch((err) => {
            console.log(err);
            localStorage.setItem("referer", data.url);
            afterAsync(false);
        });
};

export const loginUser =
    (data, history, loginAfterFunction, redirectPage) => (dispatch) => {
        axios
            .post(url + "user/verify-otp", data)
            .then((res) => {
                if (res.data && res.data.success) {
                    const {
                        token,
                        name,
                        phone
                    } = res.data.success;
                    localStorage.setItem("agl", token);
                    localStorage.setItem(
                        "profile",
                        JSON.stringify({
                            name: name,
                            phone: phone,
                        })
                    );
                    setAuthToken(token);
                    dispatch(setUser(true));
                    if (redirectPage) {
                        history.push("/account");
                    } else {
                        loginAfterFunction(true);
                    }
                }
            })
            .catch((err) => {
                loginAfterFunction(false, getError(err));
            });
    };

export const logoutUser = () => (dispatch) => {
    localStorage.removeItem("agl");
    localStorage.removeItem("profile");
    localStorage.removeItem("prev");
    localStorage.removeItem("referer");
    localStorage.removeItem("agl_id");
    setAuthToken(null);
    dispatch(setUser(false));

    window.location = "/login";
};

export const setUser = (isAuthenticated) => {
    return {
        type: "SET_USER_AUTH",
        payload: isAuthenticated,
    };
};