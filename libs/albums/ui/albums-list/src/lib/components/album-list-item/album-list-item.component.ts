import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';

import { NavigationPaths, PATHS } from "@ziphr-task/core/navigation/common";

@Component({
  selector: 'ziphr-task-album-list-item',
  templateUrl: './album-list-item.component.html',
  styleUrls: ['./album-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlbumListItemComponent {
  constructor(@Inject(PATHS) public readonly paths: NavigationPaths) {}
}
