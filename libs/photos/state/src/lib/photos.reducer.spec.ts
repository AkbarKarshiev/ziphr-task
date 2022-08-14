import { Action } from '@ngrx/store';

import { Photo, PHOTOS_STUB } from "@ziphr-task/photos/common";

import * as PhotosActions from './photos.actions';
import {
  initialPhotosState,
  photosAdapter,
  photosReducer,
  PhotosState,
} from './photos.reducer';

describe('Photos Reducer', () => {
  const getState = (
    state?: Partial<PhotosState>,
    photos: Photo[] = []
  ): PhotosState => photosAdapter.setAll(photos, { ...initialPhotosState, ...state });

  let state: PhotosState;

  beforeEach(() => {
    state = getState();
  });

  it('restore() should restore photos', () => {
    const action = PhotosActions.restore({ photos: PHOTOS_STUB });
    const result = photosReducer(state, action);

    expect(result.loaded).toBeTruthy();
    expect(result.ids.length).toBe(PHOTOS_STUB.length);
  });

  it('loadSuccess() should add photos', () => {
    const action = PhotosActions.loadSuccess({ photos: PHOTOS_STUB });
    const result = photosReducer(state, action);

    expect(result.loaded).toBeTruthy();
    expect(result.ids.length).toBe(PHOTOS_STUB.length);
  });

  it('should return the previous state', () => {
    const action = {} as Action;
    const result = photosReducer(initialPhotosState, action);

    expect(result).toBe(initialPhotosState);
  });
});
