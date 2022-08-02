export enum PostKeys {
  Posts = 'posts'
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export type PostsResponse = Post[];

