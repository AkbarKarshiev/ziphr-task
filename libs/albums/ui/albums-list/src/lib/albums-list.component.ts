import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Album } from "@ziphr-task/albums/common";

@Component({
  selector: 'ziphr-task-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlbumsListComponent {
  @Input() albums!: Album[];
}
