import axios from "axios";
import {  
    IS_LOADING, 
    GET_CART,
    IS_DASH_OPEN, 
    GET_PRODUCTS,
    GET_PRODUCT_BY_ID, 
    SET_CATEGORIES 
} from "../types";

const baseUrl = 'https://ecommerce-api-react.herokuapp.com/api/v1'
const Token = JSON.parse( localStorage.getItem( 'user' ) )

export const isDashOpen =  isDashOpen  => ({ type: IS_DASH_OPEN, payload: isDashOpen })
export const setIsLoading = isLoading => ({ type: IS_LOADING, payload: isLoading })
export const getProducts = products => ({ type: GET_PRODUCTS, payload: products })
export const getCart = cart => ({ type: GET_CART, payload: cart })
export const getProductByID = idx => ({ type: GET_PRODUCT_BY_ID, payload: idx })
export const setCategoires = category => ({ type: SET_CATEGORIES, payload: category })


const getConfig = () => ({
    headers: { Authorization: `Bearer ${ Token?.token }` }
});

export const getProductsThunk = () => {
    
    return dispatch => {
        dispatch( setIsLoading( true ) )
        axios.get( `${baseUrl}/products` )
            .then( res => dispatch( getProducts( res.data ) ) )
            .finally( () => dispatch( setIsLoading( false ) ))
    }   
}

export const getProductByIDThunk = idx => {
    
    return dispatch => {
        dispatch( setIsLoading( true ) )
        axios.get( `${baseUrl}/products/${idx}` )
            .then( res => dispatch( getProductByID( res.data ) ) )
            .finally( () => dispatch( setIsLoading( false ) ))
    }   
}

export const setCategoiresThunk = () => {
    
    return dispatch => {
        dispatch( setIsLoading( true ) )
        axios.get( `${baseUrl}/products/categories` )
            .then( res => dispatch( setCategoires( res.data ) ) )
            .finally( () => dispatch( setIsLoading( false ) ))
    }   
}

export const filterCategoryThunk = idx => {
    
    return dispatch => {
        dispatch( setIsLoading( true ) )
        axios.get( `${baseUrl}/products/?category=${idx}` )
            .then( res => dispatch( getProducts( res.data ) ) )
            .finally( () => dispatch( setIsLoading( false ) ))
    }   
}

export const filterByNameThunk = productName => {
    
    return dispatch => {
        dispatch( setIsLoading( true ) )
        axios.get( `${baseUrl}/products/?query=${productName}` )
            .then( res => dispatch( getProducts( res.data ) ) )
            .finally( () => dispatch( setIsLoading( false ) ))
    }   
}

export const addProductToCartThunk = productToCart => {
    return dispatch => {
        dispatch( setIsLoading( true ) ) 
        axios.post( `${baseUrl}/cart`, productToCart, getConfig() )
            .finally( () => dispatch( setIsLoading( false  ) ) )
    }
}

export const getCartThunk = () => {
    
    return dispatch => {
        dispatch( setIsLoading( true ) )
        axios.get( `${baseUrl}/cart`, getConfig())
            .then( res => dispatch( getCart( res.data ) ) )
            .finally( () => dispatch( setIsLoading( false ) ))
    }   
}

export const deleteProductInCartThunk = () => {
    return dispatch => {
        dispatch( setIsLoading( true ) )
        axios.delete()
    }
}