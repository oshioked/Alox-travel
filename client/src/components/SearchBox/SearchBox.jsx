import  React, { useState, useContext } from 'react';
import './SearchBox.scss';
import { useHistory} from 'react-router-dom';
import { ThemeContext } from '../../contextProviders/ThemeProvider/ThemeProvider';

import {connect} from 'react-redux';
import {ToggleSideMenuDisplay} from '../../Redux/SideMenu/sideMenu.actions';

const SearchBox = ({ToggleSideMenuDisplay, sideMenuDisplay}) =>{
    const  {currentTheme } = useContext(ThemeContext)
    const history = useHistory();
    const [input, setInput] = useState('');

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
              ToggleSideMenuDisplay();
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

const mapDispatchToProps = (dispatch) =>({
    ToggleSideMenuDisplay: () => dispatch(ToggleSideMenuDisplay())
})

const mapStateToProps = (state) =>({
    sideMenuDisplay: state.sideMenu.display
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);