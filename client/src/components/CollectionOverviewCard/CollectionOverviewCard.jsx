import React from 'react';
import './CollectionOverviewCard.scss';
import SecButton from '../SecButton/SecButton';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CollectionOverviewCard = ({imgSrc, btnLinkTo, collectionName}) =>{
    const cardRef = useRef(null);
    

    useEffect(()=>{
        const imgRef = cardRef.current.children[1];
        const detailsRef = imgRef.nextSibling.children[0].children;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: cardRef.current
            }
        });
        tl
            .from(imgRef, {
                scale: 1.15,
                duration: 1.5
            })
            .from(detailsRef, {
                autoAlpha: 0,
                duration: .5,
            })

    }, [])
    return(
        <div ref = {cardRef} className = 'collection-overview-card'>
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