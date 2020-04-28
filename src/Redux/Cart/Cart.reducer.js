import {cartTypes} from './Cart.types';

const initialState = {
    display: false
}

export const Cart = (state = initialState, action) =>{
    switch (action.type){
        case cartTypes.TOGGLE_CART_DISPLAY:
            return({
                ...state,
                display: !state.display
            })
        default: 
            return state
    }
}