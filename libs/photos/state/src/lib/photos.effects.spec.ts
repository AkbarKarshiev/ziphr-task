import { TestBed, waitForAsync } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { cold, hot } from 'jasmine-marbles';
import { Observable, of } from 'rxjs';
import { mock, when } from "ts-mockito";

import { HTTP_ERROR_STUB } from "@ziphr-task/core/api/service";
import { LocalAsyncStorageService } from "@ziphr-task/core/storage/local";
import { providerOf } from "@ziphr-task/core/testing";
import { PhotosApiService } from "@ziphr-task/photos/api";
import { PhotoKeys, PHOTOS_STUB } from "@ziphr-task/photos/common";

import * as PhotosActions from './photos.actions';
import { PhotosEffects } from './photos.effects';

describe('PhotosEffects', () => {
  let actions: Observable<Action>;
  let effects: PhotosEffects;
  let localAsyncStorageServiceMock: LocalAsyncStorageService;
  let albumsApiServiceMock: PhotosApiService;

  beforeEach(() => {
    localAsyncStorageServiceMock = mock(LocalAsyncStorageService);
    albumsApiServiceMock = mock(PhotosApiService);

    // skip errors
    console.error = jest.fn();
  });

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        providers: [
          PhotosEffects,
          provideMockActions(() => actions),
          provideMockStore(),
          providerOf(LocalAsyncStorageService, localAsyncStorageServiceMock),
          providerOf(PhotosApiService, albumsApiServiceMock)
        ]
      });
    })
  );

  beforeEach(() => {
    effects = TestBed.inject(PhotosEffects);
  });

  describe('init$', () => {
    it('should return restore', () => {
      actions = hot('-a-|', { a: PhotosActions.init() });
      when(localAsyncStorageServiceMock.getItem(PhotoKeys.Photos)).thenReturn(of([]));

      const expected = hot('-a-|', { a: PhotosActions.restore({ photos: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });

  describe('load$', () => {
    it('should return loadSuccess', () => {
      const action = PhotosActions.load();
      const completion = PhotosActions.loadSuccess({ photos: PHOTOS_STUB });

      actions = hot('-a-|', { a: action });
      const response = cold('-a|', { a: PHOTOS_STUB });
      const expected = cold('--a|', { a: completion });
      when(albumsApiServiceMock.loadPhotos()).thenReturn(response);

      expect(effects.load$).toBeObservable(expected);
    });

    it('should return loadFailure', () => {
      const action = PhotosActions.load();
      const completion = PhotosActions.loadFailure({ error: HTTP_ERROR_STUB });

      actions = hot('-a-|', { a: action });
      const response = cold('-#|', {}, HTTP_ERROR_STUB);
      const expected = cold('--a|', { a: completion });
      when(albumsApiServiceMock.loadPhotos()).thenReturn(response);

      expect(effects.load$).toBeObservable(expected);
    });
  });
});
