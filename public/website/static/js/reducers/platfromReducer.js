const getPlatform = () => {
    let data = localStorage.getItem("platform");
    if (data) {
        let array = JSON.parse(data);
        return array[array.length - 1];
    } else {
        return "china";
    }
};

export default function platformReducer(state = "china", action) {
    switch (action.type) {
        case "SET_PLATFORM":
            return action.payload;
        default:
            return state;
    }
}