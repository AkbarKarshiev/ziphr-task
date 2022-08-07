import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Photo } from "@ziphr-task/photos/common";

@Component({
  selector: 'ziphr-task-card-photos-list',
  templateUrl: './card-photos-list.component.html',
  styleUrls: ['./card-photos-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardPhotosListComponent {
  @Input() viewAlbumLinkEnabled = true;
  @Input() photos!: Photo[];
}
