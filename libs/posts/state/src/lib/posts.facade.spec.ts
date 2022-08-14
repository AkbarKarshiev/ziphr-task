import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { of } from "rxjs";
import { anything, mock, when } from "ts-mockito";

import { LocalAsyncStorageService } from "@ziphr-task/core/storage/local";
import { providerOf } from "@ziphr-task/core/testing";
import { PostsApiService } from "@ziphr-task/posts/api";

import { PostsEffects } from './posts.effects';
import { PostsFacade } from './posts.facade';
import {
  POSTS_FEATURE_KEY,
  postsReducer,
  PostsState,
} from './posts.reducer';


describe('PostsFacade', () => {
  let facade: PostsFacade;
  let localAsyncStorageServiceMock: LocalAsyncStorageService;
  let postsApiServiceMock: PostsApiService;

  describe('used in NgModule', () => {
    beforeEach(() => {
      localAsyncStorageServiceMock = mock(LocalAsyncStorageService);
      postsApiServiceMock = mock(PostsApiService);
    });

    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(POSTS_FEATURE_KEY, postsReducer),
          EffectsModule.forFeature([PostsEffects])
        ],
        providers: [
          PostsFacade,
          providerOf(LocalAsyncStorageService, localAsyncStorageServiceMock),
          providerOf(PostsApiService, postsApiServiceMock)
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

      facade = TestBed.inject(PostsFacade);
    });

    it('should create', async () => {
      expect(facade).toBeTruthy();
    });
  });
});
