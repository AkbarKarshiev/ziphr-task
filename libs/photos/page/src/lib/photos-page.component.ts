import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ziphr-task-photos-page',
  templateUrl: './photos-page.component.html',
  styleUrls: ['./photos-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotosPageComponent implements OnInit {
  page = 1;

  constructor() {}

  ngOnInit(): void {}
}
