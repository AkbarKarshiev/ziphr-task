import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';

import { Album } from "@ziphr-task/albums/common";
import { NavigationPaths, PATHS } from "@ziphr-task/core/navigation/common";

@Component({
  selector: 'ziphr-task-vertical-albums-list-item',
  templateUrl: './vertical-albums-list-item.component.html',
  styleUrls: ['./vertical-albums-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VerticalAlbumsListItemComponent {
  @Input() album!: Album;

  constructor(@Inject(PATHS) public readonly paths: NavigationPaths) {}
}
