import React, { useEffect, useState } from 'react';
import './ShopPage.scss';
import ShopInfoBar from './ShopInfoBar/ShopInfoBar';
import ShopSideSection from './ShopSideSection/ShopSideSection';
import ShopMainSection from './ShopMainSection/ShopMainSection';
import products from '../../utilities/Database/products';
import {useParams} from 'react-router-dom';
import { useCallback } from 'react';
import gsap from 'gsap';
import { useRef } from 'react';
import Navbar from '../../components/Navbar/Navbar';


const ShopPage = () =>{
    const [catProducts, setCatProducts] = useState([]);

    const [isLoading, setIsLoading] = useState(true);
    const pageRef = useRef(null);
    const params = useParams();
    const method = params.method;
    const key = params.key;

    useEffect(()=>{
        gsap.to(pageRef.current, {
            autoAlpha: 1,
            duration: 1.3,
            ease: 'power3.in'
        })
    }, [])

    const fetchProduct = useCallback(() =>{
        setIsLoading(true);
        if(method === 'collections'){
            const categoryProducts = products.filter(prod => prod.category.includes(key.toLowerCase()));
            setCatProducts(categoryProducts);            
        }else if(method === 'search'){
            const searchResults = products.filter(prod => prod.name.toLowerCase().includes(key.toLowerCase()));
            setCatProducts(searchResults)
        }

        setIsLoading(false)
    }, [key, method] )
    
    useEffect(()=>{
        fetchProduct();
    }, [fetchProduct])

    return(
        <div ref = {pageRef} className = 'shop-page'>
            <Navbar/>
            <div className = 'shop-page-container'>
                <ShopInfoBar/>
                <div className = 'body-container container'>
                    <ShopSideSection activeCategory = {key}/>
                    <ShopMainSection isLoading = {isLoading} method = {method} entryKey = {key} products = {catProducts}/>
                </div>
            </div>
        </div>
    )
}

export default ShopPage;