import React from 'react';
import './ProductDetailsPage.scss';
import {useParams} from 'react-router-dom';
import products from '../../utilities/Database/products.js';
import MainProductSection from './MainProductSection/MainProductSection';
import Navbar from '../../components/Navbar/Navbar';



const ProductDetailsPage = ({match}) =>{
    const params = (useParams())
    const theProduct = products.filter((product, i) =>(
        product.name === params.id
    ))[0]

    return(
        <>
        <Navbar/>
        <div className = 'product-details-page'>
            <MainProductSection product = {theProduct}/>
        </div>
        </>
    )
}

export default ProductDetailsPage;