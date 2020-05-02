import React from 'react';
import './CollectionOverviewSection.scss';
import CollectionOverviewCard from '../../../components/CollectionOverviewCard/CollectionOverviewCard';

const CollectionOverviewSection = () =>{
    return(
        <div className = 'collection-overview-section'>
            <div className = 'container'>
                <div className = 'collection-overview-content'>
                    <CollectionOverviewCard 
                        imgSrc = {require('./images/AloxImg4 1.png')}
                        collectionName = 'Luggages'
                        btnLinkTo = '/shop/collections/luggages'
                    />
                    <CollectionOverviewCard 
                        imgSrc = {require('./images/AloxImg4 1.png')}
                        collectionName = 'Luggages'
                        btnLinkTo = '/shop/collections/luggages'
                    />
                    <CollectionOverviewCard 
                        imgSrc = {require('./images/AloxImg4 1.png')}
                        collectionName = 'Luggages'
                        btnLinkTo = '/shop/collections/luggages'
                    />
                    <CollectionOverviewCard 
                        imgSrc = {require('./images/AloxImg4 1.png')}
                        collectionName = 'Luggages'
                        btnLinkTo = '/shop/collections/luggages'
                    />
                    <CollectionOverviewCard 
                        imgSrc = {require('./images/AloxImg4 1.png')}
                        collectionName = 'Luggages'
                        btnLinkTo = '/shop/collections/luggages'
                    />
                    <CollectionOverviewCard 
                        imgSrc = {require('./images/AloxImg4 1.png')}
                        collectionName = 'Luggages'
                        btnLinkTo = '/shop/collections/luggages'
                    />
                </div>
            </div>
        </div>
    )
}

export default CollectionOverviewSection;
