import { combineReducers } from 'redux';
import { adverts, logged, registered, tags, ui } from './advertsReducer';

const reducer = combineReducers({
	adverts,
	logged,
	registered,
	tags,
	ui,
});

export default reducer;
