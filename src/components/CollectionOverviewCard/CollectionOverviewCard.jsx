import React from 'react';
import './CollectionOverviewCard.scss';
import SecButton from '../SecButton/SecButton';

const CollectionOverviewCard = ({imgSrc, btnLinkTo, collectionName}) =>{
    return(
        <div className = 'collection-overview-card'>
            <div className = 'image-darkener'/>
            <img src = {imgSrc} alt = 'collection-card'/>
            <div className = 'collection-detail-block'>
                <div className = 'detail-block-container'>
                    <h1>{collectionName}</h1>
                    <SecButton
                        value = 'SHOP NOW'
                        style = {{border: '2px solid white'}}
                        linkTo = {btnLinkTo}
                    />
                </div>
            </div>
        </div>
    )
}

export default CollectionOverviewCard;