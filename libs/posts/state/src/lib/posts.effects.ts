import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { Action } from "@ngrx/store";
import { fetch } from '@nrwl/angular';
import { map, take } from "rxjs";

import { LocalAsyncStorageService } from "@ziphr-task/core/storage/local";
import { PostsApiService } from "@ziphr-task/posts/api";
import { Post, PostKeys } from "@ziphr-task/posts/common";

import * as PostsActions from './posts.actions';

@Injectable()
export class PostsEffects implements OnInitEffects {
  init$ = createEffect(() =>
    { return this.actions$.pipe(
      ofType(PostsActions.init),
      concatLatestFrom(() => this.localAsyncStorage.getItem<Post[] | null>(PostKeys.Posts).pipe(take(1))),
      fetch({
        id: (action, posts) => 'init-posts',
        run: (action, posts) => {
          return PostsActions.restore({ posts: posts ?? [] });
        },
        onError: (action, error) => console.error(`Error: ${action.type}`, error)
      })
    ) }
  );

  load$ = createEffect(() =>
    { return this.actions$.pipe(
      ofType(PostsActions.load),
      fetch({
        id: () => 'load-posts',
        run: () =>
          this.postsApiService.loadPosts().pipe(
            map((posts) => {
              this.localAsyncStorage.setItem(PostKeys.Posts, posts);

              return PostsActions.loadSuccess({ posts: posts ?? [] })
            })
          ),
        onError: (action, error) => {
          console.error(`Error: ${action.type}\n`, error);
          return PostsActions.loadFailure({ error })
        }
      })
    ) }
  )

  constructor(
    private readonly actions$: Actions,
    private readonly localAsyncStorage: LocalAsyncStorageService,
    private readonly postsApiService: PostsApiService
  ) {}

  ngrxOnInitEffects(): Action {
    return PostsActions.init();
  }
}
