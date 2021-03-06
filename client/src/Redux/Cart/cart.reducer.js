
import {addItemToCart, clearItemFromCart, reduceItemQty} from './cart.utils';
import { cartTypes } from './cart.actions';

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
        case cartTypes.CLEAR_ITEM:
            return({
                ...state,
                cartItems: clearItemFromCart(action.payload, state.cartItems)
            })
        case cartTypes.REDUCE_ITEM:
            return({
                ...state,
                cartItems: reduceItemQty(action.payload, state.cartItems)
            })
        default: 
            return state
    }
}