import React from 'react';
import './Navbar.scss';

import CartIcon from '../CartIcon/CartIcon';
import { NavTogglerIcon, AloxIcon } from '../SvgComponents/Svgs';

import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {ToggleSideMenuDisplay} from '../../Redux/SideMenu/sideMenu.actions.js';



const Navbar = ({ToggleSideMenuDisplay}) =>{
    return(
        <nav className = 'main-nav-bar'>
            <button id = 'navbar-toggler-btn' onClick = {ToggleSideMenuDisplay}>
                <NavTogglerIcon/>
            </button>
            <Link to = '/' className = 'brandName' ><AloxIcon/></Link>
            <CartIcon/>
        </nav>
    )
}

const mapDispatchToProps = (dispatch)=>{
    return{
        ToggleSideMenuDisplay: () => dispatch(ToggleSideMenuDisplay())
    }
}


export default connect(null, mapDispatchToProps)(Navbar);