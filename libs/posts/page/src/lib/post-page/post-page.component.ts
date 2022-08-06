import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, takeUntil } from "rxjs";

import { RootStateFacade } from "@ziphr-task/core/store/root";
import { DestroyService } from "@ziphr-task/core/utils/destroy";
import { isNotNullOrUndefined } from "@ziphr-task/core/utils/operators";
import { Post } from "@ziphr-task/posts/common";
import { PostsFacade } from "@ziphr-task/posts/state";

@Component({
  selector: 'ziphr-task-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DestroyService]
})
export class PostPageComponent implements OnInit {
  post$!: Observable<Post | null>;

  constructor(
    private readonly rootStateFacade: RootStateFacade,
    private readonly postsFacade: PostsFacade,
    private readonly destroy$: DestroyService
  ) {}

  ngOnInit() {
    this.rootStateFacade.routeParams$.pipe(
      takeUntil(this.destroy$)
    ).subscribe((params) => {
      const { id } = params;
      this.post$ = this.postsFacade.postById$(id).pipe(isNotNullOrUndefined());
    });
  }
}
