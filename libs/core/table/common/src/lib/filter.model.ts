import { FormGroup } from '@angular/forms';

export interface TFilterView {
  filterGroup: FormGroup;
  ngOnInit(): void;
  filterForm(): void;
  filter(): void;
}
