import {createStore, applyMiddleware, combineReducers} from 'redux';
import {createLogger} from 'redux-logger';

import {sideMenu} from './SideMenu/sideMenu.reducer';
import {Cart} from './Cart/Cart.reducer';


const logger = createLogger();

const rootReducer = combineReducers({sideMenu, Cart});

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;