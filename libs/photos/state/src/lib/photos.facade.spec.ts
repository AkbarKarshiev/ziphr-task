import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { of } from "rxjs";
import { anything, mock, when } from "ts-mockito";

import { LocalAsyncStorageService } from "@ziphr-task/core/storage/local";
import { providerOf } from "@ziphr-task/core/testing";
import { PhotosApiService } from "@ziphr-task/photos/api";

import { PhotosEffects } from './photos.effects';
import { PhotosFacade } from './photos.facade';
import {
  PHOTOS_FEATURE_KEY,
  photosReducer,
} from './photos.reducer';

describe('PhotosFacade', () => {
  let facade: PhotosFacade;
  let localAsyncStorageServiceMock: LocalAsyncStorageService;
  let photosApiServiceMock: PhotosApiService;

  describe('used in NgModule', () => {
    beforeEach(() => {
      localAsyncStorageServiceMock = mock(LocalAsyncStorageService);
      photosApiServiceMock = mock(PhotosApiService);
    });

    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(PHOTOS_FEATURE_KEY, photosReducer),
          EffectsModule.forFeature([PhotosEffects])
        ],
        providers: [
          PhotosFacade,
          providerOf(LocalAsyncStorageService, localAsyncStorageServiceMock),
          providerOf(PhotosApiService, photosApiServiceMock)
        ]
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule
        ]
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule]});

      when(localAsyncStorageServiceMock.getItem(anything())).thenReturn(of(null));

      facade = TestBed.inject(PhotosFacade);
    });

    it('should create', async () => {
      expect(facade).toBeTruthy();
    });
  });
});
