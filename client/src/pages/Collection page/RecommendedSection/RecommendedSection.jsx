import React from 'react';
import './RecommendedSection.scss';
import RecommendedProductCard from '../../../components/RecommendedProductCard/RecommendedProductCard';
import products from '../../../utilities/Database/products';


const RecommendedSection = () =>{
    
    const recommendedProducts = products.filter((product, i) =>
        product.recommended
    )


    return(
        <div className = 'recommended-section shade2bg'>
            <div className = 'section-header'>
                <h3>RECOMMENDED</h3>
            </div>
            <div className = 'recommended-product-row'>
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