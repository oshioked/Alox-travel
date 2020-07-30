import React, { useRef } from 'react';
import './RecommendedSection.scss';
import RecommendedProductCard from '../../../components/RecommendedProductCard/RecommendedProductCard';
import products from '../../../utilities/Database/products';
import gsap from 'gsap';
import { useEffect } from 'react';


const RecommendedSection = () =>{
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const rowRef = useRef(null);
    
    const recommendedProducts = products.filter((product, i) =>
        product.recommended
    )

    useEffect(()=>{
        const tl = gsap.timeline();
        tl
            .from(sectionRef.current, {
                transition: '0s',
                autoAlpha: 0,
                duration: .5
            })
            .from(titleRef.current, {
                autoAlpha: 0,
                xPercent: 30,
                duration: .7
            })
            .from(rowRef.current, {
                autoAlpha: 0,
                x: 100,
                duration: .8
            })
    }, [])

    return(
        <div ref = {sectionRef} className = 'recommended-section shade2bg'>
            <div className = 'section-header'>
                <h3 ref = {titleRef}>RECOMMENDED PRODUCTS</h3>
            </div>
            <div ref = {rowRef} className = 'recommended-product-row'>
                {
                    recommendedProducts.map((product, i) =>
                        <RecommendedProductCard product = {product}/> 
                    )
                }
                
            </div>
        </div>
    )
}


export default RecommendedSection;