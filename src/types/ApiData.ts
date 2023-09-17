type PostDetailType = {
  id: number;
  title: string;
  body: string;
};

interface PostsState {
  posts: PostDetailType[];
  page: number;
  refreshing: boolean;
}

export type {PostDetailType, PostsState};
