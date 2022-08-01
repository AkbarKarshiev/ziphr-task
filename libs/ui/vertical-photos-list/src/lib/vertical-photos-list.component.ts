import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ziphr-task-vertical-photos-list',
  templateUrl: './vertical-photos-list.component.html',
  styleUrls: ['./vertical-photos-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VerticalPhotosListComponent implements OnInit {
  dummyArr: string[] = [
    'https://via.placeholder.com/150/92c952',
    'https://via.placeholder.com/150/92c952',
    'https://via.placeholder.com/150/92c952',
    'https://via.placeholder.com/150/92c952',
    'https://via.placeholder.com/150/92c952',
    'https://via.placeholder.com/150/92c952',
    'https://via.placeholder.com/150/92c952',
    'https://via.placeholder.com/150/92c952',
    'https://via.placeholder.com/150/92c952',
    'https://via.placeholder.com/150/92c952',
    'https://via.placeholder.com/150/92c952',
    'https://via.placeholder.com/150/92c952',
    'https://via.placeholder.com/150/92c952',
    'https://via.placeholder.com/150/92c952',
    'https://via.placeholder.com/150/92c952',
  ];
  constructor() {}

  ngOnInit(): void {}
}
