// This custom hook manages the state and actions related to fetching and refreshing posts.

import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store/configureStore';
import {fetchPostsStart, refreshPosts} from '../features/posts/postsSlice';

const usePosts = () => {
  const dispatch = useDispatch();
  const {posts, page, refreshing, error} = useSelector(
    (state: RootState) => state.posts,
  );

  // Trigger initial post fetching when the component mounts.
  useEffect(() => {
    dispatch(fetchPostsStart({page})); // setup type for page later
  }, [dispatch]);

  // Function to load more posts when reaching the end of the list.
  const loadMore = () => {
    if (!refreshing) {
      dispatch(fetchPostsStart({page}));
    }
  };

  // Function to refresh the posts.
  const refresh = () => {
    if (!refreshing) {
      dispatch(refreshPosts());
      dispatch(fetchPostsStart({page: 1}));
    }
  };

  return {posts, page, refreshing, loadMore, refresh, error};
};

export default usePosts;
