import {put, takeLatest} from 'redux-saga/effects';
import {fetchPosts} from '../../api/postsApi';
import {fetchPostsStart, fetchPostsSuccess} from './postsSlice';

function* fetchPostsAsync(action: any) {
  try {
    const {page} = action.payload;
    const posts = yield fetchPosts(page);
    yield put(fetchPostsSuccess(posts));
  } catch (error) {
    // Handle error
  }
}

export function* watchFetchPosts() {
  yield takeLatest(fetchPostsStart.type, fetchPostsAsync);
}
