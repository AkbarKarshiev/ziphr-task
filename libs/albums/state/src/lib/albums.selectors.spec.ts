import { Album, ALBUMS_STUB } from "@ziphr-task/albums/common";

import {
  ALBUMS_FEATURE_KEY,
  albumsAdapter,
  AlbumsPartialState,
  AlbumsState,
  initialAlbumsState
} from "./albums.reducer";
import * as AlbumsSelectors from './albums.selectors';

describe('Albums Selectors', () => {
  const getStore = (state?: Partial<AlbumsState>, albums: Album[] = []): AlbumsPartialState => ({
    [ALBUMS_FEATURE_KEY]: albumsAdapter.setAll(albums, { ...initialAlbumsState, ...state})
  });

  const SELECTED_ID_STUB = ALBUMS_STUB[0].id;

  let state: AlbumsPartialState;

  beforeEach(() => {
    state = getStore();
  });

  it('selectAlbums() should return albums ', () => {
    state = getStore({}, ALBUMS_STUB);
    const results = AlbumsSelectors.selectAlbums(state);

    expect(results.length).toBe(ALBUMS_STUB.length);
  });

  it('selectAlbumsCount() should return count', () => {
    state = getStore({}, ALBUMS_STUB);
    const result = AlbumsSelectors.selectAlbumsCount(state);

    expect(result).toBe(ALBUMS_STUB.length);
  });

  it('selectAlbumsEntities() should return albums entities', () => {
    state = getStore({}, ALBUMS_STUB);
    const result = AlbumsSelectors.selectAlbumsEntities(state);

    expect(Object.keys(result).length).toBe(ALBUMS_STUB.length);
  });

  it('selectAlbumsLoaded() should return current "loaded" status', () => {
    state = getStore({ loaded: true });
    const result = AlbumsSelectors.selectAlbumsLoaded(state);

    expect(result).toBeTruthy();
  });

  it('selectAlbum() should return album by id', () => {
    state = getStore({}, ALBUMS_STUB);
    const result = AlbumsSelectors.selectAlbum(SELECTED_ID_STUB + '')(state);

    expect(result?.id).toBe(SELECTED_ID_STUB);
  });
});
