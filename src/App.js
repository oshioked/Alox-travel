import React, {useContext} from 'react';


import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/Homepage/Homepage';
import Collectionpage from './pages/Collection page/Collectionpage';
import SignUpAndLoginPage from './pages/SignupAndLogin page/SignupAndLoginPage';
import SideMenu from './components/SideMenu/SideMenu';

import {Switch, Route}  from 'react-router-dom';
import './App.scss';
import CartMenu from './components/CartMenu/CartMenu';
import { ThemeContext } from './contextProviders/ThemeProvider/ThemeProvider';





const App = ()=> {
  
  const {currentTheme} = useContext(ThemeContext);
  
  return (
    <div 
      theme = {currentTheme}
      className = 'App shade1bg'
    >
      <Navbar/>
      <SideMenu/>
      <CartMenu/>
      
      <Switch>
        <Route exact path = '/' component = {Homepage}/>
        <Route exact path = '/collection' component = {Collectionpage}/>
        <Route exact path = '/login' component = {SignUpAndLoginPage}/>
      </Switch>
    </div>
  )
}

export default App;
