import { CommonModule, DecimalPipe } from "@angular/common";
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { MockModule } from "ng-mocks";
import { ReplaySubject } from "rxjs";
import { mock, when } from "ts-mockito";

import { AlbumsFacade } from "@ziphr-task/albums/state";
import { providerOf } from "@ziphr-task/core/testing";
import { PhotosFacade } from "@ziphr-task/photos/state";
import { Post, POSTS_STUB } from "@ziphr-task/posts/common";
import { PostsFacade } from "@ziphr-task/posts/state";
import { CardModule } from "@ziphr-task/ui/card";
import { VerticalPhotosListModule } from "@ziphr-task/ui/vertical-photos-list";
import { VerticalPostsListModule } from "@ziphr-task/ui/vertical-posts-list";

import { DashboardPageComponent } from './dashboard-page.component';
import { DashboardPageComponentPo } from "./dashboard-page.component.po";

describe('DashboardPageComponent', () => {
  let decimalPipe: DecimalPipe;
  let albumsFacadeMock: AlbumsFacade;
  let postsFacadeMock: PostsFacade;
  let photosFacadeMock: PhotosFacade;
  let pageObject: DashboardPageComponentPo;
  let fixture: ComponentFixture<DashboardPageComponent>;

  let albumsCount$: ReplaySubject<number>;
  let postsCount$: ReplaySubject<number>;
  let photosCount$: ReplaySubject<number>;
  let posts$: ReplaySubject<Post[]>;

  const ALBUMS_COUNT_STUB = 1000;
  const POSTS_COUNT_STUB = 1000;
  const PHOTOS_COUNT_STUB = 1000;

  beforeEach(() => {
    decimalPipe = new DecimalPipe('en-US');
    albumsFacadeMock = mock(AlbumsFacade);
    postsFacadeMock = mock(PostsFacade);
    photosFacadeMock = mock(PhotosFacade);

    albumsCount$ = new ReplaySubject<number>(1);
    postsCount$ = new ReplaySubject<number>(1);
    photosCount$ = new ReplaySubject<number>(1);
    posts$ = new ReplaySubject<Post[]>(1);
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        RouterTestingModule,
        MockModule(CardModule),
        MockModule(VerticalPostsListModule),
        MockModule(VerticalPhotosListModule),
      ],
      providers: [
        providerOf(AlbumsFacade, albumsFacadeMock),
        providerOf(PostsFacade, postsFacadeMock),
        providerOf(PhotosFacade, photosFacadeMock),
      ],
      declarations: [DashboardPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    when(albumsFacadeMock.albumsCount$).thenReturn(albumsCount$);
    when(postsFacadeMock.postsCount$).thenReturn(postsCount$);
    when(photosFacadeMock.photosCount$).thenReturn(photosCount$);
    when(postsFacadeMock.posts$).thenReturn(posts$);

    fixture = TestBed.createComponent(DashboardPageComponent);
    pageObject = new DashboardPageComponentPo(fixture);
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show', () => {
    albumsCount$.next(ALBUMS_COUNT_STUB);
    postsCount$.next(POSTS_COUNT_STUB);
    photosCount$.next(PHOTOS_COUNT_STUB);
    posts$.next(POSTS_STUB);
    fixture.detectChanges();

    expect(pageObject.albumsCountText).toBe(decimalPipe.transform(ALBUMS_COUNT_STUB));
    expect(pageObject.postsCountText).toBe(decimalPipe.transform(POSTS_COUNT_STUB));
    expect(pageObject.photosCountText).toBe(decimalPipe.transform(PHOTOS_COUNT_STUB));
    expect(pageObject.postsList).toBeTruthy();
    expect(pageObject.photosList).toBeTruthy();
  });
});
