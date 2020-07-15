import React, {useContext, useEffect} from 'react';


import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/Homepage/Homepage';
import Collectionpage from './pages/Collection page/Collectionpage';
import SideMenu from './components/SideMenu/SideMenu';
import CartMenu from './components/CartMenu/CartMenu';
import ShopPage from './pages/Shop page/ShopPage';
import ProductDetailsPage from './pages/ProductDetails page/ProductDetailsPage';
import CheckoutPage from './pages/Checkout page/CheckoutPage';


import {Switch, Route, Redirect, useHistory}  from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux'
import { ThemeContext } from './contextProviders/ThemeProvider/ThemeProvider';
import './App.scss';
import AuthPage from './pages/Auth page/AuthPage';
import { auth, saveUserToFirestore } from './firebase/firebase';
import { authUser, logUserOut } from './Redux/User/user.actions';






const App = ()=> {
  const {currentTheme} = useContext(ThemeContext);
  const dispatch = useDispatch();
  const user = useSelector(state => state.User);
  const isUserSignedIn = Boolean(user);
  console.log(useHistory())
  const {push} = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) =>{
      if(userAuth){
        const userRef = await saveUserToFirestore(userAuth);
        await userRef.onSnapshot(snapshot =>{
          const {email, displayName} = snapshot.data();
          dispatch(authUser({id: snapshot.id, email, name: displayName}));
          push('/');
        })
      }else{
        dispatch(logUserOut());      
      }
    })
  }, [dispatch])
  
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
          : (<AuthPage/>)
        }
        />
        <Route exact path = '/product/:id' component = {ProductDetailsPage}/>
        <Route exact path = '/checkout' component = {CheckoutPage}/>
      </Switch>
    </div>
  )
}

export default App;
