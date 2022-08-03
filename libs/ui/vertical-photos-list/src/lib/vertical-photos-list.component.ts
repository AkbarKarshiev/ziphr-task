import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { map, Observable } from "rxjs";

import { Photo } from "@ziphr-task/photos/common";
import { PhotosFacade } from "@ziphr-task/photos/state";
import { isNotNullOrUndefined } from "@ziphr-task/core/utils/operators";

@Component({
  selector: 'ziphr-task-vertical-photos-list',
  templateUrl: './vertical-photos-list.component.html',
  styleUrls: ['./vertical-photos-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VerticalPhotosListComponent implements OnInit{
  photos$!: Observable<Photo[]>;

  constructor(private readonly photosFacade: PhotosFacade) {}

  ngOnInit() {
    this.photos$ = this.photosFacade.photos$.pipe(
      isNotNullOrUndefined(),
      map(posts => posts.slice(0, 21))
    );
  }
}
