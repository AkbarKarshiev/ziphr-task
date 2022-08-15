import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockModule } from "ng-mocks";

import { Album } from "@ziphr-task/albums/common";

import { VerticalAlbumsListItemModule } from "./components/vertical-albums-list-item/vertical-albums-list-item.module";
import { VerticalAlbumsListComponent } from './vertical-albums-list.component';
import { VerticalAlbumsListComponentPo } from "./vertical-albums-list.component.po";

@Component({
  template: `<ziphr-task-vertical-albums-list automation-id="list" [albums]="albums"></ziphr-task-vertical-albums-list>`
})
export class WrapperComponent {
  albums: Album[] = [
    {
      id: 1,
      userId: 1,
      title: "quidem molestiae enim"
    },
    {
      id: 2,
      userId: 1,
      title: "quidem molestiae enim"
    },
    {
      id: 3,
      userId: 1,
      title: "quidem molestiae enim"
    }
  ];
}

describe('VerticalAlbumsListComponent', () => {
  let pageObject: VerticalAlbumsListComponentPo;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, MockModule(VerticalAlbumsListItemModule)],
      declarations: [VerticalAlbumsListComponent, WrapperComponent],
    }).compileComponents();

  });

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new VerticalAlbumsListComponentPo(fixtureWrapper);
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.items.length).toBe(3);
  });
});
