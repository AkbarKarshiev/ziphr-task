import { Component } from "@angular/core";
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { MockModule } from "ng-mocks";

import { PATHS_STUB } from "@ziphr-task/core/navigation/common";
import { NavigationPipesModule } from "@ziphr-task/core/navigation/ui/pipes";
import { Photo } from "@ziphr-task/photos/common";

import { VerticalPhotosListItemComponent } from './vertical-photos-list-item.component';
import { VerticalPhotosListItemComponentPo } from "./vertical-photos-list-item.component.po";

@Component({
  template: `<ziphr-task-vertical-photos-list-item
    automation-id="item"
    [photo]="photo"
  ></ziphr-task-vertical-photos-list-item>`
})
export class WrapperComponent {
  photo: Photo = {
    albumId: 1,
    id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952"
  }
}

describe('VerticalPhotosListItemComponent', () => {
  let pageObject: VerticalPhotosListItemComponentPo;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MockModule(NavigationPipesModule)
      ],
      providers: [PATHS_STUB],
      declarations: [VerticalPhotosListItemComponent, WrapperComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new VerticalPhotosListItemComponentPo(fixtureWrapper);
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.photoSrcValue).toBe('https://via.placeholder.com/150/92c952');
    expect(pageObject.title).toBeTruthy();
    expect(pageObject.link).toBeTruthy();
  });
});
