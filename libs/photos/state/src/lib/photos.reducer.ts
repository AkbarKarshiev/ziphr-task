import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import { Photo } from "@ziphr-task/photos/common";

import * as PhotosActions from './photos.actions';

export const PHOTOS_FEATURE_KEY = 'photos';

export interface PhotosState extends EntityState<Photo> {
  selectedId: number | null;
  loaded: boolean;
}

export interface PhotosPartialState {
  readonly [PHOTOS_FEATURE_KEY]: PhotosState;
}

export const photosAdapter: EntityAdapter<Photo> = createEntityAdapter<Photo>();

export const initialPhotosState: PhotosState = photosAdapter.getInitialState({
  selectedId: null,
  loaded: false,
});

const reducer = createReducer(
  initialPhotosState,
  on(
    PhotosActions.restore,
    (state, { photos }): PhotosState => {
      return photosAdapter.upsertMany(photos , {
        ...state,
        loaded: true
      });
    }
  ),
  on(
    PhotosActions.loadSuccess,
    (state, { photos }): PhotosState => {
      return photosAdapter.setAll(photos, {
        ...state,
        loaded: true
      });
    }
  ),
  on(
    PhotosActions.loadFailure,
    (state): PhotosState => ({
      ...state,
      loaded: true,
    })
  )
);

export function photosReducer(state: PhotosState | undefined, action: Action): PhotosState {
  return reducer(state, action);
}
