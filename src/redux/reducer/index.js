import { combineReducers } from "redux";
import loginReducer from "./loginData.reducer";
import productsReducer from "./products.reducer";

const reducer = combineReducers({
    products: productsReducer,
    loginData: loginReducer
})

export default reducer