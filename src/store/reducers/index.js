import { combineReducers } from 'redux';
import { adverts, logged, registered, ui } from './advertsReducer';

const reducer = combineReducers({
	adverts,
	logged,
	registered,
	ui,
});

export default reducer;
