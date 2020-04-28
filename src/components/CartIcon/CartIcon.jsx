import React, { useContext } from 'react';
import './CartIcon.scss';

import {connect} from 'react-redux';
import {ToggleCartDisplay} from '../../Redux/Cart/Cart.actions';
import { BagIcon } from '../SvgComponents/Svgs';
import { ThemeContext } from '../../contextProviders/ThemeProvider/ThemeProvider';

const CartIcon = ({ToggleCartDisplay}) =>{
    const {currentTheme} = useContext(ThemeContext);
    return(
        <div className = 'cart-icon' theme = {currentTheme} onClick = {ToggleCartDisplay}>
            <p className = 'cart-item-count'>2</p>
            <button id = 'view-cart-btn'>
                <BagIcon/>
            </button>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{

    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        ToggleCartDisplay: () => dispatch(ToggleCartDisplay())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);