import {
    combineReducers
} from "redux";
import productReducer from "./productReducer";
import platformReducer from "./platfromReducer";
import wishListReducer from "./wishlistReducer";
import authReducer from "./authReducer";
import countReducer from "./countReducer";
export default combineReducers({
    products: productReducer,
    platform: platformReducer,
    wishlist: wishListReducer,
    auth: authReducer,
    count: countReducer,
});