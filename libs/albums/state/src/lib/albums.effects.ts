import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType, OnInitEffects, concatLatestFrom } from '@ngrx/effects';
import { map, take } from "rxjs";
import { fetch } from '@nrwl/angular';
import { Action } from "@ngrx/store";

import { LocalAsyncStorageService } from "@ziphr-task/core/storage/local";
import { AlbumsApiService } from "@ziphr-task/albums/api";
import { Album, AlbumKeys } from "@ziphr-task/albums/common";

import * as AlbumsActions from './albums.actions';

@Injectable()
export class AlbumsEffects implements OnInitEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AlbumsActions.init),
      concatLatestFrom(() => this.localAsyncStorage.getItem<Album[] | null>(AlbumKeys.Albums).pipe(take(1))),
      fetch({
        id: (action, albums) => 'init-albums',
        run: (action, albums) => {
          return AlbumsActions.restore({ albums: albums ?? [] });
        },
        onError: (action, error) => console.error(`Error: ${action.type}`, error)
      })
    )
  );

  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AlbumsActions.load),
      fetch({
        id: () => 'load-posts',
        run: () =>
          this.albumsApiService.loadAlbums().pipe(
            map((albums) => {
              this.localAsyncStorage.setItem(AlbumKeys.Albums, albums);

              return AlbumsActions.loadSuccess({ albums: albums ?? [] })
            })
          ),
        onError: (action, error) => {
          console.error(`Error: ${action.type}\n`, error);
          return AlbumsActions.loadFailure({ error })
        }
      })
    )
  )

  constructor(
    private readonly actions$: Actions,
    private readonly localAsyncStorage: LocalAsyncStorageService,
    private readonly albumsApiService: AlbumsApiService
  ) {}

  ngrxOnInitEffects(): Action {
    return AlbumsActions.init();
  }
}
