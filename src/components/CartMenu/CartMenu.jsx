import React, { useContext } from 'react';
import './CartMenu.scss';

import CartIcon from '../CartIcon/CartIcon';
import CartMenuCard from '../CartMenuCard/CartMenuCard';
import SecButton from '../SecButton/SecButton';

import {connect} from 'react-redux';
import { ToggleCartDisplay } from '../../Redux/Cart/Cart.actions';
import { ThemeContext } from '../../contextProviders/ThemeProvider/ThemeProvider';
import { CancelBtn } from '../SvgComponents/Svgs';

const CartMenu = ({display, ToggleDisplay})=>{

    const cartDisplay = display ? 'show' : 'hide';

    const {currentTheme} = useContext(ThemeContext);

    return(
        <div display = {cartDisplay} className = 'cart-menu'>
            <div className = 'container'>
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


                    <div className = 'section products-display'>
                        <CartMenuCard 
                            imgSrc = {require('./BP3 1.png')}
                        /><hr/>
                        <CartMenuCard 
                            imgSrc = {require('./BP3 1.png')}
                        /><hr/>
                        <CartMenuCard 
                            imgSrc = {require('./BP3 1.png')}
                        /><hr/>
                        <CartMenuCard 
                            imgSrc = {require('./BP3 1.png')}
                        /><hr/>
                        <CartMenuCard 
                            imgSrc = {require('./BP3 1.png')}
                        /><hr/>
                    </div>


                    <div className = 'section checkout-button-container'>
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
                        />
                    </div>
                </div>
                
            </div>
        </div>
    )
}

const mapStateToProps = (state) =>({
    display: state.Cart.display
})


const mapDispatchToProps = (dispatch) =>({
    ToggleDisplay: () => dispatch(ToggleCartDisplay())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartMenu);