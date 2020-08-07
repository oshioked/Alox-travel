import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store, persistor} from './Redux/store';


import OnPathChange from './utilities/Router/OnPathChange.component';
import ThemeProvider from './contextProviders/ThemeProvider/ThemeProvider';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <ThemeProvider>
    <BrowserRouter>
      <OnPathChange/>
      <React.StrictMode>
        <PersistGate persistor = {persistor}>
          <Provider store = {store}>
            <App/>
          </Provider>
        </PersistGate>
        
      </React.StrictMode>
    </BrowserRouter>
  </ThemeProvider>
  ,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
