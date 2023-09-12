import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {PostsComponent} from 'src/components';
import {useNavigation} from '@react-navigation/native';
import {PostDetailType} from 'src/types';

const PAGE_SIZE = 10; // Number of posts per page

const PostsContainer: React.FC = () => {
  const [posts, setPosts] = useState<Array<PostDetailType>>([]);
  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const fetchPosts = async () => {
    setRefreshing(true);

    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_start=${
          (page - 1) * PAGE_SIZE
        }&_limit=${PAGE_SIZE}`,
      );
      setPosts(prevPosts => [...prevPosts, ...response.data]);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setRefreshing(false);
    }
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const navigateToPost = (postDetail: PostDetailType) => {
    navigation.navigate('PostDetail', {post: postDetail});
  };

  return (
    <PostsComponent
      posts={posts}
      refreshing={refreshing}
      onRefresh={fetchPosts}
      navigateToPost={navigateToPost}
      loadMore={loadMore}
    />
  );
};

export default PostsContainer;
