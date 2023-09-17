import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {PostsComponent} from 'src/components';
import {useNavigation} from '@react-navigation/native';
import {PostDetailType} from 'src/types';
import {usePosts} from 'src/hooks';
import {useAuth} from 'src/contexts/AuthContext';

const PAGE_SIZE = 10; // Number of posts per page

const PostsContainer: React.FC = () => {
  type PostsType = PostDetailType[];
  const navigation = useNavigation();

  // const {posts, getPosts, refreshPosts, refreshing} = usePosts();
  const {posts, refreshing, loadMore, refresh, error} = usePosts();
  const {logout} = useAuth();

  const navigateToPost = (postDetail: PostDetailType) => {
    navigation.navigate('PostDetail', {post: postDetail});
  };

  return (
    <PostsComponent
      posts={posts}
      refreshing={refreshing}
      onRefresh={refresh}
      navigateToPost={navigateToPost}
      loadMore={loadMore}
      logout={logout}
      error={error}
    />
  );
};

export default PostsContainer;
