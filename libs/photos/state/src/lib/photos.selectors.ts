import { createFeatureSelector, createSelector } from '@ngrx/store';

import { PHOTOS_FEATURE_KEY, PhotosState, photosAdapter, } from './photos.reducer';

// Lookup the 'Photos' feature state managed by NgRx
export const selectPhotosState = createFeatureSelector<PhotosState>(PHOTOS_FEATURE_KEY);

const { selectAll, selectEntities } = photosAdapter.getSelectors();

export const selectPhotos = createSelector(selectPhotosState, (state: PhotosState) => selectAll(state));

export const selectPhotosEntities = createSelector(selectPhotosState, (state: PhotosState) => selectEntities(state));

export const selectPhotosLoaded = createSelector(selectPhotosState, (state: PhotosState) => state.loaded);

export const selectSelectedId = createSelector(selectPhotosState, (state: PhotosState) => state.selectedId);

export const selectPhoto = (id: number) => createSelector(selectPhotosEntities, (entities) => entities[id] ?? null);
