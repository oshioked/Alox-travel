import React, { useEffect } from 'react';
import './ShopPage.scss';
import ShopInfoBar from './ShopInfoBar/ShopInfoBar';
import ShopSideSection from './ShopSideSection/ShopSideSection';
import ShopMainSection from './ShopMainSection/ShopMainSection';
import {connect} from 'react-redux';
import {fetchProductsByCollection, fetchProductsBySearch} from '../../Redux/Shop/shop.actions'


const ShopPage = ({match, fetchProductsByCollection, fetchProductsBySearch, products, isFetching}) =>{


    useEffect(()=>{
        const {method, key} = match.params;
        if(method === 'collections'){
            fetchProductsByCollection(key)
        }else if(method === 'search'){
            fetchProductsBySearch(key)
        }
    }, [])


    return(
        <div className = 'shop-page'>
            <div className = 'shop-page-container'>
                <ShopInfoBar/>
                <div className = 'body-container container'>
                    <ShopSideSection/>
                    <ShopMainSection/>
                </div>
            </div>
            
        </div>
    )
}

const mapStateToProps = (state) =>({
    isFetching: state.Shop.isFetching,
    products: state.Shop.shopProducts
})

const mapDispatchToProps = (dispatch) =>({
    fetchProductsByCollection: (CollectionKey) => dispatch(fetchProductsByCollection(CollectionKey)),
    fetchProductsBySearch: (SearchKey) => dispatch(fetchProductsBySearch(SearchKey))
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);