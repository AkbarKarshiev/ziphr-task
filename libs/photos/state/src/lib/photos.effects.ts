import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom,createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { Action } from "@ngrx/store";
import { fetch } from '@nrwl/angular';
import { map, take } from "rxjs";

import { LocalAsyncStorageService } from "@ziphr-task/core/storage/local";
import { PhotosApiService } from "@ziphr-task/photos/api";
import { Photo, PhotoKeys } from "@ziphr-task/photos/common";

import * as PhotosActions from './photos.actions';

@Injectable()
export class PhotosEffects implements OnInitEffects {
  init$ = createEffect(() =>
    { return this.actions$.pipe(
      ofType(PhotosActions.init),
      concatLatestFrom(() => this.localAsyncStorage.getItem<Photo[] | null>(PhotoKeys.Photos).pipe(take(1))),
      fetch({
        id: (action, photos) => 'init-photos',
        run: (action, photos) => {
          return PhotosActions.restore({ photos: photos ?? [] });
        },
        onError: (action, error) => console.error(`Error: ${action.type}`, error)
      })
    ) }
  );

  load$ = createEffect(() =>
    { return this.actions$.pipe(
      ofType(PhotosActions.load),
      fetch({
        id: () => 'load-photos',
        run: () =>
          this.photosApiService.loadPhotos().pipe(
            map((photos) => {
              this.localAsyncStorage.setItem(PhotoKeys.Photos, photos);

              return PhotosActions.loadSuccess({ photos: photos ?? [] })
            })
          ),
        onError: (action, error) => {
          console.error(`Error: ${action.type}\n`, error);
          return PhotosActions.loadFailure({ error })
        }
      })
    ) }
  );

  constructor(
    private readonly actions$: Actions,
    private readonly localAsyncStorage: LocalAsyncStorageService,
    private readonly photosApiService: PhotosApiService
  ) {}

  ngrxOnInitEffects(): Action {
    return PhotosActions.init();
  }
}
