import { Injectable } from '@angular/core';
import { Actions } from "@ngrx/effects";
import { Store } from '@ngrx/store';
import { filter, switchMap } from "rxjs";

import * as PhotosActions from './photos.actions';
import * as PhotosSelectors from './photos.selectors';

@Injectable()
export class PhotosFacade {
  loaded$ = this.store.select(PhotosSelectors.selectPhotosLoaded);

  photos$ = this.store.select(PhotosSelectors.selectPhotos);

  photosCount$ = this.store.select(PhotosSelectors.selectPhotosCount);

  photosEntities$ = this.store.select(PhotosSelectors.selectPhotosEntities);

  photoById$ = (id: string) => this.store.select(PhotosSelectors.selectPhoto(id));

  photoByIdLoaded$ = (id: string) =>
    this.photos$.pipe(
      filter((photos) => photos?.length > 0),
      switchMap(() => this.store.select(PhotosSelectors.selectPhoto(id)))
    );

  constructor(private readonly actions$: Actions, private readonly store: Store) {}

  load() {
    this.store.dispatch(PhotosActions.load());
  }
}
