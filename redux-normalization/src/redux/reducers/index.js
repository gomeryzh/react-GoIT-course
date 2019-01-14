import { combineReducers } from 'redux';
import entityReducer from './entityReducer';
import postReducer from './postReducer';
import authorReducer from './authorReducer';

export default combineReducers({
    authors: authorReducer,
    posts: postReducer,
    entities: entityReducer,
});
