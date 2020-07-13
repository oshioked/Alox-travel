import  React, { useState, useContext } from 'react';
import './SearchBox.scss';
import { useHistory} from 'react-router-dom';
import { ThemeContext } from '../../contextProviders/ThemeProvider/ThemeProvider';

import {useDispatch, useSelector} from 'react-redux';
import {ToggleSideMenuDisplay} from '../../Redux/SideMenu/sideMenu.actions';

const SearchBox = () =>{
    const  {currentTheme } = useContext(ThemeContext)
    const history = useHistory();
    const [input, setInput] = useState('');

    const sideMenuDisplay = useSelector(state => state.sideMenu.display);

    const dispatch = useDispatch();
    const toggleSideMenuDisplay = () =>{
        dispatch(ToggleSideMenuDisplay())
    }

    
    const onChangeHandler = (event) =>{
        setInput(event.target.value);
    }

    const keyPressHandler = (event) =>{
        if(event.keyCode === 13){
            onSubmit();
        }
    }

    const onSubmit = () =>{
        if(input.length !== 0){
          history.push(`/shop/search/${input}`);
          setInput('');

          if(sideMenuDisplay){
              toggleSideMenuDisplay();
          }
        }
    }

    return(
        <input 
            className = 'search-box' 
            theme = {currentTheme} 
            onChange = {onChangeHandler} 
            onKeyDown = {keyPressHandler}  
            value = {input} 
            type = 'text' 
            placeholder = 'Search'
        />
    )
}



export default SearchBox;