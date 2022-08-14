import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { of } from "rxjs";
import { anything, mock, when } from "ts-mockito";

import { AlbumsApiService } from "@ziphr-task/albums/api";
import { LocalAsyncStorageService } from "@ziphr-task/core/storage/local";
import { providerOf } from "@ziphr-task/core/testing";

import { AlbumsEffects } from './albums.effects';
import { AlbumsFacade } from './albums.facade';
import { ALBUMS_FEATURE_KEY, albumsReducer } from './albums.reducer';


describe('AlbumsFacade', () => {
  let facade: AlbumsFacade;
  let localAsyncStorageServiceMock: LocalAsyncStorageService;
  let albumsApiServiceMock: AlbumsApiService;

  describe('used in NgModule', () => {
    beforeEach(() => {
      localAsyncStorageServiceMock = mock(LocalAsyncStorageService);
      albumsApiServiceMock = mock(AlbumsApiService);
    });

    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(ALBUMS_FEATURE_KEY, albumsReducer),
          EffectsModule.forFeature([AlbumsEffects])
        ],
        providers: [
          AlbumsFacade,
          providerOf(LocalAsyncStorageService, localAsyncStorageServiceMock),
          providerOf(AlbumsApiService, albumsApiServiceMock)
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

      facade = TestBed.inject(AlbumsFacade);
    });

    it('should create', async () => {
      expect(facade).toBeTruthy();
    });
  });
});
