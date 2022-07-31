import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ziphr-task-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('PostsPageComponent')
  }
}
