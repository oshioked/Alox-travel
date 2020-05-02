import {userActionTypes} from './user.types';

const initialState = {
    currentUser: null,
    isPending: false,
    error: null
}


export const User = (state = initialState, action) =>{
    switch(action.type){
        case userActionTypes.SIGN_IN_START:
        case userActionTypes.SIGN_UP_START:
            return({
                ...state,
                isPending: true
            })
        case userActionTypes.SIGN_IN_SUCCESS:
        case userActionTypes.SIGN_UP_SUCCESS:
            return({
                ...state,
                currentUser: action.payload,
                error: null
            })
        case userActionTypes.SIGN_IN_FAILURE:
        case userActionTypes.SIGN_UP_FAILURE:
            return({
                ...state,
                error: action.payload
            })
        case userActionTypes.SIGN_OUT:
            return({
                ...state,
                currentUser: null
            })
        default: 
            return state
    }
}