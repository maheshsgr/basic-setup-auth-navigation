import {runSaga} from 'redux-saga';
import {fetchPostsAsync} from 'src/features/posts/postsSaga';
import {
  fetchPostsSuccess,
  fetchPostsStart,
  fetchPostsFailure,
} from 'src/features/posts/postsSlice';
import {fetchPosts} from 'src/api/postsApi';

// Mock the fetchPosts function
jest.mock('src/api/postsApi', () => ({
  fetchPosts: jest.fn(),
}));

describe('myPostSagas', () => {
  it('should fetch posts successfully', async () => {
    const dispatchedActions = [];

    // Mock the response data from the API
    const mockResponse = [{id: 1, title: 'Post 1'}];

    // Mock the fetchPosts function to resolve with mockResponse
    (fetchPosts as jest.Mock).mockResolvedValue(mockResponse);

    // Dispatch the fetchPostsStart action to trigger the saga
    await runSaga(
      {
        dispatch: action => dispatchedActions.push(action),
      },
      fetchPostsAsync,
      fetchPostsStart({page: 1}), // Replace with your action payload
    ).toPromise();

    // Check if the saga dispatched the expected actions
    expect(dispatchedActions).toContainEqual(fetchPostsSuccess(mockResponse));
  });

  it('should handle fetchPosts failure', async () => {
    const dispatchedActions = [];

    // Mock the error thrown by the fetchPosts function
    const mockError = new Error('Network error');

    // Mock the fetchPosts function to reject with mockError
    (fetchPosts as jest.Mock).mockRejectedValue(mockError);

    // Dispatch the fetchPostsStart action to trigger the saga
    await runSaga(
      {
        dispatch: action => dispatchedActions.push(action),
      },
      fetchPostsAsync,
      fetchPostsStart({page: 1}), // Replace with your action payload
    ).toPromise();

    // Check if the saga dispatched the expected actions
    expect(dispatchedActions).toContainEqual(
      fetchPostsFailure(mockError.message),
    );
  });
});
