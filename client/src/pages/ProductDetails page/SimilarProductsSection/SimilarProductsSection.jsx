import React from 'react';
import products from '../../../utilities/Database/products';
import ShopProductCard from '../../../components/ShopProductCard/ShopProductCard';
import './SimilarProductsSection.scss';

const SimilarProductsSection = ({product}) =>{

    const similarProducts = products.filter((prod, i)=> 
        prod.category === product.category && 
        prod.name !== product.name
    ).filter((results, i) => i < 4 );

    console.log(similarProducts);

    return(
        <div className = 'similar-products-section'>
            <div className = 'container'>
                {
                    similarProducts.map((product, i) => 
                        <ShopProductCard product = {product} />
                    )
                }
            </div>
            
            
        </div>
    )
}

export default SimilarProductsSection;