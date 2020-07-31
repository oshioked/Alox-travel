import React, {useEffect, useState, useRef} from 'react';
import './ShopProductCard.scss';
import {Link, useHistory} from 'react-router-dom';
import gsap from 'gsap';
import { useContext } from 'react';
import { ThemeContext } from '../../contextProviders/ThemeProvider/ThemeProvider';

const ShopProductCard = ({product}) =>{
    const {push} = useHistory();
    const transBgRef = useRef(null);
    const imgRef = useRef(null);
    const detailsRef = useRef(null);
    const [clicked, setClicked] = useState(false);
    const {currentTheme} = useContext(ThemeContext);

    const onClick = async () =>{
        if(clicked)return;

        setClicked(true);

        document.body.style.overflow = 'hidden'

        const imgBoundingBox = imgRef.current.getBoundingClientRect();
        const navBarBoundingBox = document.querySelector('.main-nav-bar').getBoundingClientRect();
        
        const tl = gsap.timeline();
        await tl
            .set(imgRef.current.parentElement, {
                zIndex: 10,
            })
            .to(imgRef.current, {
                x: window.innerWidth < 768 ? -imgBoundingBox.x : -(imgBoundingBox.x - (window.innerWidth * .08))  ,
                y: -(imgBoundingBox.y - navBarBoundingBox.height),
                // height: (window.innerHeight - navBarBoundingBox.height),
                width: window.innerWidth < 768 ? window.innerWidth : (window.innerWidth * .84 * .5) ,
                maxWidth: (window.innerHeight * 0.5),
                duration: 1
            })
            .set(transBgRef.current, {
                width: window.innerWidth,
                zIndex: 1,
                height: window.innerHeight
            }, '0')
            .fromTo(transBgRef.current, {
                background: 'none',
                duration: 1
            }, {
                background: currentTheme === 'dark' ? '#191F29' : 'white',
                duration:1
            },'0')
            .set(detailsRef.current, {
                autoAlpha: 0,
            }, '0')
        document.body.style.overflow = null
        setClicked(false)
        push(`/product/${product.name}`);
        window.scrollTo(0, 0)
    }
    

    useEffect(()=>{
        


    }, [])
    return(
        <div>
        <Link onClick = {onClick} >
            <div className = 'shop-product-card'>
                
                <div className = 'image-container'>
                    <div className = "image-inner">
                        <img  ref = {imgRef} src = {product.imgSrc} alt = {product.name}/>
                    </div>
                    <div ref = {transBgRef} className  = "trans-background"/>
                </div>
                <div ref = {detailsRef} className = 'card-details'>
                        <p className = 'product-name'>{product.name}</p>
                        <p className = 'product-category'>{product.category}</p>
                        <p className = 'product-price'>{product.price}</p>
                </div>  
            </div>
        </Link>
        </div>
        
    )
}

export default ShopProductCard;