import { Component, EventEmitter, Input, Output } from '@angular/core';

import { PaginatorState } from "@ziphr-task/core/table/common";

@Component({
  selector: 'ziphr-task-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent {
  @Input() paginator!: PaginatorState;
  @Output() paginate: EventEmitter<PaginatorState> = new EventEmitter<PaginatorState>();

  pageChange(num: number): void {
    this.paginator.page = num;
    this.paginate.emit(this.paginator);
  }
}
