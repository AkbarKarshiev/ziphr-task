import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { Observable, takeUntil } from "rxjs";

import { Album } from "@ziphr-task/albums/common";
import { AlbumsFacade } from "@ziphr-task/albums/state";
import { NavigationPaths, PATHS } from "@ziphr-task/core/navigation/common";
import { RootStateFacade } from "@ziphr-task/core/store/root";
import { DestroyService } from "@ziphr-task/core/utils/destroy";
import { isNotNullOrUndefined } from "@ziphr-task/core/utils/operators";

@Component({
  selector: 'ziphr-task-album-page',
  templateUrl: './album-page.component.html',
  styleUrls: ['./album-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DestroyService]
})
export class AlbumPageComponent implements OnInit {
  album$!: Observable<Album>;

  page = 1;

  constructor(
    private readonly rootStateFacade: RootStateFacade,
    private readonly albumsFacade: AlbumsFacade,
    private readonly destroy$: DestroyService,
    @Inject(PATHS) public readonly paths: NavigationPaths
  ) {}

  ngOnInit(): void {
    this.rootStateFacade.routeParams$.pipe(
      takeUntil(this.destroy$)
    ).subscribe((params) => {
      const { id } = params;
      this.album$ = this.albumsFacade.albumById$(id).pipe(isNotNullOrUndefined());
    });
  }
}
