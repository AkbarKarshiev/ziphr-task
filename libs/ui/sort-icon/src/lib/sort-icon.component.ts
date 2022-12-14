import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output
} from '@angular/core';

@Component({
  selector: 'ziphr-task-sort-icon',
  templateUrl: './sort-icon.component.html',
  styleUrls: ['./sort-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortIconComponent implements OnInit, OnChanges {
  @Input() column!: string;
  @Input() activeColumn!: string;
  @Input() activeDirection!: string;
  @Output() sort: EventEmitter<string> = new EventEmitter<string>();

  isActive = false;

  constructor(private el: ElementRef) {}

  ngOnChanges(): void {
    const parent = this.el.nativeElement.parentElement;
    if (!parent) {
      return;
    }

    // Load css classes
    parent.classList.add('sortable');
    parent.classList.remove('sortable-active');
    if (this.column === this.activeColumn) {
      parent.classList.add('sortable-active');
    }

    this.isActive = this.column === this.activeColumn;
  }

  ngOnInit(): void {
    const parent = this.el.nativeElement.parentElement as Element;
    if (!parent) {
      return;
    }

    parent.addEventListener('click', () => {
      this.sort.emit(this.column);
    });
  }
}
