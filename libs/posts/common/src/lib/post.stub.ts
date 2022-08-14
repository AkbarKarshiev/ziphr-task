import { Post, PostsResponse } from "@ziphr-task/posts/common";

export const POSTS_RESPONSE_STUB: PostsResponse = [
  {
    userId: 1,
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    // eslint-disable-next-line max-len
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  }
];

export const POST_STUB: Post = {
  userId: 1,
  id: 1,
  title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  // eslint-disable-next-line max-len
  body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}

export const POSTS_STUB: Post[] = [POST_STUB];
