import React from 'react';
import {Link} from 'react-router-dom';
import './RecommendedProductCard.scss';

const RecommendedProductCard = ({product}) =>{
    return(
        <Link to = {`/product/${product.name}`} className = 'recommended-product-card shade1bg'>
            <div className = 'image-container'>
                <img alt = 'product' src = {product.imgSrc} />
            </div>
            <p>{product.ame}</p>
        </Link>
    )  
}

export default RecommendedProductCard; 