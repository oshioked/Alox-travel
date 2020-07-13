export const addItemToCart = (itemToBeAdded, cartItems) =>{
    const existingItem = cartItems.find((item, i)=>
        item.name === itemToBeAdded.name
    )
    
    const newCartItems = existingItem ? 
        cartItems.map((item=>{
            const newQuantity = existingItem.quantityInCart + 1;
            return(
                item.name === existingItem.name ? {...item, quantityInCart: newQuantity} : item
            )
        }))
    :
        [...cartItems, {...itemToBeAdded, quantityInCart: 1}];
    
        return newCartItems
}
