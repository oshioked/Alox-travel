import React from 'react';
import './ShopMainSection.scss';

import products from '../../../utilities/Database/products';
import ShopProductCard from '../../../components/ShopProductCard/ShopProductCard';
import CollectionOverviewCard from '../../../components/CollectionOverviewCard/CollectionOverviewCard'
const ShopMainSection = () =>{
    return(
        <div className = 'shop-main-section'>
            <div className = 'container'>
                <div className = 'section-head'>

                </div>

                <div className = 'gallery-container'>
                    <div className = 'products-gallery'>
                        {
                            products.map((product, i) =>(
                                <ShopProductCard product ={product}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopMainSection;