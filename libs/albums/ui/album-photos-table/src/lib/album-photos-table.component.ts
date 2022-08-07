import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { debounceTime, distinctUntilChanged, Observable, take, takeUntil } from "rxjs";

import { AlbumPhotosService } from "@ziphr-task/albums/services";
import { RootStateFacade } from "@ziphr-task/core/store/root";
import { pageSizes, PaginatorState, TableState, TPaginatorView, TSearchView } from "@ziphr-task/core/table/common";
import { DestroyService } from "@ziphr-task/core/utils/destroy";
import { Photo } from "@ziphr-task/photos/common";

@Component({
  selector: 'ziphr-task-album-photos-table',
  templateUrl: './album-photos-table.component.html',
  styleUrls: ['./album-photos-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlbumPhotosTableComponent implements OnInit, TPaginatorView, TSearchView {
  tableState$!: Observable<TableState>;
  items$!: Observable<Photo[]>;

  paginator!: PaginatorState;
  searchGroup!: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly destroy$: DestroyService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly rootStateFacade: RootStateFacade,
    private readonly albumPhotosService: AlbumPhotosService
  ) {}

  ngOnInit(): void {
    this.searchForm();
    this.albumPhotosService.setDefaults(pageSizes[1]);
    this.tableState$ = this.albumPhotosService.tableState$;
    this.paginator = this.albumPhotosService.paginator;
    this.items$ = this.albumPhotosService.items$;

    this.rootStateFacade.currentRouteState$.pipe(take(1)).subscribe((params) => {
      this.albumPhotosService.patchStateWithoutFetch({
        filter: {
          ['albumId']: params.params['id']
        }
      });

      if (params.queryParams['q']) {
        this.albumPhotosService.patchStateWithoutFetch({
          searchTerm: params.queryParams['q']
        });
        this.searchGroup.get('searchTerm')?.setValue(params.queryParams['q']);
      }

      if (params.queryParams['page'] && +params.queryParams['page']) {
        this.paginator.page = +params.queryParams['page'];
      }

      this.albumPhotosService.fetch();
    });
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

    this.albumPhotosService.patchState({ searchTerm });
  }

  paginate(paginator: PaginatorState): void {
    const queryParams: Params = {
      page: paginator.page
    }

    this.updateQueryParams(queryParams);

    this.albumPhotosService.patchState({ paginator });
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
