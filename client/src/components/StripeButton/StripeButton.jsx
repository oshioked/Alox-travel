import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutBtn = props =>{
    const {price} = props;
    const stripeKey = 'pk_test_QOhWjhjQaBSOYl33QeYr8dn300s8WTvdFa';
    const onToken = (token) =>{
        axios({
            url: '/payment',
            method: 'post',
            data: {
                amount: price,
                token
            }
        })
    }

    return(
        <StripeCheckout
            name = "Alox"
            description = {`Your total price is $${price}`}
            // image = 'https://i.ibb.co/XzcwL5s/black-shearling.png'
            ComponentClass = 'stripe-pop-up'
            label="Buy the Thing" // text inside the Stripe button
            panelLabel="Give Money" // prepended to the amount in the bottom pay button
            amount={1000000} // cents
            currency="USD"
            stripeKey = {stripeKey}
            email="info@vidhub.co"
            // Note: Enabling either address option will give the user the ability to
            // fill out both. Addresses are sent as a second parameter in the token callback.
            shippingAddress
            billingAddress={false}
            // Note: enabling both zipCode checks and billing or shipping address will
            // cause zipCheck to be pulled from billing address (set to shipping if none provided).
            zipCode={false}
            alipay // accept Alipay (default false)
            bitcoin // accept Bitcoins (default false)
            allowRememberMe // "Remember Me" option (default true)
            token={onToken} // submit callback
            // opened={this.onOpened} // called when the checkout popin is opened (no IE6/7)
            // closed={this.onClosed} // called when the checkout popin is closed (no IE6/7)
            // Note: `reconfigureOnUpdate` should be set to true IFF, for some reason
            // you are using multiple stripe keys
            // reconfigureOnUpdate={false}
            // Note: you can change the event to `onTouchTap`, `onClick`, `onTouchStart`
            // useful if you're using React-Tap-Event-Plugin
            // triggerEvent="onTouchTap"
        />
    )
}

export default StripeCheckoutBtn;