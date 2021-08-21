import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { configureClient } from './api/client';
import configureStore from './store/store';
import storage from './utils/storage';
import './i18n/i18next-config';

import Root from './Root';

const accessToken = storage.get('auth');
configureClient({ accessToken });
const history = createBrowserHistory();

const store = configureStore({
  preloadedState: { logged: !!accessToken },
  history,
});

ReactDOM.render(
  <Suspense fallback="">
    <Root store={store} history={history} />
  </Suspense>,
  document.getElementById('root')
);
