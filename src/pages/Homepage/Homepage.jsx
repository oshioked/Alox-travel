import React from 'react';
import HomeHeader from './HomeHeader/HomeHeader';
import Welcome1 from './Welcome1/Welcome1';
import Welcome2 from './Welcome2/Welcome2';
import BrandSection from './BrandSection/BrandSection';
import GallerySection from './GallerySection/GallerySection';
import PlasticFreeSection from './PlasticFreeSection/PlasticFreeSection';
import SmallerProductsSection from './SmallerProductsSection/SmallerProductsSection';

import './Homepage.css';


const Homepage = () =>{

    return(
        <div className = 'Homepage'>
            <HomeHeader/>
            <Welcome1/>
            <Welcome2/>
            <SmallerProductsSection/>
            <BrandSection />
            <GallerySection/>
            <PlasticFreeSection/>
        </div>
    )
}

export default Homepage;