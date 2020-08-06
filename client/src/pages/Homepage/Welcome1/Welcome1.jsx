import React, { useContext, useRef, useEffect } from 'react';
import './Welcome1.scss';
import DescriptionSet from '../../../components/DescriptionSet/DescriptionSet';
import { ThemeContext } from '../../../contextProviders/ThemeProvider/ThemeProvider';
import gsap from 'gsap';

const Welcome1 = () =>{
    const imgRef = useRef(null);

    useEffect(()=>{
        gsap.from(imgRef.current, {
        scrollTrigger: {
            trigger: imgRef.current,
            start: '30% bottom',
        },
        duration: 1,
        opacity: 0,
        xPercent: 80,

        })
    }, [])

    const {currentTheme} = useContext(ThemeContext);

    return(
        <div className = 'welcome1'>
            <div className ='container'>
                <div className = 'content-holder'>
                    <div theme = {currentTheme} className='welcome1-content shade2bg'>
                        <div className = 'contain'>
                            <div className = 'description-set'>
                                <DescriptionSet
                                    title = 'The New Simple Fire Backpack'
                                    detail = 'An extraordinary backpack is on its way. There’s no need to carry a full luggage when you’re travelling for only a few days.'
                                    btnValue = 'SHOP NOW'
                                    btnLinkTo = '/shop/collections/Backpacks'
                                />
                            </div>
                            <img ref = {imgRef} alt = 'product-bag' src = {require('./welcome1Product.png')}/> 
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Welcome1;