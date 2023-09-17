import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {PostDetailType, PostsState} from 'src/types';

const initialState: PostsState = {
  posts: [],
  page: 1,
  refreshing: false,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    fetchPostsStart(state) {
      // this looks mutating store but behind the scene redux is using immer
      state.refreshing = true;
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
    },
  },
});

export const {fetchPostsStart, fetchPostsSuccess, refreshPosts} =
  postsSlice.actions;

export default postsSlice.reducer;
