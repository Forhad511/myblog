const getWishList = () => {
    let data = localStorage.getItem("wishlist");
    if (data) {
        let array = JSON.parse(data);
        return array.length;
    } else {
        return 0;
    }
};

export default function wishListReducer(state = getWishList(), action) {
    switch (action.type) {
        case "SET_WISHLIST":
            return action.payload;
        default:
            return state;
    }
}