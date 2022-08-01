import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { NavigationPaths, PATHS } from "@ziphr-task/core/navigation/common";

@Component({
  selector: 'ziphr-task-album-page',
  templateUrl: './album-page.component.html',
  styleUrls: ['./album-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlbumPageComponent implements OnInit {
  page = 1;

  constructor(@Inject(PATHS) public readonly paths: NavigationPaths) {}

  ngOnInit(): void {}
}
