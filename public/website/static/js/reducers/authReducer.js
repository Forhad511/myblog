const initialState = {
    isAuthenticated: false,
};

export default function userAuth(state = initialState, action) {
    switch (action.type) {
        case "SET_USER_AUTH":
            return {
                ...state,
                isAuthenticated: action.payload,
            };
        default:
            return state;
    }
}