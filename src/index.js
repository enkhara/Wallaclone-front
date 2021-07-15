import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';
import storage from './utils/storage';
import { configureClient } from './api/client';

const accessToken = storage.get('auth');

configureClient({ accessToken });

ReactDOM.render(
	<Provider store={store}>
      	<App
		  isInitiallyLogged={!!accessToken}
		/>
  
	</Provider>,
	document.getElementById('root')
);
