import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, finalize, Observable, of, Subscription, tap } from "rxjs";

import { pageSizes, PaginatorState, SortState, TableResponseModel, TableState } from "@ziphr-task/core/table/common";

export const DEFAULT_STATE: TableState = {
  filter: {},
  paginator: new PaginatorState(),
  sorting: new SortState(),
  searchTerm: '',
  entityId: undefined
}

@Injectable()
export abstract class TableService<T> {
  private _items$ = new BehaviorSubject<T[]>([]);
  private _isLoading$ = new BehaviorSubject<boolean>(false);
  private _isFirstLoading$ = new BehaviorSubject<boolean>(true);
  private _tableState$ = new BehaviorSubject<TableState>(DEFAULT_STATE);
  private _errorMsg$ = new BehaviorSubject<string>('');
  private _subscriptions: Subscription[] = [];

  // getters
  get items$() {
    return this._items$.asObservable();
  }

  get isLoading$() {
    return this._isLoading$.asObservable();
  }

  get isFirstLoading$() {
    return this._isFirstLoading$.asObservable();
  }

  get tableState$() {
    return this._tableState$.asObservable();
  }

  get errorMsg$() {
    return this._errorMsg$.asObservable();
  }

  get subscriptions() {
    return this._subscriptions;
  }

  // state getters
  get items() {
    return this._items$.value;
  }

  get paginator() {
    return this._tableState$.value.paginator;
  }

  get filter() {
    return this._tableState$.value.filter;
  }

  get sorting() {
    return this._tableState$.value.sorting;
  }

  get searchTerm() {
    return this._tableState$.value.searchTerm;
  }

  abstract find(tableState: TableState): Observable<TableResponseModel<T>>;

  fetch(): void {
    this._isLoading$.next(true);
    this._errorMsg$.next('');
    const request = this.find(this._tableState$.value)
      .pipe(
        tap((res: TableResponseModel<T>) => {
          this._items$.next(res.items);

          this.patchStateWithoutFetch({
            paginator: this._tableState$.value.paginator.recalculatePaginator(
              res.total
            ),
          });
        }),
        catchError((err) => {
          this._errorMsg$.next(err);
          return of({
            items: [],
            total: 0
          });
        }),
        finalize(() => {
          this._isLoading$.next(false);
        })
      )
      .subscribe();

    this._subscriptions.push(request);
  }

  setDefaults(pageSize: number = pageSizes[0]): void {
    this.patchStateWithoutFetch({ filter: {} });
    this.patchStateWithoutFetch({ sorting: new SortState() });
    this.patchStateWithoutFetch({ searchTerm: '' });
    this.patchStateWithoutFetch({ paginator: new PaginatorState(pageSize) });
    this._isFirstLoading$.next(true);
    this._isLoading$.next(true);
    this._tableState$.next(DEFAULT_STATE);
    this._errorMsg$.next('');
  }

  patchState(patch: Partial<TableState>): void {
    this.patchStateWithoutFetch(patch);
    this.fetch();
  }

  patchStateWithoutFetch(patch: Partial<TableState>): void {
    const newState = Object.assign(this._tableState$.value, patch);
    this._tableState$.next(newState);
  }
}

