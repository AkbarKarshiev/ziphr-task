import { Photo, PHOTOS_STUB } from "@ziphr-task/photos/common";

import {
  initialPhotosState,
  PHOTOS_FEATURE_KEY,
  photosAdapter,
  PhotosPartialState,
  PhotosState
} from "./photos.reducer";
import * as PhotosSelectors from './photos.selectors';

describe('Photos Selectors', () => {
  const getStore = (state?: Partial<PhotosState>, photos: Photo[] = []): PhotosPartialState => ({
    [PHOTOS_FEATURE_KEY]: photosAdapter.setAll(photos, { ...initialPhotosState, ...state})
  });

  const SELECTED_ID_STUB = PHOTOS_STUB[0].id;

  let state: PhotosPartialState;

  beforeEach(() => {
    state = getStore();
  });

  it('selectPhotos() should return photos ', () => {
    state = getStore({}, PHOTOS_STUB);
    const results = PhotosSelectors.selectPhotos(state);

    expect(results.length).toBe(PHOTOS_STUB.length);
  });

  it('selectPhotosCount() should return count', () => {
    state = getStore({}, PHOTOS_STUB);
    const result = PhotosSelectors.selectPhotosCount(state);

    expect(result).toBe(PHOTOS_STUB.length);
  });

  it('selectPhotosEntities() should return photos entities', () => {
    state = getStore({}, PHOTOS_STUB);
    const result = PhotosSelectors.selectPhotosEntities(state);

    expect(Object.keys(result).length).toBe(PHOTOS_STUB.length);
  });

  it('selectPhotosLoaded() should return current "loaded" status', () => {
    state = getStore({ loaded: true });
    const result = PhotosSelectors.selectPhotosLoaded(state);

    expect(result).toBeTruthy();
  });

  it('selectPhoto() should return photo by id', () => {
    state = getStore({}, PHOTOS_STUB);
    const result = PhotosSelectors.selectPhoto(SELECTED_ID_STUB + '')(state);

    expect(result?.id).toBe(SELECTED_ID_STUB);
  });
});
