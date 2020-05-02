import React from 'react';
import './CartMenuCard.scss';

const CartMenuCard = ({item}) =>{
    return(
        <div className = 'cart-menu-card'>
            <img className = 'product-image' src = {item.imgSrc} alt = 'productImage'/>
            <div className = 'product-details'>
                <h3 className = 'product-name'>{item.name}</h3>
                <p className = 'product-price-and-quantity'>{`${item.price} x ${item.quantityInCart}`}</p>
            </div>
        </div>
    )
}

export default CartMenuCard;