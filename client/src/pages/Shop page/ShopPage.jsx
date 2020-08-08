import React, { useEffect, useState } from 'react';
import './ShopPage.scss';
import ShopInfoBar from './ShopInfoBar/ShopInfoBar';
import ShopSideSection from './ShopSideSection/ShopSideSection';
import ShopMainSection from './ShopMainSection/ShopMainSection';
import products from '../../utilities/Database/products';
import {useLocation} from 'react-router-dom';
import { useCallback } from 'react';
import withLoading from '../../components/withLoading/withLoading';


const ShopPage = () =>{
    const [catProducts, setCatProducts] = useState([]);

    const [isLoading, setIsLoading] = useState(true)
    const {pathname} = useLocation();
    const pathStringArr = pathname.split('/');
    const categoryName = pathname.split('/')[pathStringArr.length -1];

    const fetchProduct = useCallback(() =>{
        setIsLoading(true);
        const categoryProducts = products.filter(prod => prod.category.includes(categoryName.toLowerCase()));
        setCatProducts(categoryProducts);
        setIsLoading(false)
    }, [categoryName] )
    
    useEffect(()=>{
        fetchProduct();
    }, [fetchProduct])
    console.log(catProducts)

    return(
        <div className = 'shop-page'>
            <div className = 'shop-page-container'>
                <ShopInfoBar/>
                <div className = 'body-container container'>
                    <ShopSideSection activeCategory = {categoryName}/>
                    <ShopMainSection isLoading = {isLoading} category = {categoryName} products = {catProducts}/>
                </div>
            </div>
        </div>
    )
}

export default withLoading(ShopPage);