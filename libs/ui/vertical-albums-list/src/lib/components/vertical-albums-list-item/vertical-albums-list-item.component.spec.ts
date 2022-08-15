import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { MockModule } from "ng-mocks";

import { Album } from "@ziphr-task/albums/common";
import { PATHS_STUB } from "@ziphr-task/core/navigation/common";
import { NavigationPipesModule } from "@ziphr-task/core/navigation/ui/pipes";

import { VerticalAlbumsListItemComponent } from './vertical-albums-list-item.component';
import { VerticalAlbumsListItemComponentPo } from "./vertical-albums-list-item.component.po";

@Component({
  template: `<ziphr-task-vertical-albums-list-item
    automation-id="item"
    [album]="album"
  ></ziphr-task-vertical-albums-list-item>`
})
export class WrapperComponent {
  album: Album = {
    id: 1,
    userId: 1,
    title: "quidem molestiae enim"
  }
}

describe('VerticalAlbumsListItemComponent', () => {
  let pageObject: VerticalAlbumsListItemComponentPo;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        RouterTestingModule,
        MockModule(NavigationPipesModule)
      ],
      providers: [PATHS_STUB],
      declarations: [VerticalAlbumsListItemComponent, WrapperComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new VerticalAlbumsListItemComponentPo(fixtureWrapper);
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.title).toBeTruthy();
  });
});
