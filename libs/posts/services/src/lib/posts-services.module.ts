import { NgModule } from '@angular/core';

import { PostsService } from "./posts.service";

@NgModule({
  providers: [PostsService]
})
export class PostsServicesModule {}
