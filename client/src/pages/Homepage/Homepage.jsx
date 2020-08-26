import React, { useRef  } from 'react';
import HomeHeader from './HomeHeader/HomeHeader';
import Welcome1 from './Welcome1/Welcome1';
import Welcome2 from './Welcome2/Welcome2';
import BrandSection from './BrandSection/BrandSection';
import GallerySection from './GallerySection/GallerySection';
import PlasticFreeSection from './PlasticFreeSection/PlasticFreeSection';
import SmallerProductsSection from './SmallerProductsSection/SmallerProductsSection';

import './Homepage.css';
import Footer from '../../components/Footer/Footer';
import withLoading from '../../components/withLoading/withLoading';
import Navbar from '../../components/Navbar/Navbar';


const Homepage = ({loaded}) =>{
   
    return(
        <div className = 'Homepage'>
            <Navbar/>
            <HomeHeader loaded = {loaded}/>
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

export default withLoading(Homepage);