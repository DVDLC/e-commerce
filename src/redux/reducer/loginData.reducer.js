import { GET_STATUS } from "../types";

const InitialState = {
    status: null,
    message: null
}


export default function loginReducer(state = InitialState, action) {
    switch (action.type) {
        case GET_STATUS:
            switch( action.payload[0]){
                case 200:
                    return{
                        ...state, 
                        status: action.payload[0],
                        message: action.payload[1] 
                    }
                case 400:
                    return {
                        ...state, 
                        status: action.payload[0],
                        message: action.payload[1] 
                    }
                case 404:
                    return{
                        ...state, 
                        status: action.payload[0],
                        message: action.payload[1] 
                    }
              default:
                return state
            }
        default:
            return state;
    }
}