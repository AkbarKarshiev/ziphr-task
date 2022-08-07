import { ChangeDetectionStrategy, Component, Inject, Input, OnInit } from '@angular/core';
import { map, Observable } from "rxjs";

import { Album } from "@ziphr-task/albums/common";
import { NavigationPaths, PATHS } from "@ziphr-task/core/navigation/common";
import { Photo } from "@ziphr-task/photos/common";
import { PhotosFacade } from "@ziphr-task/photos/state";

@Component({
  selector: 'ziphr-task-album-list-item',
  templateUrl: './album-list-item.component.html',
  styleUrls: ['./album-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlbumListItemComponent implements OnInit {
  @Input() album!: Album;
  photos$!: Observable<Photo[]>;

  constructor(
    private readonly photosFacade: PhotosFacade,
    @Inject(PATHS) public readonly paths: NavigationPaths
  ) {}

  ngOnInit(): void {
    this.photos$ = this.photosFacade.photos$.pipe(map((photos) => {
      let foundCount = 0;
      const result: Photo[] = [];
      for (let i = 0; i < photos.length; i++) {
        if (foundCount === 4)
          break;

        if (photos[i].albumId === this.album.id) {
          result.push(photos[i]);
          foundCount++;
        }
      }
      return result;
    }));
  }
}
