import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { map, Observable, takeUntil } from "rxjs";

import { Album } from "@ziphr-task/albums/common";
import { AlbumsFacade } from "@ziphr-task/albums/state";
import { RootStateFacade } from "@ziphr-task/core/store/root";
import { DestroyService } from "@ziphr-task/core/utils/destroy";
import { Post } from "@ziphr-task/posts/common";
import { PostsFacade } from "@ziphr-task/posts/state";

@Component({
  selector: 'ziphr-task-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DestroyService]
})
export class UserPageComponent implements OnInit {
  albums$!: Observable<Album[]>;
  posts$!: Observable<Post[]>;

  constructor(
    private readonly albumsFacade: AlbumsFacade,
    private readonly postsFacade: PostsFacade,
    private readonly rootRouterState: RootStateFacade,
    private readonly activatedRoute: ActivatedRoute,
    private readonly destroy$: DestroyService
  ) {}

  ngOnInit(): void {
    this.rootRouterState.routeParams$.pipe(
      takeUntil(this.destroy$)
    ).subscribe((params) => {
      const { id } = params;

      this.albums$ = this.albumsFacade.albums$.pipe(map((albums) => {
        return albums.filter((elem) => elem.userId === +id);
      }));
      this.posts$ = this.postsFacade.posts$.pipe(map((posts) => {

        return posts.filter((elem) => elem.userId === +id);
      }));
    });
  }
}
