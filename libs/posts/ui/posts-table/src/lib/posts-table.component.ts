import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { debounceTime, distinctUntilChanged, Observable, take, takeUntil } from "rxjs";

import { NavigationPaths, PATHS } from "@ziphr-task/core/navigation/common";
import { RootStateFacade } from "@ziphr-task/core/store/root";
import {
  PaginatorState,
  SortState,
  TableState,
  TFilterView,
  TPaginatorView,
  TSearchView,
  TSortView
} from "@ziphr-task/core/table/common";
import { DestroyService } from "@ziphr-task/core/utils/destroy";
import { Post } from "@ziphr-task/posts/common";
import { PostsService } from "@ziphr-task/posts/services";
import { UsersApiService } from "@ziphr-task/users/api";
import { User } from "@ziphr-task/users/common";

@Component({
  selector: 'ziphr-task-posts-table',
  templateUrl: './posts-table.component.html',
  styleUrls: ['./posts-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DestroyService]
})
export class PostsTableComponent implements OnInit, TFilterView, TPaginatorView, TSearchView, TSortView {
  tableState$!: Observable<TableState>;
  items$!: Observable<Post[]>;
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
    private readonly postsService: PostsService,
    private readonly rootStateFacade: RootStateFacade,
    private readonly usersService: UsersApiService,
    @Inject(PATHS) public readonly paths: NavigationPaths,
  ) {}

  ngOnInit(): void {
    this.filterForm();
    this.searchForm();
    this.postsService.setDefaults();
    this.tableState$ = this.postsService.tableState$;
    this.paginator = this.postsService.paginator;
    this.sorting = this.postsService.sorting;
    this.items$ = this.postsService.items$;
    this.users$ = this.usersService.loadUsers();

    this.rootStateFacade.currentRouteState$.pipe(take(1)).subscribe((params) => {
      if (params.queryParams['author']) {
        this.postsService.patchStateWithoutFetch({
          filter: {
            ['userId']: params.queryParams['author']
          }
        });
        this.filterGroup.get('userId')?.setValue(params.queryParams['author']);
      }

      if (params.queryParams['q']) {
        this.postsService.patchStateWithoutFetch({
          searchTerm: params.queryParams['q']
        });
        this.searchGroup.get('searchTerm')?.setValue(params.queryParams['q']);
      }

      if (params.queryParams['page'] && +params.queryParams['page']) {
        this.paginator.page = +params.queryParams['page'];
      }

      if (params.queryParams['sortBy'] && params.queryParams['sortDir']) {
        this.sorting.column = params.queryParams['sortBy'];
        this.sorting.direction = params.queryParams['sortDir'];
      }

      this.postsService.fetch();
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

    this.postsService.patchState({ filter });
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

    this.postsService.patchState({ searchTerm });
  }

  paginate(paginator: PaginatorState): void {
    const queryParams: Params = {
      page: paginator.page
    }

    this.updateQueryParams(queryParams);

    this.postsService.patchState({ paginator });
  }

  sort(column: string) {
    const sorting = this.sorting;
    const isActiveColumn = sorting.column === column;
    if (!isActiveColumn) {
      sorting.column = column;
      sorting.direction = 'asc';
    } else {
      sorting.direction = sorting.direction === 'asc' ? 'desc' : 'asc';
    }

    const queryParams: Params = {
      sortBy: sorting.column,
      sortDir: sorting.direction
    }

    this.updateQueryParams(queryParams);

    this.postsService.patchState({ sorting });
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
