import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ziphr-task-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsPageComponent {}
