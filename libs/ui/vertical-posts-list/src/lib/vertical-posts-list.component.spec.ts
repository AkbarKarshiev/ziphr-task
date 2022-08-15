import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockModule } from "ng-mocks";

import { Post } from "@ziphr-task/posts/common";

import { VerticalPostsListItemModule } from "./components/vertical-posts-list-item/vertical-posts-list-item.module";
import { VerticalPostsListComponent } from './vertical-posts-list.component';
import { VerticalPostsListComponentPo } from "./vertical-posts-list.component.po";

@Component({
  template: `<ziphr-task-vertical-posts-list automation-id="list" [posts]="posts"></ziphr-task-vertical-posts-list>`
})
export class WrapperComponent {
  posts: Post[] = [
    {
      userId: 1,
      id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      // eslint-disable-next-line max-len
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      userId: 1,
      id: 2,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      // eslint-disable-next-line max-len
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      userId: 1,
      id: 3,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      // eslint-disable-next-line max-len
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }
  ];
}

describe('VerticalPostsListComponent', () => {
  let pageObject: VerticalPostsListComponentPo;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        MockModule(VerticalPostsListItemModule)
      ],
      declarations: [VerticalPostsListComponent, WrapperComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new VerticalPostsListComponentPo(fixtureWrapper);
  })

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.item.length).toBe(3);
  });
});
