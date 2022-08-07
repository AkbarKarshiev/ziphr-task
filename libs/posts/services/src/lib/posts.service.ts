import { Injectable, OnDestroy } from '@angular/core';
import { map, Observable } from "rxjs";

import { TableResponseModel, TableState } from "@ziphr-task/core/table/common";
import { TableService } from "@ziphr-task/core/table/service";
import { baseFilter } from "@ziphr-task/core/utils/table-extensions";
import { Post } from "@ziphr-task/posts/common";
import { PostsFacade } from "@ziphr-task/posts/state";

@Injectable()
export class PostsService extends TableService<Post> implements OnDestroy {

  constructor(private readonly postsFacade: PostsFacade) {
    super();
  }

  find(tableState: TableState): Observable<TableResponseModel<Post>> {
    return this.postsFacade.posts$.pipe(
      map((posts: Post[]) => {
        const filteredResult = baseFilter<Post>(posts, tableState);

        return {
          items: filteredResult.items,
          total: filteredResult.total
        }
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sb => sb.unsubscribe());
  }
}
