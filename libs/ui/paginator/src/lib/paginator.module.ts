import { NgModule } from '@angular/core';
import { NgbPaginationModule } from "@ng-bootstrap/ng-bootstrap";

import { PaginatorComponent } from './paginator.component';

@NgModule({
  imports: [NgbPaginationModule],
  declarations: [PaginatorComponent],
  exports: [PaginatorComponent]
})
export class PaginatorModule {}
