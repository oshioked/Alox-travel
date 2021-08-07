export const cartTypes = {
    TOGGLE_CART_DISPLAY: 'TOGGLE_CART_DISPLAY',
    ADD_ITEM_TO_CART: 'ADD_ITEM_TO_CART',
    CLEAR_ITEM: 'CLEAR_ITEM',
    REDUCE_ITEM: 'REDUCE_ITEM'
}

export const ToggleCartDisplay = () =>{
    return({
        type: cartTypes.TOGGLE_CART_DISPLAY
    })
}
    
export const AddItemToCart = (item) =>{
    console.log(item)
    return({
        type: cartTypes.ADD_ITEM_TO_CART,
        payload: item
    })
}

export const clearItem = (itemId) =>{
    return({
        type: cartTypes.CLEAR_ITEM,
        payload: itemId
    })
}

export const reduceItemQty = (itemId) =>({
    type: cartTypes.REDUCE_ITEM,
    payload:itemId
})