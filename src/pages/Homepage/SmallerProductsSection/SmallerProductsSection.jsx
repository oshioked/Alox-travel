import React, {useRef, useEffect} from 'react';
import './SmallerProductsSection.scss';
import gsap from 'gsap';
import DescriptionSet from '../../../components/DescriptionSet/DescriptionSet';

const SmallerProductsSection = () =>{
    const img1ContRef = useRef(null);
    const img2ContRef = useRef(null);

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
    })
    return(
        <div className = 'smaller-products-section'>
            <div className = 'section-container container'>
                <div className = 'product product1'>
                    <div className = 'container'>
                            <div className = 'product-content'>
                                <div ref = {img1ContRef} className = 'image-container'>
                                    <img alt = 'productImg' src = {require('./images/prod1.png')}/>
                                </div>
                                <DescriptionSet 
                                    title = 'The Travel Legend'
                                    detail = 'A legendary travel bag which was previously out of stock returns, by request. Many customers asked us to bring it back; we listened, upgraded it, and relaunched it.'
                                    btnValue = 'ORDER NOW'   
                                    btnLinkTo = '/product/travel legend'                     
                                />
                                <div className = 'description-set pc'>
                                    <DescriptionSet
                                        title = 'The Travel Legend'
                                        detail = 'A legendary travel bag which was previously out of stock returns, by request. Many customers asked us to bring it back; we listened, upgraded it, and relaunched it.'
                                        btnValue = 'ORDER NOW'
                                        btnLinkTo = '/product/travel legend'
                                    />
                                </div>
                            </div>
                    </div>
                </div>
                <div className = 'product product2'>
                    <div className = 'container'>
                            <div className = 'product-content .description-set'>
                                <div ref = {img2ContRef} className = "image-container">
                                    <img alt = 'productImg' src = {require('./images/prod2.png')}/> 
                                </div>
                                <DescriptionSet
                                    title = 'Crossbag Season'
                                    detail = 'A few new crossbags for  ikeeping documents, accessories and other stuffs have been added to the collection. We’re sure you’d love them.'
                                    btnValue = 'SHOP NOW'
                                    btnLinkTo = '/shop/collections/crossbags'
                                />
                                <div className = ' pc description-set'>
                                    <DescriptionSet
                                        title = 'Crossbag Season'
                                        detail = 'A few new crossbags for  ikeeping documents, accessories and other stuffs have been added to the collection. We’re sure you’d love them.'
                                        btnValue = 'SHOP NOW'
                                        btnLinkTo = '/shop/collections/crossbags'
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