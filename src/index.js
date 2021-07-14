import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

import storage from './utils/storage';
import { configureClient } from './api/client';

const accessToken = storage.get('auth');

configureClient({ accessToken });

ReactDOM.render(
	<Router>
      	<App
		  isInitiallyLogged={!!accessToken}
		/>
  
	</Router>,
	document.getElementById('root')
);
