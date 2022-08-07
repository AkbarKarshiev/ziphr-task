export type SortDirection = 'asc' | 'desc' | '';

export interface TSortState {
  column: string;
  direction: SortDirection;
}

export class SortState implements TSortState {
  column = 'id'; // Id by default
  direction: SortDirection = 'asc'; // asc by default;
}

export interface TSortView {
  sorting: SortState;
  ngOnInit(): void;
  sort(column: string): void;
}
