export enum PostKeys {
  Posts = 'posts'
}

export interface Post extends Record<string, string | number | object>{
  id: number;
  userId: number;
  title: string;
  body: string;
}

export type PostsResponse = Post[];

export type PostResponse = Post;

