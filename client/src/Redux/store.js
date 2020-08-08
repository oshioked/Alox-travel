import {createStore, applyMiddleware, combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk'
import {sideMenu} from './SideMenu/sideMenu.reducer';
import {Cart} from './Cart/cart.reducer';
import {User} from './User/user.reducer';
import loadingReducer from './LoadingScreen/loadingscreen.reducer'
import {Shop} from './Shop/shop.reducers';
import storage from 'redux-persist/lib/storage';

import { persistStore, persistReducer } from 'redux-persist';


const logger = createLogger();
const middlewares = [logger, thunkMiddleware];

const rootReducer = combineReducers({sideMenu, Cart, User, Shop, loadingReducer});

const persistConfig = {
    key: 'root',
    storage,
    whitelish: ['Cart']
}

export const store = createStore(persistReducer(persistConfig, rootReducer), applyMiddleware(...middlewares));
export const persistor = persistStore(store);