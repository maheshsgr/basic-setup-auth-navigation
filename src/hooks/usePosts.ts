import React, {useEffect, useState, useReducer} from 'react';
import {PostDetailType} from '../types';
import axios from 'axios';
import {act} from 'react-test-renderer';

const PAGE_SIZE = 10; // Number of posts per page

const usePosts = () => {
  useEffect(() => {
    dispatch({type: PostActionKind.FETCH_START, payload: {}});
  }, []);
  enum PostActionKind {
    FETCH_START = 'FETCH_START',
    FETCH_DONE = 'FETCH_DONE',
    FETCH_ERROR = 'FETCH_ERROR',
    REFRESH = 'REFRESH',
  }
  interface PostAction {
    type: PostActionKind;
    payload: {posts?: PostDetailType[]};
  }

  interface PostsState {
    posts: PostDetailType[];
    page: number;
    refreshing: boolean;
  }
  const fetchPosts = async (page: number) => {
    console.log('usePosts | fetchPosts | page ::', page);
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_start=${
          (page - 1) * PAGE_SIZE
        }&_limit=${PAGE_SIZE}`,
      );
      dispatch({
        type: PostActionKind.FETCH_DONE,
        payload: {posts: response.data},
      });
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      //   setRefreshing(false);
    }
  };
  const postReducer = (state: PostsState, action: PostAction) => {
    const {type, payload} = action;
    console.log('usePosts | postReducer | type ::', type);
    switch (type) {
      case PostActionKind.FETCH_START:
        fetchPosts(state.page || 1);
        return {
          ...state,
          refreshing: true,
        };
      case PostActionKind.FETCH_DONE:
        return {
          ...state,
          posts: [...state.posts, ...(payload.posts || [])],
          refreshing: false,
          page: state.page + 1,
        };
      case PostActionKind.REFRESH:
        fetchPosts(1);
        return {
          ...state,
          posts: [],
          page: 1,
          refreshing: true,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(postReducer, {
    posts: [],
    page: 1,
    refreshing: false,
  });

  const getPosts = () => {
    dispatch({type: PostActionKind.FETCH_START, payload: {}});
  };
  const refreshPosts = () => {
    dispatch({type: PostActionKind.REFRESH, payload: {}});
  };

  return {
    posts: state.posts,
    refreshing: state.refreshing,
    getPosts,
    refreshPosts,
  };
};

export default usePosts;
