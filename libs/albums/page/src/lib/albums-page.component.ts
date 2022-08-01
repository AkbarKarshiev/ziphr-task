import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ziphr-task-albums-page',
  templateUrl: './albums-page.component.html',
  styleUrls: ['./albums-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlbumsPageComponent implements OnInit {
  page = 1;

  constructor() {}

  ngOnInit(): void {}
}
