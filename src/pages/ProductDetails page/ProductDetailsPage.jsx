import React from 'react';
import './ProductDetailsPage.scss';

import products from '../../utilities/Database/products.js';
import MainProductSection from './MainProductSection/MainProductSection';
import SimilarProductsSection from './SimilarProductsSection/SimilarProductsSection';
import TopReturnBar from '../../components/TopReturnBar/TopReturnBar';



const ProductDetailsPage = ({match}) =>{

    console.log(match.params.id);

    const product = products.find((product, i) =>(
        product.name === match.params.id
    ))

    console.log(product)

    return(
        <div className = 'product-details-page'>
            <TopReturnBar/>
            <MainProductSection product = {product}/>
            <SimilarProductsSection product = {product}/>
        </div>
    )
}

export default ProductDetailsPage;