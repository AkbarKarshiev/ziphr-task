import { PaginatorState } from "./paginator.model";
import { SortState } from "./sort.model";

export interface TableState {
  filter: Record<string, string>;
  paginator: PaginatorState;
  sorting: SortState;
  searchTerm: string;
  entityId: number | undefined;
}

export interface TableResponseModel<T> {
  items: T[];
  total: number;
}
