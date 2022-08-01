import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';

import { NavigationPaths, PATHS } from "@ziphr-task/core/navigation/common";

@Component({
  selector: 'ziphr-task-vertical-albums-list-item',
  templateUrl: './vertical-albums-list-item.component.html',
  styleUrls: ['./vertical-albums-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VerticalAlbumsListItemComponent {
  constructor(@Inject(PATHS) public readonly paths: NavigationPaths) {}
}
