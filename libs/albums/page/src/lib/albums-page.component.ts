import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ziphr-task-albums-page',
  templateUrl: './albums-page.component.html',
  styleUrls: ['./albums-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlbumsPageComponent {}
