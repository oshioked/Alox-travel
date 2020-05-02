import React, {useContext} from 'react';


import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/Homepage/Homepage';
import Collectionpage from './pages/Collection page/Collectionpage';
import SignUpAndLoginPage from './pages/SignupAndLogin page/SignupAndLoginPage';
import SideMenu from './components/SideMenu/SideMenu';
import CartMenu from './components/CartMenu/CartMenu';
import ShopPage from './pages/Shop page/ShopPage';
import ProductDetailsPage from './pages/ProductDetails page/ProductDetailsPage';
import CheckoutPage from './pages/Checkout page/CheckoutPage';
import SavedItemsPage from './pages/SavedItems page/SavedItemsPage';


import {Switch, Route, Redirect}  from 'react-router-dom';
import {connect} from 'react-redux'
import { ThemeContext } from './contextProviders/ThemeProvider/ThemeProvider';
import './App.scss';






const App = ({isUserSignedIn})=> {
  const {currentTheme} = useContext(ThemeContext);
  
  return (
    <div theme = {currentTheme} className = 'App shade1bg'>
      <Navbar/>
      <SideMenu/>
      <CartMenu/>
      <Switch>
        <Route exact path = '/' component = {Homepage}/>
        <Route exact path = '/shop/:method/:key' component = {ShopPage}/>
        <Route exact path = '/collection' component = {Collectionpage}/>
        <Route exact path = '/login' render = {()=> 
          isUserSignedIn
          ? (<Redirect to = '/'/>)
          : (<SignUpAndLoginPage/>)
        }
        />
        <Route exact path = '/product/:id' component = {ProductDetailsPage}/>
        <Route exact path = '/checkout' component = {CheckoutPage}/>
        <Route exact path = '/saveditems' component = {SavedItemsPage}/>
      </Switch>
    </div>
  )
}

const mapStateToProps = (state) =>({
  isUserSignedIn: Boolean(state.User.currentUser)
})

export default connect(mapStateToProps)(App);
