import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsPageRoutingModule } from "./posts-page-routing.module";

import { PostsPageComponent } from './posts-page.component';
import { PostPageModule } from "./post-page/post-page.module";
import { NgbPaginationModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    PostsPageRoutingModule,
    NgbPaginationModule
  ],
  declarations: [PostsPageComponent],
})
export class PostsPageModule {}
