import React from 'react';
import './RecommendedProductCard.scss';

const RecommendedProductCard = ({imgSrc, productName}) =>{
    return(
        <div className = 'recommended-product-card shade1bg'>
            <div className = 'image-container'>
                <img alt = 'product' src = {imgSrc} />
            </div>
            <p>{productName}</p>
        </div>
    )  
}

export default RecommendedProductCard; 