import { TestBed, waitForAsync } from '@angular/core/testing';
import { UrlTree } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { cold } from "jasmine-marbles";
import { ReplaySubject } from "rxjs";
import { anything, mock, when } from "ts-mockito";

import { NAVIGATION_PATHS } from "@ziphr-task/core/navigation/common";
import { NavigationService } from "@ziphr-task/core/navigation/service";
import { providerOf } from "@ziphr-task/core/testing";
import { Photo, PHOTO_STUB } from "@ziphr-task/photos/common";
import { PhotosFacade } from "@ziphr-task/photos/state";

import { PhotoGuard } from './photo.guard';

describe('PhotoGuard', () => {
  let guard: PhotoGuard;
  let navigationServiceMock: NavigationService;
  let photosFacadeMock: PhotosFacade;
  let photoByIdLoaded$: ReplaySubject<Photo | null>;
  const SNAPSHOT_STUB: any = {
    params: { id: PHOTO_STUB.id + '' },
  };
  const URL_TREE_STUB = {} as UrlTree;

  beforeEach(() => {
    navigationServiceMock = mock(NavigationService);
    photosFacadeMock = mock(PhotosFacade);

    photoByIdLoaded$ = new ReplaySubject<Photo | null>(1);
  });

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        providers: [
          PhotoGuard,
          providerOf(NavigationService, navigationServiceMock),
          providerOf(PhotosFacade, photosFacadeMock)
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    when(navigationServiceMock.getPaths()).thenReturn(NAVIGATION_PATHS);
    when(photosFacadeMock.photoByIdLoaded$(PHOTO_STUB.id + '')).thenReturn(photoByIdLoaded$);
    when(navigationServiceMock.createUrlTree(anything())).thenReturn(URL_TREE_STUB);

    guard = TestBed.inject(PhotoGuard);
  });

  it('should create an instance', () => {
    expect(guard).toBeTruthy();
  });

  it('should return true', () => {
    photoByIdLoaded$.next(PHOTO_STUB);

    expect(guard.canActivate(SNAPSHOT_STUB)).toBeObservable(cold('a', { a: true }));
  });

  it('should return url', () => {
    photoByIdLoaded$.next(null);

    expect(guard.canActivate(SNAPSHOT_STUB)).toBeObservable(cold('a', { a: URL_TREE_STUB }));
  });
});
