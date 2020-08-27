import React, {useRef, useEffect, useContext} from 'react';
import './SmallerProductsSection.scss';
import gsap from 'gsap';
import DescriptionSet from '../../../components/DescriptionSet/DescriptionSet';
import { ThemeContext } from '../../../contextProviders/ThemeProvider/ThemeProvider';
import { useHistory } from 'react-router-dom';

const SmallerProductsSection = () =>{
    const img1ContRef = useRef(null);
    const img2ContRef = useRef(null);
    const transBgRef = useRef(null);
    const {currentTheme} = useContext(ThemeContext)
    const {push} = useHistory();

    

    const animateToProductDetails = async () =>{
        document.body.style.overflow = 'hidden'
        const imgRef = img1ContRef.current.children[0];
        const tl = gsap.timeline();
        const getImgContBoundingBox = () =>{
            return img1ContRef.current.getBoundingClientRect();
        }

        const getImgBoundingBox = () =>{
            return img1ContRef.current.children[0].getBoundingClientRect();
        } 
    const navBarBoundingBox = document.querySelector('.main-nav-bar').getBoundingClientRect();
        await tl
        .to(img1ContRef.current, {
            height: imgRef.height,
            duration: .5
        })
        .set(img1ContRef.current, {
            overflow: 'visible',
            zIndex: 5,
        })
        .set(transBgRef.current, {
            width: window.innerWidth,
            zIndex: 1,
            height: window.innerHeight
        })
        .fromTo(transBgRef.current, {
            background: 'none',
            duration: 1
        }, {
            background: currentTheme === 'dark' ? '#191F29' : 'white',
            duration:1
        })
        .to(img1ContRef.current, {
            minWidth:  window.innerWidth < 768 ? 'calc(100vw)' : 'unset',
            width: window.innerWidth < 768 ? window.innerWidth : (window.innerWidth * .84 * .5) ,
            x: window.innerWidth < 768 ? -getImgContBoundingBox().left : -(getImgBoundingBox().left - (window.innerWidth * .08))  ,
            y: -(getImgBoundingBox().top - navBarBoundingBox.height),
            maxWidth: (window.innerHeight * 0.5),
            duration: 1,
            padding: '0',
        }, '-=.7')

        document.body.style.overflow = null
            push(`/product/Travel brown leather luggage`);
            window.scrollTo(0, 0)
    }

    useEffect(()=>{
        [img1ContRef, img2ContRef].forEach((a)=>{
            gsap.from(a.current.children, {
                scrollTrigger:{
                    trigger: a.current,
                    start: '20% bottom',
                },
                duration: 1.4,
                scale: 1.2
            })
        })
    }, [])

   
    return(
        <div className = 'smaller-products-section'>
            <div className = 'section-container container'>
                <div className = 'product product1'>
                    <div className = 'container'>
                            <div className = 'product-content'>
                                <div ref = {img1ContRef} className = 'image-container'>
                                    <img alt = 'productImg' src = 'https://i.ibb.co/wp3sJPN/travel-Lengend.png'/>
                                </div>
                                <div style = {{position: 'fixed', top: '0', left: '0', bottom: '0'}} ref = {transBgRef} className  = "trans-background"/>
                                <DescriptionSet 
                                    title = 'The Travel Legend'
                                    detail = 'A legendary travel bag which was previously out of stock returns, by request. Many customers asked us to bring it back; we listened, upgraded it, and relaunched it.'
                                    btnValue = 'ORDER NOW'  
                                    onBtnClick = {animateToProductDetails}                     
                                />
                                <div className = 'description-set pc'>
                                    <DescriptionSet
                                        title = 'The Travel Legend'
                                        onBtnClick = {animateToProductDetails}
                                        detail = 'A legendary travel bag which was previously out of stock returns, by request. Many customers asked us to bring it back; we listened, upgraded it, and relaunched it.'
                                        btnValue = 'ORDER NOW'
                                    />
                                </div>
                            </div>
                    </div>
                </div>
                <div className = 'product product2'>
                    <div className = 'container'>
                            <div className = 'product-content .description-set'>
                                <div ref = {img2ContRef} className = "image-container">
                                    <img alt = 'productImg' src = {require('../../../assests/images/prod2.png')}/> 
                                </div>
                                <DescriptionSet
                                    title = 'Crossbag Season'
                                    detail = 'A few new crossbags for  ikeeping documents, accessories and other stuffs have been added to the collection. We’re sure you’d love them.'
                                    btnValue = 'SHOP NOW'
                                    btnLinkTo = '/shop/collections/Crossbody bags'
                                />
                                <div className = ' pc description-set'>
                                    <DescriptionSet
                                        title = 'Crossbag Season'
                                        detail = 'A few new crossbags for  ikeeping documents, accessories and other stuffs have been added to the collection. We’re sure you’d love them.'
                                        btnValue = 'SHOP NOW'
                                        btnLinkTo = '/shop/collections/Crossbody bags'
                                    />
                                </div>
                                
                            </div>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}

export default SmallerProductsSection;