import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Album } from "@ziphr-task/albums/common";

@Component({
  selector: 'ziphr-task-vertical-albums-list',
  templateUrl: './vertical-albums-list.component.html',
  styleUrls: ['./vertical-albums-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class VerticalAlbumsListComponent {
  @Input() albums!: Album[];
}
