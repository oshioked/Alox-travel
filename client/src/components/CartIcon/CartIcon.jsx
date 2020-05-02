import React, { useContext } from 'react';
import './CartIcon.scss';

import {connect} from 'react-redux';
import {ToggleCartDisplay} from '../../Redux/Cart/Cart.actions';
import { BagIcon } from '../SvgComponents/Svgs';
import { ThemeContext } from '../../contextProviders/ThemeProvider/ThemeProvider';

const CartIcon = ({ToggleCartDisplay, cartItemsQuantity}) =>{
    const {currentTheme} = useContext(ThemeContext);
    return(
        <div className = 'cart-icon' theme = {currentTheme} onClick = {ToggleCartDisplay}>
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

const mapStateToProps = (state) =>{
    return{
        cartItemsQuantity: state.Cart.cartItems.length
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        ToggleCartDisplay: () => dispatch(ToggleCartDisplay())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);