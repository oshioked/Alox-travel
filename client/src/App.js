import React, {useContext, useEffect, lazy, Suspense} from 'react';

import SideMenu from './components/SideMenu/SideMenu';
import CartMenu from './components/CartMenu/CartMenu';


import {Switch, Route, Redirect, useHistory}  from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux'
import { ThemeContext } from './contextProviders/ThemeProvider/ThemeProvider';
import './App.scss';
import { auth, saveUserToFirestore } from './firebase/firebase';
import { authUser, logUserOut } from './Redux/User/user.actions';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ProductDetailsPage from './pages/ProductDetails page/ProductDetailsPage';

const Homepage = lazy(()=>import('./pages/Homepage/Homepage'));
const Collectionpage = lazy(()=>import('./pages/Collection page/Collectionpage'));
const ShopPage = lazy(()=>import('./pages/Shop page/ShopPage'));
const CheckoutPage = lazy(()=>import('./pages/Checkout page/CheckoutPage'));
const AuthPage = lazy(()=>import('./pages/Auth page/AuthPage'));

gsap.registerPlugin(ScrollTrigger)


function App (){
  const {currentTheme} = useContext(ThemeContext);
  const dispatch = useDispatch();
  const user = useSelector(state => state.User);
  const isUserSignedIn = Boolean(user);
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
  }, [dispatch, push])

  return (
    <div theme = {currentTheme} className = 'App shade1bg'>
      <SideMenu/>
      <CartMenu/>
      <LoadingScreen/>
        <Switch>
          <Suspense fallback = {<LoadingScreen display = {true}/>}>
            <Route exact path = '/' component = {Homepage}/>
            <Route exact path = '/shop/:method/:key' component = {ShopPage}/>
            <Route exact path = '/collection' component = {Collectionpage}/>
            <Route exact path = '/login' render = {()=> 
              isUserSignedIn
              ? (<Redirect to = '/'/>)
              : (<AuthPage/>)
            }
            />
            <Route exact path = '/checkout' component = {CheckoutPage}/>
          <Route exact path = '/product/:id' component = {ProductDetailsPage}/>
          </Suspense>
        </Switch>
    </div>
  )
}

export default App;
