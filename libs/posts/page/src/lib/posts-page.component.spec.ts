import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { MockModule } from "ng-mocks";

import { PostsServicesModule } from "@ziphr-task/posts/services";
import { PostsTableModule } from "@ziphr-task/posts/ui/posts-table";
import { BreadcrumbModule } from "@ziphr-task/ui/breadcrumb";

import { PostsPageComponent } from './posts-page.component';
import { PostsPageComponentPo } from "./posts-page.component.po";

describe('PostsPageComponent', () => {
  let pageObject: PostsPageComponentPo;
  let fixture: ComponentFixture<PostsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MockModule(BreadcrumbModule),
        MockModule(PostsTableModule),
        MockModule(PostsServicesModule)
      ],
      declarations: [PostsPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsPageComponent);
    pageObject = new PostsPageComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    fixture.detectChanges();

    expect(pageObject.breadcrumb).toBeTruthy();
    expect(pageObject.table).toBeTruthy();
  });
});
