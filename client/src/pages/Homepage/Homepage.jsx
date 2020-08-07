import React, { useRef, useEffect, useState } from 'react';
import HomeHeader from './HomeHeader/HomeHeader';
import Welcome1 from './Welcome1/Welcome1';
import Welcome2 from './Welcome2/Welcome2';
import BrandSection from './BrandSection/BrandSection';
import GallerySection from './GallerySection/GallerySection';
import PlasticFreeSection from './PlasticFreeSection/PlasticFreeSection';
import SmallerProductsSection from './SmallerProductsSection/SmallerProductsSection';

import './Homepage.css';
import Footer from '../../components/Footer/Footer';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';


const Homepage = () =>{
    const homeRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true)

    const imagesLoaded = () =>{
        const allImages = homeRef.current.querySelectorAll('img');
        const lastImg = allImages[allImages.length - 1];
        for (const img of allImages) {
            if (!img.complete) {
                setTimeout(()=>{
                    setIsLoading(false)
                }, 3000)
                
                return false;
            }
        }
    }

    useEffect(()=>{
        if(homeRef.current)console.log(homeRef.current.querySelectorAll('img'));
        imagesLoaded();
    }, [])
    
   

    return(
        <div ref = {homeRef} className = 'Homepage'>
            <HomeHeader/>
            <LoadingScreen display = {isLoading}/>
            <Welcome1/>
            <Welcome2/>
            <SmallerProductsSection/>
            <BrandSection />
            <GallerySection/>
            <PlasticFreeSection/>
            <Footer/>
        </div>
    )
}

export default Homepage;