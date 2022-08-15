import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';

import { NavigationPaths, PATHS } from "@ziphr-task/core/navigation/common";
import { Photo } from "@ziphr-task/photos/common";

@Component({
  selector: 'ziphr-task-vertical-photos-list-item',
  templateUrl: './vertical-photos-list-item.component.html',
  styleUrls: ['./vertical-photos-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VerticalPhotosListItemComponent {
  @Input() photo!: Photo;

  constructor(@Inject(PATHS) public readonly paths: NavigationPaths) {}
}
