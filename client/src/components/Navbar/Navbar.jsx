import React, { useEffect, useState } from 'react';
import './Navbar.scss';

import CartIcon from '../CartIcon/CartIcon';
import { NavTogglerIcon, AloxIcon } from '../SvgComponents/Svgs';

import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {ToggleSideMenuDisplay} from '../../Redux/SideMenu/sideMenu.actions.js';
import {useLocation} from 'react-router-dom';


const Navbar = ({ToggleSideMenuDisplay}) =>{
    
    const {pathname} = useLocation();
    const [navbarTransparent, setNavbarTransparent] = useState(true);
    const [pagePathName, setPagePathName] = useState(pathname);
 
    useEffect(()=>{
        setPagePathName(pathname);
    }, [pathname])

    useEffect(()=>{
        document.addEventListener("scroll", () => {
            const viewWidth = document.documentElement.clientWidth || window.innerWidth;
            const navheight = viewWidth > 768 ? 80 : 60;
            if(window.scrollY > navheight) {
                setNavbarTransparent(false);
            }else{
                setNavbarTransparent(true);
            }
        })
    }, [])

    return(
        <nav 
            className = 'main-nav-bar shade1bg' 
            transparent = {navbarTransparent ? 'true' : 'false'}
            pagePathName = {pagePathName}
        >
            <button id = 'navbar-toggler-btn' onClick = {ToggleSideMenuDisplay}>
                <NavTogglerIcon/>
            </button>
            <Link to = '/' className = 'brandName' ><AloxIcon/></Link>
            <CartIcon/>
        </nav>
    );
}

const mapDispatchToProps = (dispatch)=>{
    return{
        ToggleSideMenuDisplay: () => dispatch(ToggleSideMenuDisplay())
    }
}


export default connect(null, mapDispatchToProps)(Navbar);