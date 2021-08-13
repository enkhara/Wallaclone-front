import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers/index';

import * as auth from '../api/auth';
import * as adverts from '../api/adverts';
import * as user from '../api/user';
import * as chat from '../api/chat';

const api = { auth, adverts, user, chat };

const configureStore = ({ preloadedState, history }) => {
	const middleware = [thunkMiddleware.withExtraArgument({ api, history })];
	const store = createStore(
		reducer,
		preloadedState,
		composeWithDevTools(applyMiddleware(...middleware))
	);
	return store;
};

export default configureStore;
