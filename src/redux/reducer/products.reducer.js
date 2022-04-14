import { 
    IS_DASH_OPEN, 
    GET_PRODUCTS,
    GET_CART, 
    GET_PRODUCT_BY_ID, 
    SET_CATEGORIES, 
    IS_LOADING 
} from "../types";

const InitialState = {
    products: [],
    productByID: {},
    categories: [],
    cart: [],
    isLoading: true,
    isDashOpen: false,
}


export default function productsReducer(state = InitialState, action) {
    switch (action.type) {
        case IS_LOADING:
            return { ...state, isLoading: action.payload }
        case IS_DASH_OPEN:
            return { ...state, isDashOpen: action.payload }
        case GET_PRODUCTS:
            return { ...state, products: action.payload }
        case GET_CART:
            return { ...state, cart: action.payload }
        case GET_PRODUCT_BY_ID:
            return { ...state, productByID: action.payload }
        case SET_CATEGORIES:
            return { ...state, categories: action.payload }
        default:
            return state;
    }
}