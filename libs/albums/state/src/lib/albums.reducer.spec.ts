import { Action } from '@ngrx/store';

import { Album, ALBUMS_STUB } from "@ziphr-task/albums/common";

import * as AlbumsActions from './albums.actions';
import {
  albumsAdapter,
  albumsReducer,
  AlbumsState,
  initialAlbumsState,
} from './albums.reducer';

describe('Albums Reducer', () => {
  const getState = (
    state?: Partial<AlbumsState>,
    albums: Album[] = []
  ): AlbumsState => albumsAdapter.setAll(albums, { ...initialAlbumsState, ...state });

  let state: AlbumsState;

  beforeEach(() => {
    state = getState();
  });

  it('restore() should restore albums', () => {
    const action = AlbumsActions.restore({ albums: ALBUMS_STUB });
    const result = albumsReducer(state, action);

    expect(result.loaded).toBeTruthy();
    expect(result.ids.length).toBe(ALBUMS_STUB.length);
  });

  it('loadSuccess() should add albums', () => {
    const action = AlbumsActions.loadSuccess({ albums: ALBUMS_STUB });
    const result = albumsReducer(state, action);

    expect(result.loaded).toBeTruthy();
    expect(result.ids.length).toBe(ALBUMS_STUB.length);
  });

  it('should return the previous state', () => {
    const action = {} as Action;
    const result = albumsReducer(initialAlbumsState, action);

    expect(result).toBe(initialAlbumsState);
  });
});
