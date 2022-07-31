import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { NavigationPaths, PATHS } from "@ziphr-task/core/navigation/common";

@Component({
  selector: 'ziphr-task-photos-list-item',
  templateUrl: './photos-list-item.component.html',
  styleUrls: ['./photos-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotosListItemComponent {
  constructor(@Inject(PATHS) public readonly paths: NavigationPaths) {}
}
