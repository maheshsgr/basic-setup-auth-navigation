type PostDetailType = {
  id: number;
  title: string;
  body: string;
};

interface PostsState {
  posts: PostDetailType[];
  page: number;
  refreshing: boolean;
  loading: boolean;
  error: string;
}

export type {PostDetailType, PostsState};
