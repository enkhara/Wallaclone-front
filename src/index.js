import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';

import { configureClient } from './api/client';
import configureStore from './store/store';
import storage from './utils/storage';

import Root from './Root';

const accessToken = storage.get('auth');
configureClient({ accessToken });
const history = createBrowserHistory();

const store = configureStore({
	preloadedState: { logged: !!accessToken },
	history,
});

ReactDOM.render(
	<Root store={store} history={history} />,
	document.getElementById('root')
);
