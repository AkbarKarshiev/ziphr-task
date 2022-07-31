import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ziphr-task-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotosListComponent {
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
}
