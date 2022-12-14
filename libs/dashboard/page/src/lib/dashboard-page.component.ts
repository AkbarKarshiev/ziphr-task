import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { map, Observable } from "rxjs";

import { AlbumsFacade } from "@ziphr-task/albums/state";
import { isNotNullOrUndefined } from "@ziphr-task/core/utils/operators";
import { PhotosFacade } from "@ziphr-task/photos/state";
import { Post } from "@ziphr-task/posts/common";
import { PostsFacade } from "@ziphr-task/posts/state";

@Component({
  selector: 'ziphr-task-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardPageComponent implements OnInit {
  albumsCount$!: Observable<number>;
  posts$!: Observable<Post[]>;
  postsCount$!: Observable<number>;
  photosCount$!: Observable<number>;

  constructor(
    private readonly albumsFacade: AlbumsFacade,
    private readonly postsFacade: PostsFacade,
    private readonly photosFacade: PhotosFacade,
  ) {}

  ngOnInit(): void {
    this.albumsCount$ = this.albumsFacade.albumsCount$.pipe(isNotNullOrUndefined());
    this.postsCount$ = this.postsFacade.postsCount$.pipe(isNotNullOrUndefined());
    this.photosCount$ = this.photosFacade.photosCount$.pipe(isNotNullOrUndefined());

    this.posts$ = this.postsFacade.posts$.pipe(
      isNotNullOrUndefined(),
      map(posts => posts.slice(0, 20))
    );
  }
}
