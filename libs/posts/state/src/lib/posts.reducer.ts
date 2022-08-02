import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import { Post } from "@ziphr-task/posts/common";

import * as PostsActions from './posts.actions';

export const POSTS_FEATURE_KEY = 'posts';

export interface PostsState extends EntityState<Post> {
  selectedId: number | null;
  loaded: boolean;
}

export interface PostsPartialState {
  readonly [POSTS_FEATURE_KEY]: PostsState;
}

export const postsAdapter: EntityAdapter<Post> = createEntityAdapter<Post>();

export const initialPostsState: PostsState = postsAdapter.getInitialState({
  selectedId: null,
  loaded: false,
});

const reducer = createReducer(
  initialPostsState,
  on(
    PostsActions.restore,
    (state, { posts }): PostsState => {
      return postsAdapter.upsertMany(posts, {
        ...state,
        loaded: true
      })
    }
  ),
  on(
    PostsActions.loadSuccess,
    (state, { posts }): PostsState => {
      return postsAdapter.setAll(posts, {
        ...state,
        loaded: true
      })
    }
  ),
  on(
    PostsActions.loadFailure,
    (state): PostsState => ({
      ...state,
      loaded: true
    })
  )
);

export function postsReducer(state: PostsState | undefined, action: Action): PostsState {
  return reducer(state, action);
}
