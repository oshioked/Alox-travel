import React, {useEffect, useRef} from 'react';
import './DescriptionSet.scss';
import SecButton from '../SecButton/SecButton';
import gsap from 'gsap';

const DescriptionSet = ({title, btnLinkTo, detail, btnValue}) =>{
    const titleRef = useRef(null);
    const pRef = useRef(null);
    const btnContainerRef = useRef(null)

    useEffect(()=>{
        const btnRef = btnContainerRef.current.firstElementChild;
        const tl = gsap.timeline({scrollTrigger: {
            trigger: pRef.current,
            start: 'center bottom',
        }});
        
        tl
            .from(titleRef.current, {duration: 1, opacity: 0, yPercent: 130, ease: 'power3.easeOut'})
            .from(pRef.current, {duration: .7, opacity: 0, y: 45, ease: 'power3.easeOut'}, '-=.5')
            .from(btnRef, {duration: .5, opacity: 0, y: 45, ease: 'power3.easeOut'}, '-=.5')
    }, [])

    return(
        <React.Fragment>
            <div className = 'title-container'>
                <h1 ref = {titleRef} className = 'description-set-title'>{title}</h1>
            </div>
            <div className = "detail-container">
                <p ref = {pRef} className = 'description-set-detail'>{detail}</p>
            </div>
            <div ref = {btnContainerRef} className = "btn-container">
                <SecButton linkTo = {btnLinkTo} value = {btnValue}/>
            </div>
            
        </React.Fragment>
    )
}

export default DescriptionSet; 