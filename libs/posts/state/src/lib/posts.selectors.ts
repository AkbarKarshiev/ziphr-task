import { createFeatureSelector, createSelector } from '@ngrx/store';

import { POSTS_FEATURE_KEY, PostsState, postsAdapter } from './posts.reducer';

// Lookup the 'Posts' feature state managed by NgRx
export const selectPostsState = createFeatureSelector<PostsState>(POSTS_FEATURE_KEY);

const { selectAll, selectEntities, selectTotal } = postsAdapter.getSelectors();

export const selectPosts = createSelector(selectPostsState, (state: PostsState) => selectAll(state));

export const selectPostsCount = createSelector(selectPostsState, (state: PostsState) => selectTotal(state));

export const selectPostsEntities = createSelector(selectPostsState, (state: PostsState) => selectEntities(state));

export const selectPostsLoaded = createSelector(selectPostsState, (state: PostsState) => state.loaded);

export const selectSelectedId = createSelector(selectPostsState, (state: PostsState) => state.selectedId);

export const selectPost = (id: string) => createSelector(selectPostsEntities, (entities) => entities[id] ?? null);

