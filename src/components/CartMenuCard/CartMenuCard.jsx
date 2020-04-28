import React from 'react';
import './CartMenuCard.scss';

const CartMenuCard = ({imgSrc}) =>{
    return(
        <div className = 'cart-menu-card'>
            <img className = 'product-image' src = {imgSrc} alt = 'productImage'/>
            <div className = 'product-details'>
                <h3 className = 'product-name'>Backpack with brown straps and buckles.</h3>
                <p className = 'product-price-and-quantity'>$53.25 X 1</p>
            </div>
        </div>
    )
}

export default CartMenuCard;