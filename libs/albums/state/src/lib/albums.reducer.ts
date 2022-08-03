import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import { Album } from "@ziphr-task/albums/common";

import * as AlbumsActions from './albums.actions';

export const ALBUMS_FEATURE_KEY = 'albums';

export interface AlbumsState extends EntityState<Album> {
  selectedId: number | null;
  loaded: boolean;
}

export interface AlbumsPartialState {
  readonly [ALBUMS_FEATURE_KEY]: AlbumsState;
}

export const albumsAdapter: EntityAdapter<Album> =
  createEntityAdapter<Album>();

export const initialAlbumsState: AlbumsState = albumsAdapter.getInitialState({
  selectedId: null,
  loaded: false,
});

const reducer = createReducer(
  initialAlbumsState,
  on(
    AlbumsActions.restore,
    (state, { albums }): AlbumsState => {
      return albumsAdapter.upsertMany(albums, {
        ...state,
        loaded: true
      })
    }
  ),
  on(
    AlbumsActions.loadSuccess,
    (state, { albums }): AlbumsState => {
      return albumsAdapter.setAll(albums, {
        ...state,
        loaded: true
      })
    }
  ),
  on(
    AlbumsActions.loadFailure,
    (state): AlbumsState => ({
      ...state,
      loaded: true,
    })
  )
);

export function albumsReducer(state: AlbumsState | undefined, action: Action): AlbumsState {
  return reducer(state, action);
}
