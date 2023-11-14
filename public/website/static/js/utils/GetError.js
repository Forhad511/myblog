const getError = (err) => {
    console.log(err);
    if (err && err.response) {
        console.log(err.response);
    }
    if (
        err.response &&
        err.response.data &&
        err.response.data.errors &&
        typeof err.response.data.errors !== "string"
    ) {
        let error =
            err.response.data.errors[Object.keys(err.response.data.errors)[0]];
        if (typeof error[0] === "string" && error[0].length > 5) {
            return error[0];
        }
    } else if (
        err &&
        err.response &&
        err.response.data &&
        err.response.data.error &&
        typeof err.response.data.error !== "string"
    ) {
        let error =
            err.response.data.error[Object.keys(err.response.data.error)[0]];
        if (typeof error[0] === "string" && error[0].length > 5) {
            return error[0];
        }
    } else if (
        err &&
        err.response &&
        err.response.data &&
        err.response.data.message &&
        typeof err.response.data.message === "string"
    ) {
        return err.response.data.message;
    } else if (
        err &&
        err.response &&
        err.response.data &&
        err.response.data.error &&
        typeof err.response.data.error === "string"
    ) {
        return err.response.data.error;
    } else {
        return "Unknown Server Error";
    }
};

export default getError;