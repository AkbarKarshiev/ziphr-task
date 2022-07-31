import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsPageRoutingModule } from "./posts-page-routing.module";

import { PostsPageComponent } from './posts-page.component';
import { PostPageModule } from "./post-page/post-page.module";

@NgModule({
  imports: [
    CommonModule,
    PostPageModule,
    PostsPageRoutingModule
  ],
  declarations: [PostsPageComponent],
})
export class PostsPageModule {}
