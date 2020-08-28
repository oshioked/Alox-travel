import React from 'react';
import './CheckoutPage.scss';
import { useSelector, useDispatch } from 'react-redux';
import { clearItem, AddItemToCart, reduceItemQty } from '../../Redux/Cart/cart.actions';
import StripeCheckoutBtn from '../../components/StripeButton/StripeButton';
import Navbar from '../../components/Navbar/Navbar';
import { useState } from 'react';
import { useEffect } from 'react';

const ItemRow = ({imageUrl, title, quantity, price, id}) =>{

    const dispatch = useDispatch();
    const clearItemFromCart = () =>{
        dispatch(clearItem(id))
    }

    const increaseItemQty = () =>{
        dispatch(AddItemToCart({id}))
    }

    const reduceQty = () =>{
        dispatch(reduceItemQty(id))
    }

    return(
        <div className = 'checkout-item-row'>
            <div className = 'item-image-container'>
                <img src = {imageUrl} alt = {title}/>
            </div>
            <span className = 'item-title'>{title}</span>
            <span className = 'item-qty-indicator'>
                <div onClick = {reduceQty} style = {{cursor: 'pointer'}}>❮</div>
                <span style = {{margin: '0px 5px'}}>{quantity}</span>
                <div onClick = {increaseItemQty} style = {{cursor: 'pointer'}}>❯</div>
            </span>
            <span className = 'item-price'>{price}</span>
            <div onClick = {clearItemFromCart} className = 'item-remove-button'>✕</div>
        </div>
    )
}

const CheckoutPage = () =>{
    const cart = useSelector(state => state.Cart);
    const {cartItems} = cart;
    const [totalPrice, setTotalPrice] = useState(null)
    useEffect(()=>{
        if(cartItems.length){
            const prices = cartItems.map(item => item.price).reduce((a, b)=> a + b);
            setTotalPrice(prices)
        }
    }, [cartItems])

    return(
        <>
        <Navbar/>
        <div className = 'checkout-page'>
            <div class="title-heading">
                <div class="title"><span>Product</span></div>
                <div class="title"><span>Description</span></div>
                <div class="title"><span>Quantity</span></div>
                <div class="title"><span>Price</span></div>
                <div class="title"><span>Remove</span></div>
            </div>
            {
                cartItems.map((item, i) =>(
                    <ItemRow
                        imageUrl = {item.imgSrc}
                        title = {item.name} 
                        quantity = {item.quantityInCart}
                        price = {item.price}
                        id = {item.id}
                    />
                ))
            }
            <div className = "checkout-button-container"> 
                <StripeCheckoutBtn price = {totalPrice}  />
            </div>
        </div>
        </>
    )
}

export default CheckoutPage;