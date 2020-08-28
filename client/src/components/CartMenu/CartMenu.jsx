import React, { useContext } from 'react';
import './CartMenu.scss';

import CartIcon from '../CartIcon/CartIcon';
import CartMenuCard from '../CartMenuCard/CartMenuCard';
import SecButton from '../SecButton/SecButton';
import { CancelBtn } from '../SvgComponents/Svgs';

import {useDispatch, useSelector} from 'react-redux';
import { ToggleCartDisplay } from '../../Redux/Cart/cart.actions';
import { ThemeContext } from '../../contextProviders/ThemeProvider/ThemeProvider';


const CartMenu = ()=>{
    const cart = useSelector(state => state.Cart);
    const {display, cartItems} = cart;
    const cartDisplay = display ? 'show' : 'hide';

    const dispatch = useDispatch();
    const toggleDisplay = () =>{
        dispatch(ToggleCartDisplay())
    }

    const {currentTheme} = useContext(ThemeContext);

    return(
        <div display = {cartDisplay} className = 'cart-menu'>
            <div className = 'container'>
                <div className = 'menu-concealer' onClick = {toggleDisplay}/>
                <div className = 'cart-menu-content shade1bg'>


                    <div className = 'section header'>
                        <div className = 'head-title'>
                            <CartIcon/>
                            <h2>My cart</h2>
                        </div>
                        <button className = 'cancel-btn' onClick = {toggleDisplay}>
                            <CancelBtn/>
                        </button>
                    </div>


                    {
                        cartItems.length 
                        ?
                        <div className = 'section products-display'>
                        {
                            cartItems.map((item, i)=>
                                <React.Fragment key = {i}>
                                    <CartMenuCard item = {item}/><hr/>
                                </React.Fragment>
                            )
                        }
                        </div>
                        :
                        <div className = 'section empty-cart-message-section'>
                            <p>Your cart is currently empty</p>
                        </div>
                    }
                    


                    <div className = 'section checkout-button-container'>
                        {
                            cartItems.length
                            ? 
                            <SecButton
                                value = 'GO TO CHECKOUT'
                                style = {
                                    currentTheme === 'dark'
                                    ? {
                                        background: 'white',
                                        color: 'black',
                                        border: 'none'
                                    } : 
                                    {
                                        background: '#191F29',
                                        color: 'white',
                                        border: 'none'
                                    }
                                }
                                linkTo = '/checkout'
                                onClick = {toggleDisplay}
                            />
                            :
                            <SecButton
                                value = 'GO TO SHOP'
                                style = {
                                    currentTheme === 'dark'
                                    ? {
                                        background: 'white',
                                        color: 'black',
                                        border: 'none'
                                    } : 
                                    {
                                        background: '#191F29',
                                        color: 'white',
                                        border: 'none'
                                    }
                                }
                                linkTo = '/shop/collections/New In'
                                onClick = {toggleDisplay}
                            />
                            
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartMenu;