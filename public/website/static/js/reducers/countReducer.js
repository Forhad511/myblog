const initialState = {
    cart_count: 0,
    wishlist_count: 0,
};

export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_COUNT":
            return action.payload;

        default:
            return state;
    }
}