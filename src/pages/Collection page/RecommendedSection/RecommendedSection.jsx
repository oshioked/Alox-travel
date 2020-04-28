import React from 'react';
import './RecommendedSection.scss';
import RecommendedProductCard from '../../../components/RecommendedProductCard/RecommendedProductCard';


const RecommendedSection = () =>{
    return(
        <div className = 'recommended-section shade2bg'>
            <div className = 'section-header'>
                <h3>RECOMMENDED</h3>
                <p>View All</p>
            </div>
            <div className = 'recommended-product-row'>
                <RecommendedProductCard 
                    imgSrc = {require('./images/cotton backpack.png')}
                    productName = 'NEW COTTON BACKPACK'
                />
                <RecommendedProductCard 
                    imgSrc = {require('./images/cotton backpack.png')}
                    productName = 'NEW COTTON BACKPACK'
                />
                <RecommendedProductCard 
                    imgSrc = {require('./images/cotton backpack.png')}
                    productName = 'NEW COTTON BACKPACK'
                />
                <RecommendedProductCard 
                    imgSrc = {require('./images/cotton backpack.png')}
                    productName = 'NEW COTTON BACKPACK'
                />
                <RecommendedProductCard 
                    imgSrc = {require('./images/cotton backpack.png')}
                    productName = 'NEW COTTON BACKPACK'
                />
            </div>
        </div>
    )
}


export default RecommendedSection;