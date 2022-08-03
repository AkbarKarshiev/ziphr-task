import { Injectable } from '@angular/core';
import { filter, switchMap } from "rxjs";
import { Store } from '@ngrx/store';
import { Actions } from "@ngrx/effects";

import * as PhotosActions from './photos.actions';
import * as PhotosSelectors from './photos.selectors';

@Injectable()
export class PhotosFacade {
  loaded$ = this.store.select(PhotosSelectors.selectPhotosLoaded);

  photos$ = this.store.select(PhotosSelectors.selectPhotos);

  photosCount$ = this.store.select(PhotosSelectors.selectPhotosCount);

  photosEntities$ = this.store.select(PhotosSelectors.selectPhotosEntities);

  photo$ = (id: number) => this.store.select(PhotosSelectors.selectPhoto(id));

  photoByIdLoaded$ = (id: number) =>
    this.photos$.pipe(
      filter((photos) => photos?.length > 0),
      switchMap(() => this.store.select(PhotosSelectors.selectPhoto(id)))
    );

  constructor(private readonly actions$: Actions, private readonly store: Store) {}

  load() {
    this.store.dispatch(PhotosActions.load());
  }
}
