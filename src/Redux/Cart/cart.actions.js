import {cartTypes} from './cart.types';

export const ToggleCartDisplay = () =>{
    return({
        type: cartTypes.TOGGLE_CART_DISPLAY
    })
}
    
export const AddItemToCart = (item) =>{
    return({
        type: cartTypes.ADD_ITEM_TO_CART,
        payload: item
    })
}