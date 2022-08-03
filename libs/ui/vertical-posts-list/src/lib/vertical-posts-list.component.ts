import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Post } from "@ziphr-task/posts/common";

@Component({
  selector: 'ziphr-task-vertical-posts-list',
  templateUrl: './vertical-posts-list.component.html',
  styleUrls: ['./vertical-posts-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class VerticalPostsListComponent {
  @Input() posts!: Post[] | null;
}
