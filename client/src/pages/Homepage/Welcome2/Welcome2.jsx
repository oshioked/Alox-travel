import React, {useEffect, useRef, useState, useContext} from 'react';
import './Welcome2.scss';
import gsap from 'gsap';
import {useHistory} from 'react-router-dom';
import DescriptionSet from '../../../components/DescriptionSet/DescriptionSet';
import { ThemeContext } from '../../../contextProviders/ThemeProvider/ThemeProvider';

const Welcome2 = () =>{
    const imageBgRef = useRef(null);
    const imgRef = useRef(null)
    const transBgRef = useRef(null);
    const sectionRef = useRef(null);
    const detailsRef = useRef(null)
    const bgDarkenerRef = useRef(null);
    const [clicked, setClicked] = useState(false);
    const {push} = useHistory();
    const {currentTheme} = useContext(ThemeContext);

    useEffect(()=>{
        gsap.to(imgRef.current, {
            scrollTrigger: {
                trigger: imageBgRef.current,
                scrub: true
            },
            scale: 1.5
        })
    }, [])

    const onClick= async () =>{
        document.body.style.overflow = 'hidden'
        const getImgBoundingBox = () =>{
            return imgRef.current.getBoundingClientRect();
        } 
        const navBarBoundingBox = document.querySelector('.main-nav-bar').getBoundingClientRect();
        const tl = gsap.timeline();
        await tl
            .to(detailsRef.current, {
                autoAlpha: 0,
                yPercent: 100,
                duration: .5
            })
            .set(imgRef.current, {
                zIndex: 5,
            })
            .to(imgRef.current, {
                height: window.innerWidth <768 ? 'unset' : '100%',
                minHeight: window.innerWidth<768 ? 'unset' : 'unset',
                minWidth: 'unset',
                width: window.innerWidth < 768 ? window.innerWidth : (window.innerWidth * .84 * .5),
                duration: 1,
                left: window.innerWidth < 768 ? null : window.innerWidth * .08,
                scale: 1,
            })
            .set(imgRef.current, {
                bottom: window.innerWidth >768 ? 'unset' : null,
            })
            .set(sectionRef.current, {
                overflow: 'visible'
            })
            .set(transBgRef.current, {
                width: window.innerWidth,
                zIndex: 1,
                height: window.innerHeight
            }, '-=.5')
            .fromTo(transBgRef.current, {
                background: 'none',
                duration: 1
            }, {
                background: currentTheme === 'dark' ? '#191F29' : 'white',
                duration:1
            }, '-=.5')

            await gsap.to(imgRef.current, {
                height: window.innerWidth <768 ? 'unset' : 'auto',
                y: -(getImgBoundingBox().y - navBarBoundingBox.height),
                x: window.innerWidth < 768 ? -getImgBoundingBox().x : -(getImgBoundingBox().x - (window.innerWidth * .08))  ,
                duration: .5
            })

            document.body.style.overflow = null
            setClicked(false)
            push(`/product/${prodName}`);
            window.scrollTo(0, 0)
    }

    const prodName = 'The Self Adjusting Watch';

    return(
        <div ref = {sectionRef} className = 'welcome2'>
            <img ref = {imgRef} src = {require('../../../assests/images/watch (1).png')} alt = 'watch'/>
            <div style = {{position: 'fixed', top: '0', left: '0', bottom: '0'}} ref = {transBgRef} className  = "trans-background"/>
            <div ref = {bgDarkenerRef} style = {{opacity: 1}} className = 'image-darkener' />
            <div className = 'container'>
                <div className = 'welcome2-content'>
                    <div ref = {detailsRef} className = 'description-set'>
                        <DescriptionSet
                            title = 'The Self-adjusting Watch.'
                            onBtnClick = {onClick}
                            detail = 'Where ever you travel to, whatever time zone, using our upgraded GPS system, this watch automatically change time zone.'
                            btnValue = 'PREORDER NOW'
                        />                    
                    </div>
                </div>  
            </div>

        </div> 
        
    )
}

export default Welcome2;