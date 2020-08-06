import React, {useEffect, useRef} from 'react';
import './Welcome2.scss';
import gsap from 'gsap';
import DescriptionSet from '../../../components/DescriptionSet/DescriptionSet';

const Welcome2 = () =>{
    const imageBgRef = useRef(null);

    useEffect(()=>{
        gsap.to(imageBgRef.current, {
            scrollTrigger: {
                trigger: imageBgRef.current,
                scrub: true
            },
            scale: 1.5
        })
    }, [])

    const prodName = 'The Self Adjusting Watch';

    return(
        <div className = 'welcome2'>
            <div ref = {imageBgRef} className = 'bg-image-container'/>
            <div className = 'image-darkener' />
            <div className = 'container'>
                <div className = 'welcome2-content'>
                    <div className = 'description-set'>
                        <DescriptionSet
                            title = 'The Self-adjusting Watch.'
                            btnLinkTo = {`/product/${prodName}`}
                            detail = 'Where ever you travel to, whatever time zone, using our upgraded GPS system, this watch automatically change time zone.'
                            btnValue = 'PREORDER NOW'
                        />                    
                    </div>
                </div>  
            </div>

        </div> 
        
    )
}

export default Welcome2;