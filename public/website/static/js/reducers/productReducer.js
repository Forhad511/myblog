const initialState = {
    productList: null,
};

export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_PRODUCTS":
            return {
                ...state,
                productList: action.payload,
            };
        default:
            return state;
    }
}