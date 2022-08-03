import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ALBUMS_FEATURE_KEY, albumsAdapter, AlbumsState } from "./albums.reducer";

// Lookup the 'Albums' feature state managed by NgRx
export const selectAlbumsState = createFeatureSelector<AlbumsState>(ALBUMS_FEATURE_KEY);

const { selectAll, selectEntities } = albumsAdapter.getSelectors();

export const selectAlbums = createSelector(selectAlbumsState, (state: AlbumsState) => selectAll(state));

export const selectAlbumsEntities = createSelector(selectAlbumsState, (state: AlbumsState) => selectEntities(state));

export const selectAlbumsLoaded = createSelector(selectAlbumsState, (state: AlbumsState) => state.loaded);

export const selectSelectedId = createSelector(selectAlbumsState, (state: AlbumsState) => state.selectedId);

export const selectAlbum = (id: number) => createSelector(selectAlbumsEntities, (entities) => entities[id] ?? null);
