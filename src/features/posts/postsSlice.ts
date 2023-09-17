import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {PostDetailType, PostsState} from 'src/types';

export const initialState: PostsState = {
  posts: [],
  page: 1,
  refreshing: false,
  loading: false,
  error: '',
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    fetchPostsStart(state) {
      // this looks mutating store but behind the scene redux is using immer
      state.loading = true;
      state.refreshing = true;
      state.loading = false; // Set loading state to false on success
      state.error = ''; // Clear any previous errors
    },
    fetchPostsFailure(state, action: PayloadAction<string>) {
      state.loading = false; // Set loading state to false on failure
      state.error = action.payload; // Store the error message
      state.refreshing = false;
    },
    fetchPostsSuccess(state, action: PayloadAction<PostDetailType[]>) {
      state.posts = [...state.posts, ...action.payload];
      state.page += 1;
      state.refreshing = false;
    },
    // Action to refresh the posts by clearing the existing list.
    refreshPosts(state) {
      state.posts = [];
      state.page = 1;
      state.refreshing = true;
      state.error = ''; // Clear any previous errors when refreshing
    },
  },
});

export const {
  fetchPostsStart,
  fetchPostsSuccess,
  refreshPosts,
  fetchPostsFailure,
} = postsSlice.actions;

export default postsSlice.reducer;
