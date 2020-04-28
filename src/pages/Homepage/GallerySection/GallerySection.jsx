import React from 'react';
import './GallerySection.scss';
import { posts } from './posts';

const GallerySection = () =>{
    return(
        <div 
            className = 'gallery-section shade2bg' 
        >
            <div className = 'container'>
                <div className = 'gallery-section-content'>
                    <div className = 'titles'>
                        <h2>Alox travels along</h2>
                        <p>See a gallery of photos of fellow happy buyers. to get your image featured use hashtag #Aloxtravelsalong</p>
                    </div>
                    <div className = 'gallery-row-container'>
                        <div className = ''>
                            <div className = 'gallery-row'>
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