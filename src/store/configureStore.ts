import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import {watchFetchPosts} from '../features/posts/postsSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(watchFetchPosts);

export type RootState = ReturnType<typeof store.getState>;

export default store;
