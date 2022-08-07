import { FormGroup } from '@angular/forms';

export interface TSearchView {
  searchGroup: FormGroup;
  ngOnInit(): void;
  searchForm(): void;
  search(searchTerm: string): void;
}
