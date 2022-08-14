import { TestBed, waitForAsync } from '@angular/core/testing';
import { UrlTree } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { cold } from "jasmine-marbles";
import { ReplaySubject } from "rxjs";
import { anything, mock, when } from "ts-mockito";

import { Album, ALBUM_STUB } from "@ziphr-task/albums/common";
import { AlbumsFacade } from "@ziphr-task/albums/state";
import { NAVIGATION_PATHS } from "@ziphr-task/core/navigation/common";
import { NavigationService } from "@ziphr-task/core/navigation/service";
import { providerOf } from "@ziphr-task/core/testing";

import { AlbumGuard } from './album.guard';

describe('AlbumGuard', () => {
  let guard: AlbumGuard;
  let navigationServiceMock: NavigationService;
  let albumsFacadeMock: AlbumsFacade;
  let albumByIdLoaded$: ReplaySubject<Album | null>;
  const SNAPSHOT_STUB: any = {
    params: { id: ALBUM_STUB.id + '' },
  };
  const URL_TREE_STUB = {} as UrlTree;

  beforeEach(() => {
    navigationServiceMock = mock(NavigationService);
    albumsFacadeMock = mock(AlbumsFacade);

    albumByIdLoaded$ = new ReplaySubject<Album | null>(1);
  });

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        providers: [
          AlbumGuard,
          providerOf(NavigationService, navigationServiceMock),
          providerOf(AlbumsFacade, albumsFacadeMock)
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    when(navigationServiceMock.getPaths()).thenReturn(NAVIGATION_PATHS);
    when(albumsFacadeMock.albumByIdLoaded$(ALBUM_STUB.id + '')).thenReturn(albumByIdLoaded$);
    when(navigationServiceMock.createUrlTree(anything())).thenReturn(URL_TREE_STUB);

    guard = TestBed.inject(AlbumGuard);
  });

  it('should create an instance', () => {
    expect(guard).toBeTruthy();
  });

  it('should return true', () => {
    albumByIdLoaded$.next(ALBUM_STUB);

    expect(guard.canActivate(SNAPSHOT_STUB)).toBeObservable(cold('a', { a: true }));
  });

  it('should return url', () => {
    albumByIdLoaded$.next(null);

    expect(guard.canActivate(SNAPSHOT_STUB)).toBeObservable(cold('a', { a: URL_TREE_STUB }));
  });
});
