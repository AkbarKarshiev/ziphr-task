import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ziphr-task-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlbumsListComponent implements OnInit {
  dumbArr: number[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
  ]

  constructor() {}

  ngOnInit(): void {}
}
