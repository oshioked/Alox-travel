import React, {useContext} from 'react';
import './ShopMainSection.scss';

import products from '../../../utilities/Database/products';
import ShopProductCard from '../../../components/ShopProductCard/ShopProductCard';
import {ThemeContext} from '../../../contextProviders/ThemeProvider/ThemeProvider';
import ShopSearchBox from '../../../components/ShopSearchBox/ShopSearchBox';

const CategorySelect = () =>(
    <div className = 'cat-select-container'>
        <h5>CATEGORY: </h5>
        <select className = 'category-select'>
            <option>BACKPACKS</option>
            <option>LUGGAGES</option>
            <option>CROSSBODY BAGS</option>
        </select>
    </div>
)

const SortSelect = () =>{
    const {currentTheme} = useContext(ThemeContext)
    return(
    <div >
        <select className = 'sort-select' style = {{border: `1px solid ${currentTheme === 'dark' ? 'white' : 'grey'}` }}>
            <option value = {null}>Sort By</option>
            <option value = 'priceDesc'>Price (High to Low)</option>
            <option value = 'priceAsc'>Price (Low to High)</option>
        </select>
    </div>
)}

const CategoryDescription = () =>{
    return(
        <div className = 'cat-description'>
            <h1>BACKPACKS</h1>
            <p>Ullamco sunt quis qui eiusmod ea officia. Consectetur commodo ad ad tempor incididunt ut et nulla. Qui aute laboris veniam dolor ullamco cillum cupidatat do amet sunt est minim magna esse.</p>
        </div>
    )
}


const MobileSectionHead = () =>{
    return(
        <div className = 'mobile-section-head'>
            <div className = 'search-box-container'>
                <ShopSearchBox/>
            </div>
            <CategoryDescription/>
           <div className = 'sort-cat-section'>
               <CategorySelect/>
               <SortSelect/>
           </div>
        </div>
    )
}

const ShopMainSection = () =>{
    return(
        <div className = 'shop-main-section'>
            <div className = 'container'>
                <MobileSectionHead/>
                <div className = 'gallery-container'>
                    <div className = 'products-gallery'>
                        {
                            products.filter(product => !product.recommended).map((product, i) =>(
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