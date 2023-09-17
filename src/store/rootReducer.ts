import {combineReducers} from '@reduxjs/toolkit';
import postsReducer from '../features/posts/postsSlice';

const rootReducer = combineReducers({
  posts: postsReducer,
});

export default rootReducer;
