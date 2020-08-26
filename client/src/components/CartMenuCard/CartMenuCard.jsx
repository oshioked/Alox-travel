import React from 'react';
import './CartMenuCard.scss';

const CartMenuCard = ({item}) =>{
    return(
        <div className = 'cart-menu-card'>
            <div className = 'product-image'>
                <img src = {item.imgSrc} height = "auto" alt = 'productImage'/>
            </div>
            
            <div className = 'product-details'>
                <h3 className = 'product-name'>{item.name}</h3>
                <p className = 'product-price-and-quantity'>{`${item.price} x ${item.quantityInCart}`}</p>
            </div>
        </div>
    )
}

export default CartMenuCard;