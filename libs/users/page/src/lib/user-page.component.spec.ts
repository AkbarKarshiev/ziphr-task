import { CommonModule } from "@angular/common";
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { MockModule } from "ng-mocks";
import { of, ReplaySubject } from "rxjs";
import { mock, when } from "ts-mockito";

import { Album, ALBUMS_STUB } from "@ziphr-task/albums/common";
import { AlbumsFacade } from "@ziphr-task/albums/state";
import { RootStateFacade } from "@ziphr-task/core/store/root";
import { providerOf } from "@ziphr-task/core/testing";
import { Post, POSTS_STUB } from "@ziphr-task/posts/common";
import { PostsFacade } from "@ziphr-task/posts/state";
import { CardModule } from "@ziphr-task/ui/card";
import { VerticalAlbumsListModule } from "@ziphr-task/ui/vertical-albums-list";
import { VerticalPostsListModule } from "@ziphr-task/ui/vertical-posts-list";

import { UserPageComponent } from './user-page.component';
import { UserPageComponentPo } from "./user-page.component.po";

describe('UserPageComponent', () => {
  let pageObject: UserPageComponentPo;
  let fixture: ComponentFixture<UserPageComponent>;
  let rootFacadeMock: RootStateFacade;
  let albumsFacadeMock: AlbumsFacade;
  let postsFacadeMock: PostsFacade;

  let albums$: ReplaySubject<Album[]>;
  let posts$: ReplaySubject<Post[]>;

  const ID = '1';

  beforeEach(() => {
    rootFacadeMock = mock(RootStateFacade);
    albumsFacadeMock = mock(AlbumsFacade);
    postsFacadeMock = mock(PostsFacade);

    albums$ = new ReplaySubject<Album[]>(1);
    posts$ = new ReplaySubject<Post[]>(1);
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        RouterTestingModule,
        MockModule(CardModule),
        MockModule(VerticalPostsListModule),
        MockModule(VerticalAlbumsListModule),
      ],
      providers: [
        providerOf(RootStateFacade, rootFacadeMock),
        providerOf(AlbumsFacade, albumsFacadeMock),
        providerOf(PostsFacade, postsFacadeMock),
      ],
      declarations: [UserPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    when(rootFacadeMock.routeParams$).thenReturn(of({ id: ID }));
    when(albumsFacadeMock.albums$).thenReturn(albums$);
    when(postsFacadeMock.posts$).thenReturn(posts$);

    fixture = TestBed.createComponent(UserPageComponent);
    pageObject = new UserPageComponentPo(fixture);
  })

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    albums$.next(ALBUMS_STUB);
    posts$.next(POSTS_STUB);
    fixture.detectChanges();

    expect(pageObject.albums).toBeTruthy();
    expect(pageObject.posts).toBeTruthy();
  });
});
