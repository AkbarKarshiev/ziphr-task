import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ziphr-task-card-photos-list',
  templateUrl: './card-photos-list.component.html',
  styleUrls: ['./card-photos-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardPhotosListComponent implements OnInit {
  @Input() viewAlbumLinkEnabled = true;

  dummyArr: number[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
  ];

  constructor() {}

  ngOnInit(): void {}
}
