export const pageSizes = [5, 12];

export interface TPaginatorState {
  page: number;
  pageSize: number;
  total: number;
  recalculatePaginator(total: number): TPaginatorState;
}

export class PaginatorState implements TPaginatorState {
  page = 1;
  pageSize = pageSizes[0];
  total = pageSizes[0];
  pageSizes: number[] = [];

  constructor(pageSize: number = pageSizes[0]) {
    this.pageSize = pageSize;
  }

  recalculatePaginator(total: number): PaginatorState {
    this.total = total;
    return this;
  }
}

export interface TPaginatorView {
  paginator: PaginatorState;
  ngOnInit(): void;
  paginate(paginator: PaginatorState): void;
}
