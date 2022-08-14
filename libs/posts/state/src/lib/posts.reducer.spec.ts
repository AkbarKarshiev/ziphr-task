import { Action } from '@ngrx/store';

import { Post, POSTS_STUB } from "@ziphr-task/posts/common";

import * as PostsActions from './posts.actions';
import { initialPostsState, postsAdapter,postsReducer, PostsState } from './posts.reducer';

describe('Posts Reducer', () => {
  const getState = (
    state?: Partial<PostsState>,
    posts: Post[] = []
  ): PostsState => postsAdapter.setAll(posts, { ...initialPostsState, ...state });

  let state: PostsState;

  beforeEach(() => {
    state = getState();
  });

  it('restore() should restore posts', () => {
    const action = PostsActions.restore({ posts: POSTS_STUB });
    const result = postsReducer(state, action);

    expect(result.loaded).toBeTruthy();
    expect(result.ids.length).toBe(POSTS_STUB.length);
  });

  it('loadSuccess() should add posts', () => {
    const action = PostsActions.loadSuccess({ posts: POSTS_STUB });
    const result = postsReducer(state, action);

    expect(result.loaded).toBeTruthy();
    expect(result.ids.length).toBe(POSTS_STUB.length);
  });

  it('should return the previous state', () => {
    const action = {} as Action;
    const result = postsReducer(initialPostsState, action);

    expect(result).toBe(initialPostsState);
  });
});
