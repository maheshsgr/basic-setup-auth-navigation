import {
  fetchPostsStart,
  fetchPostsSuccess,
  refreshPosts,
} from 'src/features/posts/postsSlice';

test('fetchPostsStart action creator', () => {
  const action = fetchPostsStart();
  expect(action.type).toEqual('posts/fetchPostsStart');
});

import postsReducer, {initialState} from 'src/features/posts/postsSlice';

test('postsReducer should handle fetchPostsStart', () => {
  const action = fetchPostsStart();
  const newState = postsReducer(initialState, action);

  expect(newState.refreshing).toEqual(true);
});

// Test for fetchPostsSuccess action
test('fetchPostsSuccess action creator', () => {
  const posts = [
    {id: 1, title: 'Post 1'},
    {id: 2, title: 'Post 2'},
  ];
  const action = fetchPostsSuccess(posts);

  // Verify the action type
  expect(action.type).toEqual('posts/fetchPostsSuccess');

  // Verify the payload (posts array)
  expect(action.payload).toEqual(posts);
});

// Test for refreshPosts action
test('refreshPosts action creator', () => {
  const action = refreshPosts();

  // Verify the action type
  expect(action.type).toEqual('posts/refreshPosts');
});
