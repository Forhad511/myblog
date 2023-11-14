import setAuthToken from "../utils/setAuthToken";

const authErrorHandler = (err) => {
    if (err.response && err.response.status === 401) {
        if (localStorage.getItem("agl")) {
            localStorage.removeItem("agl");
            localStorage.removeItem("profile");
            setAuthToken(null);
            window.location = "/login";
        }
    }
};

export default authErrorHandler;