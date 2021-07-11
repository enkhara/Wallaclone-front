import { combineReducers } from 'redux';
import { adverts, logged, ui } from './advertsReducer';

export default combineReducers({
    adverts: adverts,logged, ui
    
});