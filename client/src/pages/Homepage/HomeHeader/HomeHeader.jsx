import React from 'react';
import './HomeHeader.scss';
import SecButton from '../../../components/SecButton/SecButton';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';



const HomeHeader = () =>{
    const headerBgRef = useRef(null);
    const sectionRef = useRef(null);
    const descRef = useRef(null);

    useEffect(() => {
        const h1Ref = descRef.current.children[0].children[0];
        const btnRef = descRef.current.children[1].children[0];
        const tl = gsap.timeline({
        });
        
        tl
            .from(headerBgRef.current, { duration: 1.5, scale: 1.1, ease: 'power3.easeOut'})
            .from(h1Ref, {duration: 1, opacity: 0, yPercent: 130, ease: 'power3.easeOut'})
            .from(btnRef, {duration: .2, autoAlpha: 0})
    }, [])


    return(
        <div ref = {sectionRef} className = 'home-header'>

            <div ref = {headerBgRef} className = "bg-image-container">
                <img src = {require('../../../assests/images/headerBg.jpg')} alt = "header bg"/>
            </div>
            <div className = 'image-darkener'/>
            <div className = 'container'>
                <div className = 'home-header-content'>
                    <div ref = {descRef} className = 'header-description'>
                        <div style = {{overflow: 'hidden'}}>
                            <h1>Carefully built travel bags and accessories</h1>
                        </div>
                        <div style = {{overflow: 'hidden'}}>
                            <SecButton style = {{border: '2px solid white'}} linkTo = '/collection' value = 'SHOP NOW'/>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default HomeHeader;