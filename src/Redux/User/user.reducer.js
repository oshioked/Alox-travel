import {userActionTypes} from './user.actions';

const initialState = {
    name: '',
    email: '',
    id: ''
}


export const User = (state = initialState, action) =>{
    switch(action.type){
        case userActionTypes.AUTH_USER:
            const {id, name, email} = action.payload;
            return({id, email, name })
        case userActionTypes.LOG_OUT:
            return(null)
        default: 
            return state
    }
}