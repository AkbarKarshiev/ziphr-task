import { Injectable, OnDestroy } from '@angular/core';
import { map, Observable } from "rxjs";

import { Album } from "@ziphr-task/albums/common";
import { AlbumsFacade } from "@ziphr-task/albums/state";
import { TableResponseModel, TableState } from "@ziphr-task/core/table/common";
import { TableService } from "@ziphr-task/core/table/service";
import { baseFilter } from "@ziphr-task/core/utils/table-extensions";

@Injectable()
export class AlbumsService extends TableService<Album> implements OnDestroy {
  constructor(private readonly albumsFacade: AlbumsFacade) {
    super();
  }

  find(tableState: TableState): Observable<TableResponseModel<Album>> {
    return this.albumsFacade.albums$.pipe(
      map((albums: Album[]) => {
        const filteredResult = baseFilter<Album>(albums, tableState);

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
