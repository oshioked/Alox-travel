import {ShopActionTypes} from './shop.types';

export const fetchProductsByCollection = (CollectionKey) => (dispatch) =>{
    dispatch({type: ShopActionTypes.FETCH_PRODUCTS_START});
    fetch(`http://localhost:5000/products/${CollectionKey}`, {
        method: 'get'
    })
    .then((response) => {
        if(response.status === 200 ){
            return response.json();
        }else{
            throw new Error('error fetching products')
        }
    })
    .then(products =>{
        dispatch({type: ShopActionTypes.FETCH_PRODUCTS_SUCCESS, payload: products})
    })
    .catch(error =>{
        dispatch({type: ShopActionTypes.FETCH_PRODUCTS_FAILURE, payload: error})
    })
}

export const fetchProductsBySearch = (SearchKey) =>(dispatch)=>{
    dispatch({type: ShopActionTypes.FETCH_PRODUCTS_START});
    fetch(`http://localhost:5000/products/search/${SearchKey}`, {
        method: 'get'
    })
    .then((response) => {
        if(response.status === 200){
            return response.json()
        }else{
            throw new Error('error fetching products')
        }
    })
    .then(products =>{
        dispatch({type: ShopActionTypes.FETCH_PRODUCTS_SUCCESS, payload: products})
    })
    .catch(error =>{
        dispatch({type: ShopActionTypes.FETCH_PRODUCTS_FAILURE, payload: error})
    })
}
