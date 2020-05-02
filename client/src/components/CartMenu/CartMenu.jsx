import React, { useContext } from 'react';
import './CartMenu.scss';

import CartIcon from '../CartIcon/CartIcon';
import CartMenuCard from '../CartMenuCard/CartMenuCard';
import SecButton from '../SecButton/SecButton';
import { CancelBtn } from '../SvgComponents/Svgs';

import {connect} from 'react-redux';
import { ToggleCartDisplay } from '../../Redux/Cart/Cart.actions';
import { ThemeContext } from '../../contextProviders/ThemeProvider/ThemeProvider';


const CartMenu = ({display, ToggleDisplay, cartItems})=>{

    const cartDisplay = display ? 'show' : 'hide';

    const {currentTheme} = useContext(ThemeContext);

    return(
        <div display = {cartDisplay} className = 'cart-menu'>
            <div className = 'container'>
                <div className = 'menu-concealer' onClick = {ToggleDisplay}/>
                <div className = 'cart-menu-content shade1bg'>


                    <div className = 'section header'>
                        <div className = 'head-title'>
                            <CartIcon/>
                            <h2>My cart</h2>
                        </div>
                        <button className = 'cancel-btn' onClick = {ToggleDisplay}>
                            <CancelBtn/>
                        </button>
                    </div>


                    {
                        cartItems.length 
                        ?
                        <div className = 'section products-display'>
                        {
                            cartItems.map((item, i)=>
                                <React.Fragment>
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
                                onClick = {ToggleDisplay}
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
                                linkTo = '/shop/collection/new arrivals'
                                onClick = {ToggleDisplay}
                            />
                            
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) =>({
    display: state.Cart.display,
    cartItems: state.Cart.cartItems
})


const mapDispatchToProps = (dispatch) =>({
    ToggleDisplay: () => dispatch(ToggleCartDisplay())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartMenu);