import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { NavigationPaths, PATHS } from "@ziphr-task/core/navigation/common";

@Component({
  selector: 'ziphr-task-photo-page',
  templateUrl: './photo-page.component.html',
  styleUrls: ['./photo-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoPageComponent implements OnInit {
  constructor(@Inject(PATHS) public readonly paths: NavigationPaths) {}

  ngOnInit(): void {}
}
