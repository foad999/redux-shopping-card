import productReducer from "./products/productReducer";
import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer"
 const rootStore =combineReducers({
    productsState:productReducer,
    cartState:cartReducer
})
export default rootStore