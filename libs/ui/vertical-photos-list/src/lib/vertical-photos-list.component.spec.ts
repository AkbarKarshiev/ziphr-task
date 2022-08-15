import { CommonModule } from "@angular/common";
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockModule } from "ng-mocks";
import { ReplaySubject } from "rxjs";
import { mock, when } from "ts-mockito";

import { providerOf } from "@ziphr-task/core/testing";
import { Photo, PHOTOS_STUB } from "@ziphr-task/photos/common";
import { PhotosFacade } from "@ziphr-task/photos/state";

import { VerticalPhotosListItemModule } from "./components/vertical-photos-list-item/vertical-photos-list-item.module";
import { VerticalPhotosListComponent } from './vertical-photos-list.component';
import { VerticalPhotosListComponentPo } from "./vertical-photos-list.component.po";

describe('VerticalPhotosListComponent', () => {
  let pageObject: VerticalPhotosListComponentPo;
  let fixture: ComponentFixture<VerticalPhotosListComponent>;
  let photosFacadeMock: PhotosFacade;
  let photos$: ReplaySubject<Photo[]>;

  beforeEach(() => {
    photosFacadeMock = mock(PhotosFacade);

    photos$ = new ReplaySubject<Photo[]>(1);
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        MockModule(VerticalPhotosListItemModule)
      ],
      providers: [providerOf(PhotosFacade, photosFacadeMock)],
      declarations: [VerticalPhotosListComponent],
    }).compileComponents();

  });

  beforeEach(() => {
    when(photosFacadeMock.photos$).thenReturn(photos$);

    fixture = TestBed.createComponent(VerticalPhotosListComponent);
    pageObject = new VerticalPhotosListComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    photos$.next(PHOTOS_STUB);
    fixture.detectChanges();

    expect(pageObject.row).toBeTruthy();
    expect(pageObject.item.length).toBe(PHOTOS_STUB.length);
  });
});
