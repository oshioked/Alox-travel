import React, { useRef } from 'react';
import './CollectionOverviewSection.scss';
import CollectionOverviewCard from '../../../components/CollectionOverviewCard/CollectionOverviewCard';
import { useEffect } from 'react';
import gsap from 'gsap';

const collections = [
    {
        imageSrc: require('../../../utilities/Database/images/luggCat.jpeg'), 
        title: 'Luggages',
    },
    {
        imageSrc: require('../../../utilities/Database/images/backpackCat.jpeg'), 
        title: 'Backpacks',
    },
    {
        imageSrc: require('../../../assests/images/newInCat.png'), 
        title: 'New In',
    },
    {
        imageSrc: require('../../../assests/images/womenCat.jpeg'), 
        title: 'Crossbody bags',
    },
    {
        imageSrc: require('../../../assests/images/photo-1452421822248-d4c2b47f0c81.jpeg'), 
        title: 'Accessories',
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
                                btnLinkTo = {`/shop/collections/${collection.title}`}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default CollectionOverviewSection;
