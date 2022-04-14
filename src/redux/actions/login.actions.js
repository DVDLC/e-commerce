import axios from "axios";
import { setIsLoading } from "./products.action";
import { GET_STATUS } from "../types";

const baseUrl = 'https://ecommerce-api-react.herokuapp.com/api/v1/users'



export const getStatus = ( status ) => ({ type: GET_STATUS, payload: status })

export const UserLoginThunk = ( userData ) => {
    return dispatch => {
        dispatch( setIsLoading( true ) )
        axios.post( `${baseUrl}/login`, userData  )
            .then( res => {
                const user = { 
                    name: res.data.data.user.firstName,
                    token: res.data.data.token
                }
                localStorage.setItem( "user", JSON.stringify( user ))
            })
            .catch( err => {
                dispatch( getStatus( [ err.response.status, err.response.statusText  ] ))
            })
            .finally( () => dispatch( setIsLoading( false ) ))
    }
}