import { Injectable, OnDestroy } from '@angular/core';
import { map, Observable } from "rxjs";

import { TableResponseModel, TableState } from "@ziphr-task/core/table/common";
import { TableService } from "@ziphr-task/core/table/service";
import { baseFilter } from "@ziphr-task/core/utils/table-extensions";
import { Photo } from "@ziphr-task/photos/common";
import { PhotosFacade } from "@ziphr-task/photos/state";

@Injectable()
export class AlbumPhotosService extends TableService<Photo> implements OnDestroy {
  constructor(private readonly photosFacade: PhotosFacade) {
    super();
  }

  find(tableState: TableState): Observable<TableResponseModel<Photo>> {
    return this.photosFacade.photos$.pipe(
      map((photos: Photo[]) => {
        const filteredResult = baseFilter<Photo>(photos, tableState);

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
