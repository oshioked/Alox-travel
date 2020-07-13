import React from 'react';
import './ShopProductCard.scss';
import {Link} from 'react-router-dom';

const ShopProductCard = ({product}) =>{
    return(
        <div>
        <Link to = {`/product/${product.name}`}>
            <div className = 'shop-product-card'>
                <div className = 'image-container'>
                    <img src = {product.imgSrc} alt = {product.name}/>
                </div>
                <div className = 'card-details'>
                        <p className = 'product-name'>{product.name}</p>
                        <p className = 'product-category'>{product.category}</p>
                        <p className = 'product-price'>{product.price}</p>
                </div>  
            </div>
        </Link>
        </div>
        
    )
}

export default ShopProductCard;