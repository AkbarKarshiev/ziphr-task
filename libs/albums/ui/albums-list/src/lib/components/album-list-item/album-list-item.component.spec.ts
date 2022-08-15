import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { MockModule } from "ng-mocks";
import { ReplaySubject } from "rxjs";
import { mock, when } from "ts-mockito";

import { Album } from "@ziphr-task/albums/common";
import { PATHS_STUB } from "@ziphr-task/core/navigation/common";
import { NavigationPipesModule } from "@ziphr-task/core/navigation/ui/pipes";
import { providerOf } from "@ziphr-task/core/testing";
import { Photo, PHOTOS_STUB } from "@ziphr-task/photos/common";
import { PhotosFacade } from "@ziphr-task/photos/state";
import { CardModule } from "@ziphr-task/ui/card";

import { AlbumListItemComponent } from './album-list-item.component';
import { AlbumsListComponentPo } from "./album-list-item.component.po";

@Component({
  template: `<ziphr-task-album-list-item automation-id="item" [album]="album"></ziphr-task-album-list-item>`
})
export class WrapperComponent {
  album: Album = {
    id: 1,
    userId: 1,
    title: "quidem molestiae enim"
  }
}

describe('AlbumListItemComponent', () => {
  let pageObject: AlbumsListComponentPo;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;
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
        RouterTestingModule,
        MockModule(CardModule),
        MockModule(NavigationPipesModule)
      ],
      providers: [
        PATHS_STUB,
        providerOf(PhotosFacade, photosFacadeMock)
      ],
      declarations: [AlbumListItemComponent, WrapperComponent],
    }).compileComponents();

  });

  beforeEach(() => {
    when(photosFacadeMock.photos$).thenReturn(photos$);

    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new AlbumsListComponentPo(fixtureWrapper);
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    photos$.next(PHOTOS_STUB);
    fixtureWrapper.detectChanges();

    expect(pageObject.titleLink).toBeTruthy();
    expect(pageObject.userLink).toBeTruthy();
    expect(pageObject.photos.length).toBeLessThanOrEqual(4);
  });
});
