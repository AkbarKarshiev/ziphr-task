import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ziphr-task-vertical-posts-list',
  templateUrl: './vertical-posts-list.component.html',
  styleUrls: ['./vertical-posts-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class VerticalPostsListComponent {
  dummyArr: number[] = [1, 2, 3, 4, 5, 6,7, 8, 9, 10];
}
