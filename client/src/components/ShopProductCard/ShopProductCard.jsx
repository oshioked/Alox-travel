import React from 'react';
import './ShopProductCard.scss';
import {Link} from 'react-router-dom';

const ShopProductCard = ({product}) =>{
    return(
        <Link to = {`/product/${product.name}`} className = 'shop-product-card'>
            <img src = {product.imgSrc} alt = {product.name}/>
           <div className = 'card-details'>
                <p className = 'product-name'>{product.name}</p>
                <p className = 'product-category'>{product.category}</p>
                <p className = 'product-price'>{product.price}</p>
           </div> 
        </Link>
    )
}

export default ShopProductCard;