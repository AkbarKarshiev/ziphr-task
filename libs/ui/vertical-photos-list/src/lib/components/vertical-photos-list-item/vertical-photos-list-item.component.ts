import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { NavigationPaths, PATHS } from "@ziphr-task/core/navigation/common";

@Component({
  selector: 'ziphr-task-vertical-photos-list-item',
  templateUrl: './vertical-photos-list-item.component.html',
  styleUrls: ['./vertical-photos-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VerticalPhotosListItemComponent {
  constructor(@Inject(PATHS) public readonly paths: NavigationPaths) {}
}
