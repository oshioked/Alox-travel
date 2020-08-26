import React from 'react';
import './RecommendedProductCard.scss';

const RecommendedProductCard = ({product}) =>{
    return(
        <div className = 'recommended-product-card shade1bg'>
            <div className = 'image-container'>
                <img alt = 'product' src = {product.imgSrc} />
            </div>
            <div className = 'name-container'>
               <p>{product.name.toUpperCase()}</p> 
            </div>
            
        </div>
    )  
}

export default RecommendedProductCard; 