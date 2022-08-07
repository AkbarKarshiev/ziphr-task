import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { map, Observable } from "rxjs";

import { Album } from "@ziphr-task/albums/common";
import { AlbumsFacade } from "@ziphr-task/albums/state";
import { Post } from "@ziphr-task/posts/common";
import { PostsFacade } from "@ziphr-task/posts/state";

@Component({
  selector: 'ziphr-task-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserPageComponent implements OnInit {
  albums$!: Observable<Album[]>;
  posts$!: Observable<Post[]>;

  constructor(
    private readonly albumsFacade: AlbumsFacade,
    private readonly postsFacade: PostsFacade,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const userId = +this.activatedRoute.snapshot.params['id'];
    this.albums$ = this.albumsFacade.albums$.pipe(map((albums) => {
      return albums.filter((elem) => elem.userId === userId);
    }));
    this.posts$ = this.postsFacade.posts$.pipe(map((posts) => {

      return posts.filter((elem) => elem.userId === userId);
    }));
  }
}
