import { Post, POSTS_STUB } from "@ziphr-task/posts/common";

import {
  initialPostsState, POSTS_FEATURE_KEY,
  postsAdapter,
  PostsPartialState,
PostsState, } from './posts.reducer';
import * as PostsSelectors from './posts.selectors';

describe('Posts Selectors', () => {
  const getStore = (state?: Partial<PostsState>, posts: Post[] = []): PostsPartialState => ({
    [POSTS_FEATURE_KEY]: postsAdapter.setAll(posts, { ...initialPostsState, ...state})
  });

  const SELECTED_ID_STUB = POSTS_STUB[0].id;

  let state: PostsPartialState;

  beforeEach(() => {
    state = getStore();
  });

  it('selectPosts() should return posts ', () => {
    state = getStore({}, POSTS_STUB);
    const results = PostsSelectors.selectPosts(state);

    expect(results.length).toBe(POSTS_STUB.length);
  });

  it('selectPostsCount() should return count', () => {
    state = getStore({}, POSTS_STUB);
    const result = PostsSelectors.selectPostsCount(state);

    expect(result).toBe(POSTS_STUB.length);
  });

  it('selectPostsEntities() should return posts entities', () => {
    state = getStore({}, POSTS_STUB);
    const result = PostsSelectors.selectPostsEntities(state);

    expect(Object.keys(result).length).toBe(POSTS_STUB.length);
  });

  it('selectPostsLoaded() should return current "loaded" status', () => {
    state = getStore({ loaded: true });
    const result = PostsSelectors.selectPostsLoaded(state);

    expect(result).toBeTruthy();
  });

  it('selectPost() should return post by id', () => {
    state = getStore({}, POSTS_STUB);
    const result = PostsSelectors.selectPost(SELECTED_ID_STUB + '')(state);

    expect(result?.id).toBe(SELECTED_ID_STUB);
  });
});
