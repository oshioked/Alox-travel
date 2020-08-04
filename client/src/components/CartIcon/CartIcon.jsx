import React, { useContext } from 'react';
import './CartIcon.scss';

import {useDispatch, useSelector} from 'react-redux';
import {ToggleCartDisplay} from '../../Redux/Cart/cart.actions';
import { BagIcon } from '../SvgComponents/Svgs';
import { ThemeContext } from '../../contextProviders/ThemeProvider/ThemeProvider';

const CartIcon = () =>{
    const {currentTheme} = useContext(ThemeContext);
    const dispatch = useDispatch();

    const toggleCartDisplay = () => {
        dispatch(ToggleCartDisplay())
    }
    const cartItemsQuantity = useSelector(state => state.Cart.cartItems.length);
    return(
        <div className = 'cart-icon' theme = {currentTheme} onClick = {toggleCartDisplay}>
            {
                cartItemsQuantity 
                ? <p className = 'cart-item-count'>{cartItemsQuantity}</p>
                : null
            }
            <button id = 'view-cart-btn'>
                <BagIcon/>
            </button>
        </div>
    )
}

export default CartIcon;