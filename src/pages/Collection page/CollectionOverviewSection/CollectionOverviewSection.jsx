import React, { useRef } from 'react';
import './CollectionOverviewSection.scss';
import CollectionOverviewCard from '../../../components/CollectionOverviewCard/CollectionOverviewCard';
import { useEffect } from 'react';
import gsap from 'gsap';

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

    const sectionRef = useRef(null);

    useEffect(()=>{
        gsap.from(sectionRef.current, {
            
            autoAlpha: 0,
            delay: 1.9,
            duration: 1.5
        })
    }, [])
    return(
        <div ref = {sectionRef} className = 'collection-overview-section'>
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
