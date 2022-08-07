import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { debounceTime, distinctUntilChanged, Observable, take, takeUntil } from "rxjs";

import { Album } from "@ziphr-task/albums/common";
import { AlbumsFacade } from "@ziphr-task/albums/state";
import { RootStateFacade } from "@ziphr-task/core/store/root";
import { pageSizes, PaginatorState, SortState, TableState, TFilterView, TPaginatorView, TSearchView } from "@ziphr-task/core/table/common";
import { DestroyService } from "@ziphr-task/core/utils/destroy";
import { Photo } from "@ziphr-task/photos/common";
import { PhotosService } from "@ziphr-task/photos/services";

@Component({
  selector: 'ziphr-task-photos-table',
  templateUrl: './photos-table.component.html',
  styleUrls: ['./photos-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DestroyService]
})
export class PhotosTableComponent implements OnInit, TFilterView, TPaginatorView, TSearchView {
  tableState$!: Observable<TableState>;
  items$!: Observable<Photo[]>;
  albums$!: Observable<Album[]>;

  paginator!: PaginatorState;
  sorting!: SortState;
  filterGroup!: FormGroup;
  searchGroup!: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly destroy$: DestroyService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly rootStateFacade: RootStateFacade,
    private readonly photosService: PhotosService,
    private readonly albumsFacade: AlbumsFacade
  ) {}

  ngOnInit(): void {
    this.filterForm();
    this.searchForm();
    this.photosService.setDefaults(pageSizes[1]);
    this.tableState$ = this.photosService.tableState$;
    this.paginator = this.photosService.paginator;
    this.items$ = this.photosService.items$;
    this.albums$ = this.albumsFacade.albums$;

    this.rootStateFacade.currentRouteState$.pipe(take(1)).subscribe((params) => {
      if (params.queryParams['album']) {
        this.photosService.patchStateWithoutFetch({
          filter: {
            ['albumId']: params.queryParams['album']
          }
        });
        this.filterGroup.get('albumId')?.setValue(params.queryParams['album']);
      }

      if (params.queryParams['q']) {
        this.photosService.patchStateWithoutFetch({
          searchTerm: params.queryParams['q']
        });
        this.searchGroup.get('searchTerm')?.setValue(params.queryParams['q']);
      }

      if (params.queryParams['page'] && +params.queryParams['page']) {
        this.paginator.page = +params.queryParams['page'];
      }

      this.photosService.fetch();
    });
  }

  filterForm(): void {
    this.filterGroup = this.fb.group({
      albumId: ''
    });

    this.filterGroup.controls['albumId'].valueChanges.pipe(takeUntil(this.destroy$)).subscribe(() => this.filter());
  }

  filter(): void {
    const filter: Record<string, string> = {};
    const albumId = this.filterGroup.get('albumId')?.value;

    if (albumId) {
      filter['albumId'] = albumId;
    }

    const queryParams: Params = {
      album: albumId
    }

    this.updateQueryParams(queryParams);

    this.photosService.patchState({ filter });
  }

  searchForm(): void {
    this.searchGroup = this.fb.group({
      searchTerm: ''
    });

    this.searchGroup.controls['searchTerm'].valueChanges.pipe(
      takeUntil(this.destroy$),
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe((val) => this.search(val))
  }

  search(searchTerm: string): void {
    const queryParams: Params = {
      q: searchTerm
    }

    this.updateQueryParams(queryParams);

    this.photosService.patchState({ searchTerm });
  }

  paginate(paginator: PaginatorState): void {
    const queryParams: Params = {
      page: paginator.page
    }

    this.updateQueryParams(queryParams);

    this.photosService.patchState({ paginator });
  }

  private updateQueryParams(queryParams: Params): void {
    void (this.router.navigate(
        [],
        {
          relativeTo: this.activatedRoute,
          queryParams: queryParams,
          queryParamsHandling: 'merge'
        })
    );
  }
}
