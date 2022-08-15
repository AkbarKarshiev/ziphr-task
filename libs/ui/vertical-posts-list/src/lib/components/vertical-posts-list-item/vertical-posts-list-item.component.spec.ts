import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { MockModule } from "ng-mocks";

import { PATHS_STUB } from "@ziphr-task/core/navigation/common";
import { NavigationPipesModule } from "@ziphr-task/core/navigation/ui/pipes";
import { Post } from "@ziphr-task/posts/common";

import { VerticalPostsListItemComponent } from './vertical-posts-list-item.component';
import { VerticalPostsListItemComponentPo } from "./vertical-posts-list-item.component.po";

@Component({
  template: `<ziphr-task-vertical-posts-list-item
    automation-id="item"
    [post]="post"
  ></ziphr-task-vertical-posts-list-item>`
})
export class WrapperComponent {
  post: Post = {
    userId: 1,
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    // eslint-disable-next-line max-len
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  }
}

describe('VerticalPostsListItemComponent', () => {
  let pageObject: VerticalPostsListItemComponentPo;
  let fixtureWrapper: ComponentFixture<WrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        RouterTestingModule,
        MockModule(NavigationPipesModule)
      ],
      providers: [PATHS_STUB],
      declarations: [VerticalPostsListItemComponent, WrapperComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixtureWrapper = TestBed.createComponent(WrapperComponent);
    pageObject = new VerticalPostsListItemComponentPo(fixtureWrapper);
  });

  it('should create', () => {
    fixtureWrapper.detectChanges();

    expect(fixtureWrapper.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixtureWrapper.detectChanges();

    expect(pageObject.title).toBeTruthy();
    expect(pageObject.body).toBeTruthy();
  });
});
