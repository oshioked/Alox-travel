import {cartTypes} from './cart.types';
import {addItemToCart} from './cart.utils';

const initialState = {
    display: false,
    cartItems: []
}

export const Cart = (state = initialState, action) =>{
    switch (action.type){
        case cartTypes.TOGGLE_CART_DISPLAY:
            return({ 
                ...state,
                display: !state.display
            })
        case cartTypes.ADD_ITEM_TO_CART:
            return({
                ...state,
                cartItems: addItemToCart(action.payload, state.cartItems)
            })
        default: 
            return state
    }
}