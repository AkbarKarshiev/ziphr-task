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
import { PostsApiService } from "@ziphr-task/posts/api";
import { PostKeys, POSTS_STUB } from "@ziphr-task/posts/common";

import * as PostsActions from './posts.actions';
import { PostsEffects } from './posts.effects';

describe('PostsEffects', () => {
  let actions: Observable<Action>;
  let effects: PostsEffects;
  let localAsyncStorageServiceMock: LocalAsyncStorageService;
  let postsApiServiceMock: PostsApiService;

  beforeEach(() => {
    localAsyncStorageServiceMock = mock(LocalAsyncStorageService);
    postsApiServiceMock = mock(PostsApiService);

    // skip errors
    console.error = jest.fn();
  });

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        providers: [
          PostsEffects,
          provideMockActions(() => actions),
          provideMockStore(),
          providerOf(LocalAsyncStorageService, localAsyncStorageServiceMock),
          providerOf(PostsApiService, postsApiServiceMock)
        ]
      });
    })
  );

  beforeEach(() => {
    effects = TestBed.inject(PostsEffects);
  });

  describe('init$', () => {
    it('should return restore', () => {
      actions = hot('-a-|', { a: PostsActions.init() });
      when(localAsyncStorageServiceMock.getItem(PostKeys.Posts)).thenReturn(of([]));

      const expected = hot('-a-|', { a: PostsActions.restore({ posts: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });

  describe('load$', () => {
    it('should return loadSuccess', () => {
      const action = PostsActions.load();
      const completion = PostsActions.loadSuccess({ posts: POSTS_STUB });

      actions = hot('-a-|', { a: action });
      const response = cold('-a|', { a: POSTS_STUB });
      const expected = cold('--a|', { a: completion });
      when(postsApiServiceMock.loadPosts()).thenReturn(response);

      expect(effects.load$).toBeObservable(expected);
    });

    it('should return loadFailure', () => {
      const action = PostsActions.load();
      const completion = PostsActions.loadFailure({ error: HTTP_ERROR_STUB });

      actions = hot('-a-|', { a: action });
      const response = cold('-#|', {}, HTTP_ERROR_STUB);
      const expected = cold('--a|', { a: completion });
      when(postsApiServiceMock.loadPosts()).thenReturn(response);

      expect(effects.load$).toBeObservable(expected);
    });
  });
});
