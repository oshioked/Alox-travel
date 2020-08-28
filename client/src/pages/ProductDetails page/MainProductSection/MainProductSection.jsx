import React, { useContext, useRef, useEffect } from 'react';
import './MainProductSection.scss';
import {ThemeContext} from '../../../contextProviders/ThemeProvider/ThemeProvider';
import SecButton from '../../../components/SecButton/SecButton';
import {connect} from 'react-redux';
import gsap from 'gsap';
import {AddItemToCart} from '../../../Redux/Cart/cart.actions.js'

const MainProductSection = ({product, addItemToCart}) =>{
    const detailsRef = useRef(null);

    useEffect(()=>{
        const detailChildren = detailsRef.current.children;
        const btnsRef = detailsRef.current.nextSibling;
        const detailGrandchildren = [...detailChildren].map(a => a.children)
        const tl = gsap.timeline();
        tl
            .to(detailsRef.current,{
                autoAlpha: 1,
                duration: .5
            }, '-=.5')
            .from(detailGrandchildren, {
                autoAlpha: 0,
                y: 50,
                duration: .5,
                stagger: .2
            })
            .to(btnsRef, {
                autoAlpha: 1,
                duration: .5
            })
    }, [])


    const {currentTheme} = useContext(ThemeContext)
    return(
        <div className = 'main-product-section'>
            <div className = 'image-container'>
                <img src = {product.imgSrc} alt = 'product'/>
            </div>
            <div className = "details">
                <div ref = {detailsRef} className = 'product-detail-section'>
                    <div className = 'block1'>
                        <h3>{product.name}</h3>
                        <p>${product.price}</p>
                    </div>
                    <div className = 'block2'>
                        <p>{product.description}</p>
                        <p>Read more</p>
                    </div>
                </div>
                <div className = 'buttons-section'>
                    <SecButton
                        value = 'ADD TO CART'
                        style = {
                            currentTheme === 'dark'
                            ? {
                                background: 'white',
                                color: '#191F29'
                            } : {
                                background: '#191F29',
                                color: 'white'
                            }
                        }
                        onClick = {() => addItemToCart(product)}
                    />
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) =>({
    addItemToCart: (item) => dispatch(AddItemToCart(item))
})
export default connect(null, mapDispatchToProps)(MainProductSection);