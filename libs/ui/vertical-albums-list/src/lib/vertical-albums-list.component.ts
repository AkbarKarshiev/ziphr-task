import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ziphr-task-vertical-albums-list',
  templateUrl: './vertical-albums-list.component.html',
  styleUrls: ['./vertical-albums-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class VerticalAlbumsListComponent {
  dummyArr: number[] = [1, 2, 3, 4, 5, 6,7, 8, 9, 10];
}
