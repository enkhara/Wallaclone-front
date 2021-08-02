import { combineReducers } from 'redux';
import { adverts, logged, registered, user, tags, ui } from './advertsReducer';

const reducer = combineReducers({
	adverts,
	logged,
	user,
	registered,
	tags,
	ui,
});

export default reducer;
