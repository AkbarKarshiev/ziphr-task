import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';

import { NavigationPaths, PATHS } from "@ziphr-task/core/navigation/common";
import { Post } from "@ziphr-task/posts/common";

@Component({
  selector: 'ziphr-task-vertical-posts-list-item',
  templateUrl: './vertical-posts-list-item.component.html',
  styleUrls: ['./vertical-posts-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VerticalPostsListItemComponent {
  @Input() post!: Post;

  constructor(@Inject(PATHS) public readonly paths: NavigationPaths) {}
}
