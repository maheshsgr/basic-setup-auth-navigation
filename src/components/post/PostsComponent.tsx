import {PostDetailType} from '@/src/types';
import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  RefreshControl,
} from 'react-native';

interface PostsComponentProps {
  posts: PostDetailType[];
  refreshing: boolean;
  onRefresh: () => void;
  navigateToPost: (post: PostDetailType) => void;
  loadMore: () => void;
}

const PostsComponent: React.FC<PostsComponentProps> = ({
  posts,
  refreshing,
  onRefresh,
  navigateToPost,
  loadMore,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.refreshButton}
        onPress={onRefresh}
        disabled={refreshing}>
        <Text style={styles.buttonText}>
          {refreshing ? 'Refreshing...' : 'Refresh'}
        </Text>
      </TouchableOpacity>
      <FlatList
        data={posts}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.postItem}
            onPress={() => navigateToPost(item)}>
            <Text style={styles.postTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
        refreshing={refreshing}
        onRefresh={onRefresh}
        ListFooterComponent={
          <TouchableOpacity style={styles.loadMoreButton} onPress={loadMore}>
            <Text style={styles.buttonText}>Load More</Text>
          </TouchableOpacity>
        }
      />
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
  refreshButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  loadMoreButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  postItem: {
    backgroundColor: '#E5E5E5',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
  },
  postTitle: {
    fontSize: 18,
  },
});

export default PostsComponent;
