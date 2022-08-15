import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockModule } from "ng-mocks";

import { Album } from "@ziphr-task/albums/common";

import { AlbumsListComponent } from './albums-list.component';
import { AlbumsListComponentPo } from "./albums-list.component.po";
import { AlbumListItemModule } from "./components/album-list-item/album-list-item.module";

@Component({
  template: `<ziphr-task-albums-list automation-id="list" [albums]="albums"></ziphr-task-albums-list>`
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

describe('AlbumsListComponent', () => {
  let pageObject: AlbumsListComponentPo;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        MockModule(AlbumListItemModule)
      ],
      declarations: [AlbumsListComponent, WrapperComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new AlbumsListComponentPo(fixtureWrapper);
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
