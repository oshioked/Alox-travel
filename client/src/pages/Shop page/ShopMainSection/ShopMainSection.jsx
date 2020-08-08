import React, {useContext} from 'react';
import './ShopMainSection.scss';

import ShopProductCard from '../../../components/ShopProductCard/ShopProductCard';
import {ThemeContext} from '../../../contextProviders/ThemeProvider/ThemeProvider';
import ShopSearchBox from '../../../components/ShopSearchBox/ShopSearchBox';


const ShopMainSection = ({isLoading, category, products}) =>{
    const {currentTheme} = useContext(ThemeContext)
    return(
        <div className = 'shop-main-section'>
            <div className = 'container'>
                <div className = 'mobile-section-head'>
                    <div className = 'search-box-container'>
                        <ShopSearchBox/>
                    </div>
                    <div className = 'cat-description'>
                        <h1>{category.toUpperCase()}</h1>
                        <p>Ullamco sunt quis qui eiusmod ea officia. Consectetur commodo ad ad tempor incididunt ut et nulla. Qui aute laboris veniam dolor ullamco cillum cupidatat do amet sunt est minim magna esse.</p>
                    </div>
                    <div className = 'sort-cat-section'>
                    <div className = 'cat-select-container'>
                            <h5>CATEGORY: </h5>
                            <select className = 'category-select'>
                                <option>BACKPACKS</option>
                                <option>LUGGAGES</option>
                                <option>CROSSBODY BAGS</option>
                            </select>
                        </div>
                            <div >
                                <select className = 'sort-select' style = {{border: `1px solid ${currentTheme === 'dark' ? 'white' : 'grey'}` }}>
                                    <option value = {null}>Sort By</option>
                                    <option value = 'priceDesc'>Price (High to Low)</option>
                                    <option value = 'priceAsc'>Price (Low to High)</option>
                                </select>
                            </div>
                    </div>
                </div>
                <div className = 'gallery-container'>
                    <div className = 'products-gallery'>
                        {
                            !isLoading ?
                            products.filter(product => !product.recommended).map((product, i) =>(
                                <ShopProductCard key = {i} product ={product}/>
                            ))
                            : <h1>Loading</h1>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopMainSection;