import React from 'react';
import './ProductDetailsPage.scss';

import products from '../../utilities/Database/products.js';
import MainProductSection from './MainProductSection/MainProductSection';



const ProductDetailsPage = ({match}) =>{
    const product = products.find((product, i) =>(
        product.name === match.params.id
    ))

    return(
        <div className = 'product-details-page'>
            <MainProductSection product = {product}/>
        </div>
    )
}

export default ProductDetailsPage;