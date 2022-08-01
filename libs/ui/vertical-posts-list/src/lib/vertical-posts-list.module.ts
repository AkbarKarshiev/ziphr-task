import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerticalPostsListItemModule } from "./components/vertical-posts-list-item/vertical-posts-list-item.module";

import { VerticalPostsListComponent } from './vertical-posts-list.component';

@NgModule({
  imports: [CommonModule, VerticalPostsListItemModule],
  declarations: [VerticalPostsListComponent],
  exports: [VerticalPostsListItemModule, VerticalPostsListComponent]
})
export class VerticalPostsListModule {}
