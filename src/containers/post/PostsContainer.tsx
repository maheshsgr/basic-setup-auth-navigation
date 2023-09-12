import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {PostsComponent} from 'src/components';
import {useNavigation} from '@react-navigation/native';
import {PostDetailType} from 'src/types';
import {usePosts} from 'src/hooks';

const PAGE_SIZE = 10; // Number of posts per page

const PostsContainer: React.FC = () => {
  type PostsType = PostDetailType[];
  const navigation = useNavigation();

  const {posts, getPosts, refreshPosts, refreshing} = usePosts();

  const navigateToPost = (postDetail: PostDetailType) => {
    navigation.navigate('PostDetail', {post: postDetail});
  };

  return (
    <PostsComponent
      posts={posts}
      refreshing={refreshing}
      onRefresh={refreshPosts}
      navigateToPost={navigateToPost}
      loadMore={getPosts}
    />
  );
};

export default PostsContainer;
