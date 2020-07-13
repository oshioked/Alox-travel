import React from 'react';
import './CollectionOverviewSection.scss';
import CollectionOverviewCard from '../../../components/CollectionOverviewCard/CollectionOverviewCard';

const collections = [
    {
        imageSrc: require('./images/AloxImg4 1.png'), 
        title: 'Luggages',
        linkTo: '/shop/collections/luggages'
    },
    {
        imageSrc: require('./images/AloxImg4 1.png'), 
        title: 'Luggages',
        linkTo: '/shop/collections/luggages'
    },
    {
        imageSrc: require('./images/AloxImg4 1.png'), 
        title: 'Luggages',
        linkTo: '/shop/collections/luggages'
    },
    {
        imageSrc: require('./images/AloxImg4 1.png'), 
        title: 'Luggages',
        linkTo: '/shop/collections/luggages'
    },
    {
        imageSrc: require('./images/AloxImg4 1.png'), 
        title: 'Luggages',
        linkTo: '/shop/collections/luggages'
    },
    {
        imageSrc: require('./images/AloxImg4 1.png'), 
        title: 'Luggages',
        linkTo: '/shop/collections/luggages'
    },
]
const CollectionOverviewSection = () =>{
    return(
        <div className = 'collection-overview-section'>
            <div className = 'container'>
                <div className = 'collection-overview-content'>
                    {
                        collections.map((collection, i) =>(
                            <CollectionOverviewCard
                                key = {i}
                                imgSrc = {collection.imageSrc}
                                collectionName = {collection.title}
                                btnLinkTo = {collection.linkTo}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default CollectionOverviewSection;
