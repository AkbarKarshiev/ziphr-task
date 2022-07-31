import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsListItemModule } from "./components/posts-list-item.module";
import { PostListComponent } from './post-list.component';

@NgModule({
  imports: [CommonModule, PostsListItemModule],
  declarations: [PostListComponent],
  exports: [PostListComponent]
})
export class PostsListModule {}
