import React, { useContext } from 'react';
import './MainProductSection.scss';
import {ThemeContext} from '../../../contextProviders/ThemeProvider/ThemeProvider';
import SecButton from '../../../components/SecButton/SecButton';
import {connect} from 'react-redux';
import {AddItemToCart} from '../../../Redux/Cart/cart.actions.js'

const MainProductSection = ({product, addItemToCart}) =>{


    const {currentTheme} = useContext(ThemeContext)
    return(
        <div className = 'main-product-section'>
            <div className = 'image-container'>
                <img src = {product.imgSrc} alt = 'product'/>
            </div>
            <div className = 'product-detail-section'>
                <div className = 'block1'>
                    <h3>{product.name}</h3>
                    <p>{product.category}</p>
                    <p>{product.highPrice}</p>
                    <p>{product.price}<span>{product.discount}</span></p>
                </div>
                <div className = 'block2'>
                    <p>{product.description}</p>
                    <p>Read more</p>
                </div>
            </div>
            <div className = 'properties-selection-section'>
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
                <SecButton
                    value = 'SAVE TO WISHLIST'
                />
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) =>({
    addItemToCart: (item) => dispatch(AddItemToCart(item))
})
export default connect(null, mapDispatchToProps)(MainProductSection);