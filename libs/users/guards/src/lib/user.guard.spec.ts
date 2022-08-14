import { TestBed, waitForAsync } from '@angular/core/testing';
import { UrlTree } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { cold } from "jasmine-marbles";
import { ReplaySubject } from "rxjs";
import { anything, mock, when } from "ts-mockito";

import { ALBUM_STUB } from "@ziphr-task/albums/common";
import { NAVIGATION_PATHS } from "@ziphr-task/core/navigation/common";
import { NavigationService } from "@ziphr-task/core/navigation/service";
import { providerOf } from "@ziphr-task/core/testing";
import { UsersApiService } from "@ziphr-task/users/api";
import { USER_STUB, UserResponse } from "@ziphr-task/users/common";

import { UserGuard } from './user.guard';

describe('UserGuard', () => {
  let guard: UserGuard;
  let navigationServiceMock: NavigationService;
  let userApiServiceMock: UsersApiService;
  let loadUserById$: ReplaySubject<Partial<UserResponse>>;
  const SNAPSHOT_STUB: any = {
    params: { id: ALBUM_STUB.id + '' },
  };
  const URL_TREE_STUB = {} as UrlTree;

  beforeEach(() => {
    navigationServiceMock = mock(NavigationService);
    userApiServiceMock = mock(UsersApiService);

    loadUserById$ = new ReplaySubject<Partial<UserResponse>>(1);
  });

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        providers: [
          UserGuard,
          providerOf(NavigationService, navigationServiceMock),
          providerOf(UsersApiService, userApiServiceMock)
        ]
      }).compileComponents();
    })
  )

  beforeEach(() => {
    when(navigationServiceMock.getPaths()).thenReturn(NAVIGATION_PATHS);
    when(userApiServiceMock.loadOneUser(USER_STUB.id + '')).thenReturn(loadUserById$);
    when(navigationServiceMock.createUrlTree(anything())).thenReturn(URL_TREE_STUB);

    guard = TestBed.inject(UserGuard);
  })

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should return true', () => {
    loadUserById$.next(USER_STUB);

    expect(guard.canActivate(SNAPSHOT_STUB)).toBeObservable(cold('a', { a: true }));
  });

  it('should return url', () => {
    loadUserById$.next({});

    expect(guard.canActivate(SNAPSHOT_STUB)).toBeObservable(cold('a', { a: URL_TREE_STUB }));
  });
});
