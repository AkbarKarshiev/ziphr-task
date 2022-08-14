import { CommonModule } from "@angular/common";
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { MockModule } from "ng-mocks";
import { of, ReplaySubject } from "rxjs";
import { mock, when } from "ts-mockito";

import { PATHS_STUB } from "@ziphr-task/core/navigation/common";
import { NavigationPipesModule } from "@ziphr-task/core/navigation/ui/pipes";
import { RootStateFacade } from "@ziphr-task/core/store/root";
import { providerOf } from "@ziphr-task/core/testing";
import { Photo, PHOTO_STUB } from "@ziphr-task/photos/common";
import { PhotosFacade } from "@ziphr-task/photos/state";
import { BreadcrumbModule } from "@ziphr-task/ui/breadcrumb";

import { PhotoPageComponent } from './photo-page.component';
import { PhotoPageComponentPo } from "./photo-page.component.po";

describe('PhotoPageComponent', () => {
  let pageObject: PhotoPageComponentPo;
  let fixture: ComponentFixture<PhotoPageComponent>;
  let rootFacadeMock: RootStateFacade;
  let photosFacadeMock: PhotosFacade;
  let photoById$: ReplaySubject<Photo>;

  const ID = '1';

  beforeEach(() => {
    photosFacadeMock = mock(PhotosFacade);
    rootFacadeMock = mock(RootStateFacade);

    photoById$ = new ReplaySubject<Photo>(1);
  });

  beforeEach(
    waitForAsync(() => {
      void TestBed.configureTestingModule({
        imports: [
          CommonModule,
          RouterTestingModule,
          MockModule(NavigationPipesModule),
          MockModule(BreadcrumbModule),
        ],
        providers: [
          PATHS_STUB,
          providerOf(RootStateFacade, rootFacadeMock),
          providerOf(PhotosFacade, photosFacadeMock)
        ],
        declarations: [PhotoPageComponent]
      }).compileComponents();
    })
  )

  beforeEach(() => {
    when(rootFacadeMock.routeParams$).thenReturn(of({ id: ID }));
    when(photosFacadeMock.photoById$(ID)).thenReturn(photoById$);

    fixture = TestBed.createComponent(PhotoPageComponent);
    pageObject = new PhotoPageComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    photoById$.next(PHOTO_STUB);
    fixture.detectChanges();

    expect(pageObject.breadcrumb).toBeTruthy();
    expect(pageObject.title).toBeTruthy();
    expect(pageObject.image).toBeTruthy();
  });
});
