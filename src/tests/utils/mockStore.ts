import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import {watchFetchPosts} from '/src/features/postsSaga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const mockStore = configureStore(middlewares);

const store = mockStore({});
sagaMiddleware.run(watchFetchPosts);

export default store;
