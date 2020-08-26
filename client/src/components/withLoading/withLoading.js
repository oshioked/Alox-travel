import React, { useEffect, useRef, useState } from 'react'
import OnImagesLoaded from 'react-on-images-loaded';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

const withLoading = (Page) => (images) =>{
    const pageRef = useRef(null);
    const [loaded, setLoaded] = useState(false);
    const [mountPage, setMountPage] = useState(true)

    

    const onLoaded = () =>{
        setTimeout(()=>{
            setLoaded(true)
        }, 2000)
    }
    let Content = !mountPage ? ()=><div/> : Page;

    useEffect(() => {
        if(loaded){
            setMountPage(false)
            setTimeout(()=>{
                setMountPage(true)
            }, 400)            
        }
    }, [loaded])

    return(
        <OnImagesLoaded
            onLoaded = {onLoaded}
            onTimeout = {onLoaded}
            timeout = {10000}
        >
            <div ref = {pageRef}>
                <LoadingScreen display = {!loaded}/>
                <Content loaded = {loaded}/>
            </div>
        </OnImagesLoaded>
    )
}

export default withLoading;