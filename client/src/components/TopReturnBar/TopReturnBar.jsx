import React from 'react'
import {useHistory} from 'react-router-dom'
import './TopReturnBar.scss';

const TopReturnBar = () =>{
    const history = useHistory()
    return(
        <div className = 'top-return-bar shade2bg' >
            <p onClick = {()=>{
                history.goBack()
            }}> Return</p>
        </div>
    )
}

export default TopReturnBar;