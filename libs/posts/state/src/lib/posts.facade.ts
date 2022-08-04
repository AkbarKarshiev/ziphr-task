import { Injectable } from '@angular/core';
import { Actions } from "@ngrx/effects";
import { Store } from '@ngrx/store';
import { filter, switchMap } from "rxjs";

import * as PostsActions from './posts.actions';
import * as PostsSelectors from './posts.selectors';

@Injectable()
export class PostsFacade {
  loaded$ = this.store.select(PostsSelectors.selectPostsLoaded);

  posts$ = this.store.select(PostsSelectors.selectPosts);

  postsCount$ = this.store.select(PostsSelectors.selectPostsCount);

  postsEntities$ = this.store.select(PostsSelectors.selectPostsEntities);

  postById$ = (id: string) => this.store.select(PostsSelectors.selectPost(id));

  postByIdLoaded$ = (id: string) =>
    this.posts$.pipe(
      filter((posts) => posts?.length > 0),
      switchMap(() => this.store.select(PostsSelectors.selectPost(id)))
    );

  constructor(private readonly actions$: Actions, private readonly store: Store) {}

  load() {
    this.store.dispatch(PostsActions.load());
  }
}
