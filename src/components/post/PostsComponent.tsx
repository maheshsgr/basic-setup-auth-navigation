import {ButtonPrimary} from 'src/atoms';
import {PostDetailType} from 'src/types';
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
      <View style={styles.headerButtons}>
        <ButtonPrimary
          onPress={onRefresh}
          disabled={refreshing}
          text={refreshing ? 'Refreshing...' : 'Refresh'}
        />
        <ButtonPrimary
          onPress={onRefresh}
          disabled={refreshing}
          text={'Logout'}
        />
      </View>
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
          <ButtonPrimary onPress={loadMore} text={'Load More'} />
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
  headerButtons: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'stretch',
    justifyContent: 'space-around',
    padding: 8,
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
