import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';

import {PostDetailComponent} from 'src/components';
import {PostDetailType} from 'src/types';

type RootStackParamList = {
  PostDetail: {post: PostDetailType};
};

type PostDetailScreenRouteProp = RouteProp<RootStackParamList, 'PostDetail'>;

const PostDetailContainer: React.FC = () => {
  const route = useRoute<PostDetailScreenRouteProp>();
  console.log('route param', route.params);
  const {post} = route.params;

  const [loading, setLoading] = useState<boolean>(true);
  const [postDetail, setPostDetail] = useState<any>({});

  useEffect(() => {
    // Simulate API call to fetch post detail based on postId
    setTimeout(() => {
      setPostDetail(post);
      setLoading(false);
    }, 1000);
  }, [post.id]);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#007AFF" />
      ) : (
        <PostDetailComponent postDetail={postDetail} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default PostDetailContainer;
