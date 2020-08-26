import React, {useContext, useRef, useEffect} from 'react';
import './ShopMainSection.scss';
import gsap from 'gsap';
import ShopProductCard from '../../../components/ShopProductCard/ShopProductCard';
import {ThemeContext} from '../../../contextProviders/ThemeProvider/ThemeProvider';
import ShopSearchBox from '../../../components/ShopSearchBox/ShopSearchBox';
import { useHistory } from 'react-router-dom';

const categories = [
    {
        title: "New In",
    }, 
    {
        title: "Backpacks",
    }, 
    {
        title: "Crossbody bags",
    },
    {
        title: "Luggages",
    }, 
    {
        title: "Accessories",
    }
]

const ShopMainSection = ({isLoading, category, products}) =>{
    const galleryRef = useRef(null);
    const {currentTheme} = useContext(ThemeContext);
    const {push} = useHistory();

    useEffect(()=>{
        gsap.fromTo(galleryRef.current, {
            opacity: 0,
        }, {
            opacity: 1,
            delay: .2,
            ease: 'expo.inOut',
            duration: .7,
        })
    }, [products])
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
                            <select onChange = {(a)=>{push(`/shop/collections/${a.target.value}`)}} className = 'category-select'>
                                {
                                    categories.map((cat, i)=>(
                                        <option value = {cat.title} key = {i}>{cat.title}</option>
                                    ))
                                }
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
                    <div ref= {galleryRef} className = 'products-gallery'>
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