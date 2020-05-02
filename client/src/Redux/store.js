import {createStore, applyMiddleware, combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk'
import {sideMenu} from './SideMenu/sideMenu.reducer';
import {Cart} from './Cart/Cart.reducer';
import {User} from './User/user.reducer';
import {Shop} from './Shop/shop.reducers'



const logger = createLogger();

const rootReducer = combineReducers({sideMenu, Cart, User, Shop});

const middlewares = [logger, thunkMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;