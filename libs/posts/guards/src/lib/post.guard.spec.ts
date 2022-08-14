import { TestBed, waitForAsync } from '@angular/core/testing';
import { UrlTree } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { cold } from "jasmine-marbles";
import { ReplaySubject } from "rxjs";
import { anything, mock, when } from "ts-mockito";

import { NAVIGATION_PATHS } from "@ziphr-task/core/navigation/common";
import { NavigationService } from "@ziphr-task/core/navigation/service";
import { providerOf } from "@ziphr-task/core/testing";
import { Post, POST_STUB } from "@ziphr-task/posts/common";
import { PostsFacade } from "@ziphr-task/posts/state";

import { PostGuard } from './post.guard';

describe('PostGuard', () => {
  let guard: PostGuard;
  let navigationServiceMock: NavigationService;
  let postsFacadeMock: PostsFacade;
  let postByIdLoaded$: ReplaySubject<Post | null>;
  const SNAPSHOT_STUB: any = {
    params: { id: POST_STUB.id + '' },
  };
  const URL_TREE_STUB = {} as UrlTree;

  beforeEach(() => {
    navigationServiceMock = mock(NavigationService);
    postsFacadeMock = mock(PostsFacade);

    postByIdLoaded$ = new ReplaySubject<Post | null>(1);
  });

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        providers: [
          PostGuard,
          providerOf(NavigationService, navigationServiceMock),
          providerOf(PostsFacade, postsFacadeMock)
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    when(navigationServiceMock.getPaths()).thenReturn(NAVIGATION_PATHS);
    when(postsFacadeMock.postByIdLoaded$(POST_STUB.id + '')).thenReturn(postByIdLoaded$);
    when(navigationServiceMock.createUrlTree(anything())).thenReturn(URL_TREE_STUB);

    guard = TestBed.inject(PostGuard);
  });

  it('should create an instance', () => {
    expect(guard).toBeTruthy();
  });

  it('should return true', () => {
    postByIdLoaded$.next(POST_STUB);

    expect(guard.canActivate(SNAPSHOT_STUB)).toBeObservable(cold('a', { a: true }));
  });

  it('should return url', () => {
    postByIdLoaded$.next(null);

    expect(guard.canActivate(SNAPSHOT_STUB)).toBeObservable(cold('a', { a: URL_TREE_STUB }));
  });
});
