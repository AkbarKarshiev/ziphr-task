import { CommonModule } from "@angular/common";
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { MockModule } from "ng-mocks";
import { of, ReplaySubject } from "rxjs";
import { mock, when } from "ts-mockito";

import { Album, ALBUM_STUB } from "@ziphr-task/albums/common";
import { AlbumsFacade } from "@ziphr-task/albums/state";
import { AlbumPhotosTableModule } from "@ziphr-task/albums/ui/album-photos-table";
import { PATHS_STUB } from "@ziphr-task/core/navigation/common";
import { NavigationPipesModule } from "@ziphr-task/core/navigation/ui/pipes";
import { RootStateFacade } from "@ziphr-task/core/store/root";
import { providerOf } from "@ziphr-task/core/testing";
import { BreadcrumbModule } from "@ziphr-task/ui/breadcrumb";

import { AlbumPageComponent } from './album-page.component';
import { AlbumPageComponentPo } from "./album-page.component.po";

describe('AlbumPageComponent', () => {
  let pageObject: AlbumPageComponentPo;
  let fixture: ComponentFixture<AlbumPageComponent>;
  let rootFacadeMock: RootStateFacade;
  let albumsFacadeMock: AlbumsFacade;
  let albumById$: ReplaySubject<Album>;

  const ID = '1';

  beforeEach(() => {
    albumsFacadeMock = mock(AlbumsFacade);
    rootFacadeMock = mock(RootStateFacade);

    albumById$ = new ReplaySubject<Album>(1);
  });

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [
          CommonModule,
          RouterTestingModule,
          MockModule(NavigationPipesModule),
          MockModule(BreadcrumbModule),
          MockModule(AlbumPhotosTableModule),
        ],
        providers: [
          PATHS_STUB,
          providerOf(RootStateFacade, rootFacadeMock),
          providerOf(AlbumsFacade, albumsFacadeMock)
        ],
        declarations: [AlbumPageComponent]
      }).compileComponents();
    })
  )

  beforeEach(() => {
    when(rootFacadeMock.routeParams$).thenReturn(of({ id: ID }));
    when(albumsFacadeMock.albumById$(ID)).thenReturn(albumById$);

    fixture = TestBed.createComponent(AlbumPageComponent);
    pageObject = new AlbumPageComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    albumById$.next(ALBUM_STUB);
    fixture.detectChanges();

    expect(pageObject.breadcrumb).toBeTruthy();
    expect(pageObject.title).toBeTruthy();
    expect(pageObject.table).toBeTruthy();
  });
});
