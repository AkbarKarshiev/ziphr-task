import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';

import { NavigationPaths, PATHS } from "@ziphr-task/core/navigation/common";

@Component({
  selector: 'ziphr-task-vertical-posts-list-item',
  templateUrl: './vertical-posts-list-item.component.html',
  styleUrls: ['./vertical-posts-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VerticalPostsListItemComponent {
  constructor(@Inject(PATHS) public readonly paths: NavigationPaths) {}
}
