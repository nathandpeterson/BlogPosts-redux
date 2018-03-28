import { combineReducers } from 'redux';
import PostReducer from './reducer_posts.jsx'

const rootReducer = combineReducers({
  posts: PostReducer
});

export default rootReducer;
