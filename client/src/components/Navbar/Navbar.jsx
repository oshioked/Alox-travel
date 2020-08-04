import React, { useEffect, useRef, useState } from 'react';
import './Navbar.scss';

import CartIcon from '../CartIcon/CartIcon';
import { NavTogglerIcon, AloxIcon } from '../SvgComponents/Svgs';

import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux';
import {ToggleSideMenuDisplay} from '../../Redux/SideMenu/sideMenu.actions.js';
import {useLocation} from 'react-router-dom';
import gsap from 'gsap';


const Navbar = () =>{
    const navRef = useRef(null);

    useEffect(()=>{
        const tl = gsap.timeline();
        tl.from(navRef.current, {
            duration: 1,
            yPercent: -100,
        })
    }, [])
    
    const {pathname} = useLocation();
    const [navbarTransparent, setNavbarTransparent] = useState(true);
    const [pagePathName, setPagePathName] = useState(pathname);
    const dispatch = useDispatch();
    const toggleSideMenuDisplay = () =>{
        dispatch(ToggleSideMenuDisplay())
    }
 
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
            ref = {navRef}
            className = 'main-nav-bar shade1bg' 
            transparent = {navbarTransparent ? 'true' : 'false'}
            pagePathName = {pagePathName}
        >
            <button id = 'navbar-toggler-btn' onClick = {toggleSideMenuDisplay}>
                <NavTogglerIcon/>
            </button>
            <Link to = '/' className = 'brandName' ><AloxIcon/></Link>
            <CartIcon/>
        </nav>
    );
}


export default Navbar;