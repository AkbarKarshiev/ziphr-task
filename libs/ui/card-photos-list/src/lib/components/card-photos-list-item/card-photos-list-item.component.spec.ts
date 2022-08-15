import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { MockModule } from "ng-mocks";

import { PATHS_STUB } from "@ziphr-task/core/navigation/common";
import { NavigationPipesModule } from "@ziphr-task/core/navigation/ui/pipes";
import { Photo } from "@ziphr-task/photos/common";

import { CardPhotosListItemComponent } from './card-photos-list-item.component';
import { CardPhotosListItemComponentPo } from "./card-photos-list-item.component.po";

@Component({
  template: `<ziphr-task-card-photos-list-item
    automation-id="item"
    [photo]="photo"
    [viewAlbumLinkEnabled]="viewAlbumLinkEnabled"
  ></ziphr-task-card-photos-list-item>`
})
export class WrapperComponent {
  viewAlbumLinkEnabled = true;
  photo: Photo = {
    albumId: 1,
    id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952"
  }
}

describe('CardPhotosListItemComponent', () => {
  let pageObject: CardPhotosListItemComponentPo;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        RouterTestingModule,
        MockModule(NavigationPipesModule)
      ],
      providers: [PATHS_STUB],
      declarations: [CardPhotosListItemComponent, WrapperComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new CardPhotosListItemComponentPo(fixtureWrapper);
  })

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it('should show with album link', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.photoSrcValue).toBe('https://via.placeholder.com/600/92c952');
    expect(pageObject.body).toBeTruthy();
    expect(pageObject.title).toBeTruthy();
    expect(pageObject.album).toBeTruthy();
  });

  it('should show without album link', () => {
    fixtureWrapper.componentInstance.viewAlbumLinkEnabled = false;
    fixtureWrapper.detectChanges();

    expect(pageObject.photoSrcValue).toBe('https://via.placeholder.com/600/92c952');
    expect(pageObject.body).toBeTruthy();
    expect(pageObject.title).toBeTruthy();
    expect(pageObject.album).toBeFalsy();
  });
});
