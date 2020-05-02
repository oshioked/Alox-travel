import {ShopActionTypes} from './shop.types';

const initialState = {
    shopProducts: [],
    isFetching: false,
    error: ''
}


export const Shop = (state = initialState, action) =>{
    switch(action.type){
        case ShopActionTypes.FETCH_PRODUCTS_START:
            return({
                ...state,
                isFetching: true
            })
        case ShopActionTypes.FETCH_PRODUCTS_SUCCESS:
            return({
                ...state,
                shopProducts: action.payload,
                isFetching: false
            })
        case ShopActionTypes.FETCH_PRODUCTS_FAILURE:
            return({
                ...state,
                isFetching: false,
                error: action.payload
            })
        default:
            return state
    }
}