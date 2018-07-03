import { combineReducers } from 'redux';
import contentReducer from './content';

const root = combineReducers({
    contentReducer,
});

export default root;
