import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface PostDetail {
  title: string;
  body: string;
}

interface PostDetailComponentProps {
  postDetail: PostDetail;
}

const PostDetailComponent: React.FC<PostDetailComponentProps> = ({
  postDetail,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{postDetail.title}</Text>
      <Text style={styles.body}>{postDetail.body}</Text>
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
  body: {
    fontSize: 18,
    lineHeight: 24,
  },
});

export default PostDetailComponent;
