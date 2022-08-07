import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { debounceTime, distinctUntilChanged, Observable, take, takeUntil } from "rxjs";

import { Album } from "@ziphr-task/albums/common";
import { AlbumsService } from "@ziphr-task/albums/services";
import { RootStateFacade } from "@ziphr-task/core/store/root";
import { pageSizes, PaginatorState, SortState, TableState, TFilterView, TPaginatorView, TSearchView } from "@ziphr-task/core/table/common";
import { DestroyService } from "@ziphr-task/core/utils/destroy";
import { UsersApiService } from "@ziphr-task/users/api";
import { User } from "@ziphr-task/users/common";

@Component({
  selector: 'ziphr-task-albums-table',
  templateUrl: './albums-table.component.html',
  styleUrls: ['./albums-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DestroyService]
})
export class AlbumsTableComponent implements OnInit, TFilterView, TPaginatorView, TSearchView {
  tableState$!: Observable<TableState>;
  items$!: Observable<Album[]>;
  users$!: Observable<User[]>;

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
    private readonly usersService: UsersApiService,
    private readonly albumsService: AlbumsService,
  ) {}

  ngOnInit(): void {
    this.filterForm();
    this.searchForm();
    this.tableState$ = this.albumsService.tableState$;
    this.paginator = this.albumsService.paginator;
    this.paginator.pageSize = pageSizes[1];
    this.items$ = this.albumsService.items$;
    this.users$ = this.usersService.loadUsers();

    this.rootStateFacade.currentRouteState$.pipe(take(1)).subscribe((params) => {
      if (params.queryParams['author']) {
        this.albumsService.patchStateWithoutFetch({
          filter: {
            ['userId']: params.queryParams['author']
          }
        });
        this.filterGroup.get('userId')?.setValue(params.queryParams['author']);
      }

      if (params.queryParams['q']) {
        this.albumsService.patchStateWithoutFetch({
          searchTerm: params.queryParams['q']
        });
        this.searchGroup.get('searchTerm')?.setValue(params.queryParams['q']);
      }

      if (params.queryParams['page'] && +params.queryParams['page']) {
        this.paginator.page = +params.queryParams['page'];
      }

      this.albumsService.fetch();
    });
  }

  filterForm(): void {
    this.filterGroup = this.fb.group({
      userId: ''
    });

    this.filterGroup.controls['userId'].valueChanges.pipe(takeUntil(this.destroy$)).subscribe(() => this.filter());
  }

  filter(): void {
    const filter: Record<string, string> = {};
    const userId = this.filterGroup.get('userId')?.value;

    if (userId) {
      filter['userId'] = userId;
    }

    const queryParams: Params = {
      author: userId
    }

    this.updateQueryParams(queryParams);

    this.albumsService.patchState({ filter });
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

    this.albumsService.patchState({ searchTerm });
  }

  paginate(paginator: PaginatorState): void {
    const queryParams: Params = {
      page: paginator.page
    }

    this.updateQueryParams(queryParams);

    this.albumsService.patchState({ paginator });
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
