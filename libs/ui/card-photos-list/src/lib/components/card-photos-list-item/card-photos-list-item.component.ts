import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';

import { NavigationPaths, PATHS } from "@ziphr-task/core/navigation/common";
import { Photo } from "@ziphr-task/photos/common";

@Component({
  selector: 'ziphr-task-card-photos-list-item',
  templateUrl: './card-photos-list-item.component.html',
  styleUrls: ['./card-photos-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardPhotosListItemComponent {
  @Input() viewAlbumLinkEnabled!: boolean;
  @Input() photo!: Photo;

  constructor(@Inject(PATHS) public readonly paths: NavigationPaths) {}
}
