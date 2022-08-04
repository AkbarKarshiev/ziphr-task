import { NgModule } from '@angular/core';

import { PostGuard } from "./post.guard";

@NgModule({
  providers: [PostGuard],
})
export class PostsGuardsModule {}
