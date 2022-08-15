import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockModule } from "ng-mocks";

import { Photo } from "@ziphr-task/photos/common";

import { CardPhotosListComponent } from './card-photos-list.component';
import { CardPhotosListComponentPo } from "./card-photos-list.component.po";
import { CardPhotosListItemModule } from "./components/card-photos-list-item/card-photos-list-item.module";

@Component({
  template: `<ziphr-task-card-photos-list automation-id="list" [photos]="photos"></ziphr-task-card-photos-list>`
})
export class WrapperComponent {
  photos: Photo[] = [
    {
      albumId: 1,
      id: 1,
      title: "accusamus beatae ad facilis cum similique qui sunt",
      url: "https://via.placeholder.com/600/92c952",
      thumbnailUrl: "https://via.placeholder.com/150/92c952"
    },
    {
      albumId: 2,
      id: 1,
      title: "accusamus beatae ad facilis cum similique qui sunt",
      url: "https://via.placeholder.com/600/92c952",
      thumbnailUrl: "https://via.placeholder.com/150/92c952"
    },
    {
      albumId: 3,
      id: 1,
      title: "accusamus beatae ad facilis cum similique qui sunt",
      url: "https://via.placeholder.com/600/92c952",
      thumbnailUrl: "https://via.placeholder.com/150/92c952"
    },
  ];
}

describe('CardPhotosListComponent', () => {
  let pageObject: CardPhotosListComponentPo;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        MockModule(CardPhotosListItemModule)
      ],
      declarations: [CardPhotosListComponent, WrapperComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new CardPhotosListComponentPo(fixtureWrapper);
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.row).toBeTruthy();
    expect(pageObject.item.length).toBe(3);
  });
});
