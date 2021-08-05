import React from 'react';
import './GallerySection.scss';
import { useRef } from 'react';
import { useEffect } from 'react';
import gsap from 'gsap';

export const posts = [
    {
        user: 'User1',
        picture: require('../../../assests/images/homegallery/aloxgallery1.png'),
        caption: ''
    },
    {
        user: 'User2',
        picture: require('../../../assests/images/homegallery/aloxgallery2.png'),
        caption: ''
    },
    {
        user: 'User3',
        picture: require('../../../assests/images/homegallery/Aloxgallery3.png'),
        caption: ''
    },
    {
        user: 'User4',
        picture: require('../../../assests/images/homegallery/Aloxgallery4.png'),
        caption: ''
    },
    {
        user: 'User5',
        picture: require('../../../assests/images/homegallery/Aloxgallery5.png'),
        caption: ''
    },
    {
        user: 'User5',
        picture: require('../../../assests/images/homegallery/Aloxgallery5.png'),
        caption: ''
    }
];

const GallerySection = () =>{
    const slideRef = useRef(null);
    const titleRef = useRef(null);
    const paraRef = useRef(null);

    useEffect(()=>{
        const tl = gsap.timeline({scrollTrigger:{
            trigger: titleRef.current,
        },
        })
        
        tl
        .from([titleRef.current, paraRef.current], {
            opacity: 0,
            duration: 1,
            x: 50,
            stagger: .3
        })
        .from(slideRef.current, {
            x: 100,
            opacity: 0,
            duration: 1
        }, '-=.3')
        // tl.play();
    }, [])
    return(
        <div className = 'gallery-section shade2bg'>
            <div className = 'container'>
                <div className = 'gallery-section-content'>
                    <div className = 'titles'>
                        <h2 ref = {titleRef}>Alox travels along</h2>
                        <p ref = {paraRef}>See a gallery of photos of fellow happy buyers. To get your image featured use hashtag #Aloxtravelsalong</p>
                    </div>
                    <div className = 'gallery-row-container'>
                        <div className = ''>
                            <div ref = {slideRef} className = 'gallery-row'>
                                {
                                    posts.map((post, i) =>{
                                        return(
                                            <div key = {i} className = 'posts'>
                                                <img className = 'post-image' alt = 'postPic' src = {post.picture} />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        
                    </div> 
                </div>
            </div>
            

            
        </div>
    )
}

export default GallerySection;