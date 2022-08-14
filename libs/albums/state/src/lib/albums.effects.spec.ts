import { TestBed, waitForAsync } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { cold, hot } from "jasmine-marbles";
import { Observable, of } from 'rxjs';
import { mock, when } from "ts-mockito";

import { AlbumsApiService } from "@ziphr-task/albums/api";
import { AlbumKeys, ALBUMS_STUB } from "@ziphr-task/albums/common";
import { HTTP_ERROR_STUB } from "@ziphr-task/core/api/service";
import { LocalAsyncStorageService } from "@ziphr-task/core/storage/local";
import { providerOf } from "@ziphr-task/core/testing";

import * as AlbumsActions from './albums.actions';
import { AlbumsEffects } from './albums.effects';

describe('AlbumsEffects', () => {
  let actions: Observable<Action>;
  let effects: AlbumsEffects;
  let localAsyncStorageServiceMock: LocalAsyncStorageService;
  let albumsApiServiceMock: AlbumsApiService;

  beforeEach(() => {
    localAsyncStorageServiceMock = mock(LocalAsyncStorageService);
    albumsApiServiceMock = mock(AlbumsApiService);

    // skip errors
    console.error = jest.fn();
  });

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        providers: [
          AlbumsEffects,
          provideMockActions(() => actions),
          provideMockStore(),
          providerOf(LocalAsyncStorageService, localAsyncStorageServiceMock),
          providerOf(AlbumsApiService, albumsApiServiceMock)
        ]
      });
    })
  );

  beforeEach(() => {
    effects = TestBed.inject(AlbumsEffects);
  });

  describe('init$', () => {
    it('should return restore', () => {
      actions = hot('-a-|', { a: AlbumsActions.init() });
      when(localAsyncStorageServiceMock.getItem(AlbumKeys.Albums)).thenReturn(of([]));

      const expected = hot('-a-|', { a: AlbumsActions.restore({ albums: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });

  describe('load$', () => {
    it('should return loadSuccess', () => {
      const action = AlbumsActions.load();
      const completion = AlbumsActions.loadSuccess({ albums: ALBUMS_STUB });

      actions = hot('-a-|', { a: action });
      const response = cold('-a|', { a: ALBUMS_STUB });
      const expected = cold('--a|', { a: completion });
      when(albumsApiServiceMock.loadAlbums()).thenReturn(response);

      expect(effects.load$).toBeObservable(expected);
    });

    it('should return loadFailure', () => {
      const action = AlbumsActions.load();
      const completion = AlbumsActions.loadFailure({ error: HTTP_ERROR_STUB });

      actions = hot('-a-|', { a: action });
      const response = cold('-#|', {}, HTTP_ERROR_STUB);
      const expected = cold('--a|', { a: completion });
      when(albumsApiServiceMock.loadAlbums()).thenReturn(response);

      expect(effects.load$).toBeObservable(expected);
    });
  });
});
